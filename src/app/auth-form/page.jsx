import AuthForm from '@/components/Auth/AuthForm';
import React from 'react'; // <-- Add this import

export default function AuthPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            {/* Main container */}
            <div className="flex max-w-screen-xl w-full h-full bg-white rounded-lg shadow-lg">
                {/* Left side - Image */}
                <div className="hidden lg:block w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
                    {/* The image will only show on large screens (lg and above) */}
                </div>

                {/* Right side - Authentication form */}
                <div className="w-full lg:w-1/2 p-8">
                    <AuthForm />
                </div>
            </div>
        </div>
    );
}
