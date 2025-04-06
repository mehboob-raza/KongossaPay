// pages/api/auth/register.js
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
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

// Send OTP to user's email
const sendOTP = async (email, otp) => {
    const mailOptions = {
        from: process.env.NODEMAILER_EMAIL,
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP code is: ${otp}`,
    };

    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        throw new Error('Failed to send OTP');
    }
};

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, password } = req.body;

        try {
            // Check if the user already exists
            const existingUser = await prisma.user.findUnique({ where: { email } });
            if (existingUser) {
                return res.status(400).json({ error: 'Email already exists' });
            }

            // Hash password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Generate OTP
            const otp = uuidv4().slice(0, 6); // 6-digit OTP
            const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // OTP expiration in 10 minutes

            // Create the user in the database
            const newUser = await prisma.user.create({
                data: {
                    email,
                    password: hashedPassword,
                    otp,
                    otpExpires,
                },
            });

            // Send OTP email
            await sendOTP(email, otp);

            res.status(201).json({ message: 'User registered successfully, OTP sent to email.' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
