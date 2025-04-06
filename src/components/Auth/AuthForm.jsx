"use client";
import React, { useState } from "react";

const AuthForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isLogin, setIsLogin] = useState(true); // Default to login form

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Example API call, replace with your actual API
        const res = await fetch(`/api/auth/${isLogin ? "login" : "register"}`, {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" },
        });

        const data = await res.json();
        setMessage(data.message || data.error);
    };

    const toggleForm = () => setIsLogin((prevState) => !prevState);

    return (
        <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-semibold text-center mb-6">
                {isLogin ? "Login to Your Account" : "Create an Account"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                {message && <p className="text-red-500 text-sm text-center mt-2">{message}</p>}

                <div>
                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                    >
                        {isLogin ? "Login" : "Register"}
                    </button>
                </div>
            </form>

            <p className="mt-4 text-sm text-center text-gray-600">
                {isLogin ? "Don’t have an account? " : "Already have an account? "}
                <button
                    onClick={toggleForm}
                    className="text-blue-500 hover:text-blue-700 transition duration-200 ease-in-out"
                >
                    {isLogin ? "Sign up" : "Login"}
                </button>
            </p>
        </div>
    );
};

export default AuthForm;
