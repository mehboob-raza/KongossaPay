// pages/api/auth/user.js
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const { authorization } = req.headers;

        if (!authorization) {
            return res.status(401).json({ error: 'Authorization token is required' });
        }

        try {
            // Verify the token
            const token = authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

            // Get user information based on the decoded token (userId)
            const user = await prisma.user.findUnique({
                where: { id: decoded.userId },
                select: {
                    id: true,
                    email: true,
                    username: true,
                    balance: true, // Include balance or other fields as needed
                    isVerified: true,
                    createdAt: true,
                    updatedAt: true,
                },
            });

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            res.status(200).json(user);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
