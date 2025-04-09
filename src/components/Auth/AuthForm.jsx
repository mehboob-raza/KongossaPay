"use client";

import React, { useState } from "react";
import OtpVerification from "./OtpVerification";
import { useRouter } from 'next/navigation';

const AuthForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const [loading, setLoading] = useState(false);
    const [showOtp, setShowOtp] = useState(false);
    const [registeredEmail, setRegisteredEmail] = useState("");
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        // Validate input
        if (!email || !password || (!isLogin && !username)) {
            setMessage('Email, Username, and Password are required!');
            setLoading(false);
            return;
        }

        try {
            const res = await fetch(`/api/auth/${isLogin ? 'login' : 'register'}`, {
                method: 'POST',
                body: JSON.stringify({ email, password, username }),
                headers: { 'Content-Type': 'application/json' },
            });

            const data = await res.json();
            setMessage(data.message || data.error);
            setLoading(false);

            console.log('Response:', data); // Log the response from the server

            // If registration was successful, show OTP verification form
            if (!isLogin && res.ok) {
                setRegisteredEmail(email);
                setShowOtp(true);
            }
            if (isLogin && res.ok) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', JSON.stringify(data.user));
                router.push('/');
            }

        } catch (error) {
            console.error('Auth error:', error);
            setMessage('Something went wrong');
            setLoading(false);
        }
    };



    const toggleForm = () => setIsLogin((prevState) => !prevState);

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-center mb-6">
                {isLogin ? 'Login to Your Account' : 'Create an Account'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
                        required
                    />
                </div>

                {!isLogin && (
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-600">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>
                )}

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
                        required
                    />
                </div>

                {message && <p className="text-red-500 text-sm text-center mt-2">{message}</p>}

                <div>
                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg cursor-pointer"
                        disabled={loading}
                    >
                        {loading ? 'Processing...' : isLogin ? 'Login' : 'Register'}
                    </button>
                </div>
            </form>

            <p className="mt-4 text-sm text-center text-gray-600">
                {isLogin ? 'Don’t have an account? ' : 'Already have an account? '}
                <button onClick={toggleForm} className="text-blue-500 cursor-pointer">
                    {isLogin ? 'Sign up' : 'Login'}
                </button>
            </p>

            {showOtp ? (
                <OtpVerification email={registeredEmail} onSuccess={() => {
                    setShowOtp(false);
                    setIsLogin(true);
                    setMessage("OTP Verified. You can now login.");
                }} />
            ) : (
                <>
                    {/* your login/register form here */}
                </>
            )}

        </div>
    );
};

export default AuthForm;
