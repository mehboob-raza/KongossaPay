import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// Nodemailer setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// POST handler
export async function POST(request) {
    const body = await request.json();
    const { email, password, username } = body;

    try {
        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: { email }, // must be unique field
        });

        if (existingUser) {
            return NextResponse.json({ error: 'Email already exists' }, { status: 400 });
        }

        const existingUsername = await prisma.user.findUnique({ where: { username } });
        if (existingUsername) {
            return NextResponse.json({ error: 'Username already exists' }, { status: 400 });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Generate OTP
        const otp = uuidv4().slice(0, 6);
        const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 min

        // Create user
        const newUser = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                username,
                otp,
                otpExpires,
            },
        });

        // Send OTP email
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Your OTP Code',
            text: `Your OTP code is: ${otp}`,
        });

        return NextResponse.json({ message: 'User registered, OTP sent.' }, { status: 201 });

    } catch (error) {
        console.error('Registration error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
