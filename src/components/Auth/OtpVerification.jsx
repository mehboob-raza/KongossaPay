"use client";

import { useState } from "react";

const OtpVerification = ({ email, onSuccess }) => {
    const [otp, setOtp] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleVerify = async (e) => {
        e.preventDefault();
        setLoading(true);

        const res = await fetch("/api/auth/verify-otp", {
            method: "POST",
            body: JSON.stringify({ email, otp }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await res.json();
        setMessage(data.message || data.error);
        setLoading(false);

        if (res.ok) {
            onSuccess?.(); // Optional callback to update parent UI
        }
    };

    return (
        <div className="max-w-sm mx-auto mt-6 bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-center">Verify OTP</h2>
            <form onSubmit={handleVerify} className="space-y-4">
                <input
                    type="text"
                    placeholder="Enter your OTP"
                    className="w-full border px-3 py-2 rounded-lg"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                />
                {message && <p className="text-sm text-center text-red-500">{message}</p>}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                    {loading ? "Verifying..." : "Verify OTP"}
                </button>
            </form>
        </div>
    );
};

export default OtpVerification;
