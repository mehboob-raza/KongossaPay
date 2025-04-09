import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

export async function POST(req) {
    const { userId } = await req.json();

    try {
        const existing = await prisma.wallet.findUnique({ where: { userId } });
        if (existing) return new Response(JSON.stringify({ error: 'Wallet already exists' }), { status: 400 });

        const wallet = await prisma.wallet.create({
            data: {
                userId,
                paymentId: uuidv4(),
            },
        });

        return new Response(JSON.stringify(wallet), { status: 200 });
    } catch (err) {
        console.error(err);
        return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
    }
}
