import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get('email');

    if (!email) {
        return NextResponse.json({ error: 'Email required' }, { status: 400 });
    }

    try {
        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        const wallet = await prisma.wallet.findUnique({
            where: { userId: user.id },
        });

        if (!wallet) {
            return NextResponse.json({ error: 'Wallet not found' }, { status: 404 });
        }

        return NextResponse.json({ wallet });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
