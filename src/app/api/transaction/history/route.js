// pages/api/transaction/history.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const { userId } = req.query;
    if (req.method !== 'GET') return res.status(405).end();

    try {
        const transactions = await prisma.transaction.findMany({
            where: {
                OR: [
                    { senderId: userId },
                    { receiverId: userId },
                ],
            },
            include: {
                sender: true,
                receiver: true,
            },
            orderBy: { createdAt: 'desc' },
        });

        res.status(200).json(transactions);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to load history' });
    }
}
