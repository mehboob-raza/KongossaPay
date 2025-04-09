'use client';

import { useEffect, useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import PayPalButton from '@/components/PayPalButton';

export default function CreateWalletPage() {
    const [wallet, setWallet] = useState(null);
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');
    const [amount, setAmount] = useState('');
    const router = useRouter();

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user') || '{}');
        if (!userData?.id) return router.push('/auth-form');
        setUser(userData);
        fetchWallet(userData.email);
    }, []);

    const fetchWallet = async (userEmail) => {
        try {
            const res = await axios.get(`/api/wallet/by-email?email=${userEmail}`);
            setWallet(res.data.wallet);
        } catch (err) {
            console.warn('Wallet not found, create it first.');
        }
    };

    const createWallet = async () => {
        try {
            const res = await axios.post('/api/wallet/create', { userId: user.id });
            setWallet(res.data.wallet || res.data); // depends on your response format
        } catch (err) {
            console.error('Wallet creation error:', err);
        }
    };

    const fundWallet = async (amount) => {
        try {
            await axios.post('/api/wallet/fund', {
                userId: user.id,
                amount: parseFloat(amount),
            });
            alert('Wallet funded!');
            fetchWallet(user.email);
        } catch (err) {
            console.error('Funding failed', err);
        }
    };

    return (
        <div className="max-w-xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">KongossaPay Wallet</h1>

            {wallet ? (
                <div className="mb-6 border rounded p-4">
                    <p><strong>User Email:</strong> {user.email}</p>
                    <p><strong>Wallet Balance:</strong> ${wallet.balance.toFixed(2)}</p>
                </div>
            ) : (
                <button
                    onClick={createWallet}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer"
                >
                    Create Wallet
                </button>
            )}

            {wallet && (
                <div className="mt-6">
                    <h2 className="text-lg font-semibold mb-4">Send Payment</h2>

                    <input
                        type="email"
                        placeholder="Recipient's Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border p-2 w-full mb-4"
                    />
                    <input
                        type="number"
                        placeholder="Amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="border p-2 w-full mb-4"
                    />

                    <PayPalButton amount={amount} onApprove={() => fundWallet(amount)} />

                </div>
            )}
        </div>
    );
}
