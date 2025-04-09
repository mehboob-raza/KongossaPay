import AuthForm from '@/components/Auth/AuthForm';
import React from 'react';
import Image from 'next/image';
export default function AuthPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="hidden lg:block w-1/2 bg-cover bg-center" >
                <div className="hidden lg:block w-1/2 relative">
                    <Image
                        src="/images/image.jpg"
                        alt="kongossaPay branding"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        priority
                    />
                </div>
            </div>

            <div className="w-full lg:w-1/2 p-8">
                <AuthForm />
            </div>

        </div>
    );
}
