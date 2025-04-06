// pages/api/auth/verify-otp.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, otp } = req.body;

        try {
            // Find the user by email
            const user = await prisma.user.findUnique({ where: { email } });

            if (!user) {
                return res.status(400).json({ error: 'User not found' });
            }

            // Check if OTP is correct and not expired
            if (user.otp !== otp) {
                return res.status(400).json({ error: 'Invalid OTP' });
            }

            if (new Date() > new Date(user.otpExpires)) {
                return res.status(400).json({ error: 'OTP has expired' });
            }

            // Mark the user as verified
            await prisma.user.update({
                where: { email },
                data: { isVerified: true },
            });

            res.status(200).json({ message: 'OTP verified successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
