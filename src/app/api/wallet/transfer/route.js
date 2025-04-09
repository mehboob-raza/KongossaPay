import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req) {
    const { senderId, recipientEmail, amount } = await req.json();

    try {
        const sender = await prisma.wallet.findUnique({ where: { userId: senderId } });
        const recipientUser = await prisma.user.findUnique({ where: { email: recipientEmail } });

        if (!sender || !recipientUser) {
            return NextResponse.json({ error: 'Invalid sender or recipient' }, { status: 400 });
        }

        const recipient = await prisma.wallet.findUnique({ where: { userId: recipientUser.id } });

        if (!recipient) {
            return NextResponse.json({ error: 'Recipient wallet not found' }, { status: 404 });
        }

        if (sender.balance < amount) {
            return NextResponse.json({ error: 'Insufficient balance' }, { status: 400 });
        }

        // Begin transaction
        const transfer = await prisma.$transaction([
            prisma.wallet.update({
                where: { userId: senderId },
                data: { balance: { decrement: amount } },
            }),
            prisma.wallet.update({
                where: { userId: recipientUser.id },
                data: { balance: { increment: amount } },
            }),
            prisma.transaction.create({
                data: {
                    senderId,
                    recipientId: recipientUser.id,
                    amount,
                    status: 'completed',
                    type: 'internal',
                },
            }),
        ]);

        return NextResponse.json({ message: 'Transfer successful', transfer });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}
