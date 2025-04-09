// 'use client';

// import { useEffect, useState } from 'react';
// import axios from 'axios';

// export default function WalletPage() {
//     const [wallet, setWallet] = useState(null);
//     const [user, setUser] = useState(null);

//     useEffect(() => {
//         const userData = JSON.parse(localStorage.getItem('user') || '{}');
//         if (!userData?.id) return;
//         setUser(userData);
//         fetchWallet(userData.id);
//     }, []);

//     const fetchWallet = async (userId) => {
//         try {
//             const res = await axios.get(`/api/wallet/get?userId=${userId}`);
//             setWallet(res.data);
//         } catch (err) {
//             console.error(err);
//         }
//     };

//     return (
//         <div className="max-w-xl mx-auto p-6">
//             <h1 className="text-2xl font-bold mb-4">Your Wallet</h1>
//             {wallet ? (
//                 <div className="bg-white p-4 shadow rounded-lg">
//                     <p><strong>Balance:</strong> ${wallet.balance.toFixed(2)}</p>
//                     <p><strong>Payment ID:</strong> {wallet.paymentId}</p>
//                 </div>
//             ) : (
//                 <p>Loading wallet...</p>
//             )}
//         </div>
//     );
// }



'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import TransferForm from '@/components/TransferForm';

export default function WalletPage() {
    const [userId, setUserId] = useState('');
    const [wallet, setWallet] = useState(null);
    const [receiver, setReceiver] = useState('');
    const [amount, setAmount] = useState('');

    useEffect(() => {
        const uid = localStorage.getItem('userId');
        setUserId(uid);
        if (uid) fetchWallet(uid);
    }, []);

    const fetchWallet = async (uid) => {
        const { data } = await axios.get(`/api/user/wallet?userId=${uid}`);
        setWallet(data);
    };

    const sendMoney = async () => {
        try {
            await axios.post('/api/transaction/send', {
                senderId: userId,
                receiverIdentifier: receiver,
                amount: parseFloat(amount),
            });
            alert('Payment sent!');
            fetchWallet(userId); // refresh balance
        } catch (err) {
            alert(err?.response?.data?.error || 'Transfer failed');
        }
    };

    return (
        <div className="max-w-xl mx-auto p-6">
            <h1 className="text-xl font-bold mb-4">Your Wallet</h1>

            {wallet && (
                <>
                    <TransferForm userId={user.id} />
                </>
            )}
        </div>
    );
}
