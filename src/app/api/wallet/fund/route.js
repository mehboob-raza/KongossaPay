// // pages/api/wallet/fund/route.js

// import { prisma } from '../../lib/prisma'; // import your Prisma instance
// import { NextResponse } from 'next/server';

// export async function POST(req) {
//     const { userId, amount } = await req.json();

//     // Validate the incoming data
//     if (!userId || !amount) {
//         return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
//     }

//     try {
//         const user = await prisma.user.findUnique({ where: { id: userId } });

//         if (!user) {
//             return NextResponse.json({ error: 'User not found' }, { status: 404 });
//         }

//         const updatedUser = await prisma.user.update({
//             where: { id: userId },
//             data: { walletBalance: user.walletBalance + parseFloat(amount) },
//         });

//         // Record the transaction (optional)
//         await prisma.transaction.create({
//             data: {
//                 senderId: userId,
//                 amount: parseFloat(amount),
//                 status: 'completed', // can vary based on logic
//             },
//         });

//         return NextResponse.json({ message: 'Wallet funded successfully' }, { status: 200 });
//     } catch (err) {
//         console.error('Error funding wallet', err);
//         return NextResponse.json({ error: 'Server error' }, { status: 500 });
//     }
// }


import { prisma } from '@/lib/prisma';

export async function POST(req) {
    const { userId, amount } = await req.json();

    const wallet = await prisma.wallet.update({
        where: { userId },
        data: { balance: { increment: amount } }
    });

    return Response.json(wallet);
}
