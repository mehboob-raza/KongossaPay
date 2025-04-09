'use client';

import { useState } from 'react';
import axios from 'axios';


export default function TransferForm({ userId }) {
    const [email, setEmail] = useState('');
    const [amount, setAmount] = useState('');

    const sendToUser = async () => {
        try {
            await axios.post('/api/wallet/transfer', {
                senderId: userId,
                recipientEmail: email,
                amount: parseFloat(amount),
            });
            alert('Transfer successful!');
            setEmail('');
            setAmount('');
        } catch (err) {
            console.error(err);
            alert('Transfer failed');
        }
    };

    return (
        <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Send Money to Another User</h2>
            <input
                type="email"
                placeholder="Recipient's Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 w-full mb-3"
            />
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="border p-2 w-full mb-3"
            />
            <button
                onClick={sendToUser}
                className="bg-green-600 text-white px-4 py-2 rounded-lg"
            >
                Send Payment
            </button>
        </div>
    );
}
