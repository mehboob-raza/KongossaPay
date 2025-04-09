import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {
    const { email, otp } = await req.json();

    try {
        const user = await prisma.user.findUnique({ where: { email } });

        if (!user) {
            return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
        }

        if (user.otp !== otp) {
            return new Response(JSON.stringify({ error: 'Invalid OTP' }), { status: 400 });
        }

        if (user.otpExpires < new Date()) {
            return new Response(JSON.stringify({ error: 'OTP expired' }), { status: 400 });
        }

        // Clear the OTP after successful verification
        await prisma.user.update({
            where: { email },
            data: {
                otp: null,
                otpExpires: null,
                isVerified: true, // optional: mark as verified
            },
        });

        return new Response(JSON.stringify({ message: 'OTP verified successfully' }), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 });
    }
}
