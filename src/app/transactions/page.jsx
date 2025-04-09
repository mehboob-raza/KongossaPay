'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function TransactionsPage() {
    const [transactions, setTransactions] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user') || '{}');
        if (!userData?.id) return;
        setUser(userData);
        fetchTransactions(userData.id);
    }, []);

    const fetchTransactions = async (userId) => {
        try {
            const res = await axios.get(`/api/transaction/history?userId=${userId}`);
            setTransactions(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Your Transactions</h1>
            {transactions.length === 0 && <p>No transactions yet.</p>}

            <ul className="divide-y divide-gray-200">
                {transactions.map((tx, idx) => (
                    <li key={idx} className="py-4">
                        <p><strong>From:</strong> {tx.sender?.email}</p>
                        <p><strong>To:</strong> {tx.receiver?.email}</p>
                        <p><strong>Amount:</strong> ${tx.amount}</p>
                        <p><strong>Date:</strong> {new Date(tx.createdAt).toLocaleString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}