// pages/api/transaction/send.js
import { PrismaClient } from '@prisma/client';
import nodemailer from 'nodemailer';

const prisma = new PrismaClient();

// Nodemailer transport setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD,
    },
});

const sendTransactionNotification = async (receiverEmail, amount) => {
    const mailOptions = {
        from: process.env.NODEMAILER_EMAIL,
        to: receiverEmail,
        subject: 'You have received a payment!',
        text: `You have received a payment of $${amount}.`,
    };

    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error('Failed to send email:', error);
    }
};

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end();

    const { senderId, receiverIdentifier, amount } = req.body;

    try {
        const receiver = await prisma.user.findFirst({
            where: {
                OR: [{ email: receiverIdentifier }, { username: receiverIdentifier }],
            },
            include: { email: true },
        });

        if (!receiver) return res.status(404).json({ error: 'Receiver not found' });

        const senderWallet = await prisma.wallet.findUnique({ where: { userId: senderId } });
        if (!senderWallet || senderWallet.balance < amount)
            return res.status(400).json({ error: 'Insufficient funds' });

        // Start transaction
        await prisma.$transaction([
            prisma.wallet.update({
                where: { userId: senderId },
                data: { balance: { decrement: amount } },
            }),
            prisma.wallet.update({
                where: { userId: receiver.id },
                data: { balance: { increment: amount } },
            }),
            prisma.transaction.create({
                data: {
                    senderId,
                    receiverId: receiver.id,
                    amount,
                },
            }),
        ]);

        // Send email to receiver
        await sendTransactionNotification(receiver.email, amount);

        res.status(200).json({ message: 'Transfer successful' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Transfer failed' });
    }
}
