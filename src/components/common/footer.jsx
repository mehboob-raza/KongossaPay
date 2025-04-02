"use client";
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

function Footer() {
    const router = useRouter();

    return (
        <footer className="py-9 px-4 font-regular max-w-7xl mx-auto">
            <div className="md:max-container text-black">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:pb-8">
                    <div>
                        <h5 className="font-semibold text-lg mb-4">Personal</h5>
                        <ul className="space-y-2">
                            <li>
                                <button 
                                    onClick={() => router.push('/multi-currency-wallet')} 
                                    className="text-gray-600 hover:text-gray-500 cursor-pointer"
                                >
                                    International transfers
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => router.push('/international-transfer')} 
                                    className="text-gray-600 hover:text-gray-500 cursor-pointer"
                                >
                                    Multi-currency wallet
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-semibold text-lg mb-4">Resources</h5>
                        <ul className="space-y-2">
                            <li>
                                <button 
                                    onClick={() => router.push('/help')} 
                                    className="text-gray-600 hover:text-gray-500 cursor-pointer"
                                >
                                    Help center
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => router.push('/faqs')} 
                                    className="text-gray-600 hover:text-gray-500 cursor-pointer"
                                >
                                    FAQs
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-semibold text-lg mb-4">Company</h5>
                        <ul className="space-y-2">
                            <li>
                                <button 
                                    onClick={() => router.push('/about-us')} 
                                    className="text-gray-600 hover:text-gray-500 cursor-pointer"
                                >
                                    About KongossaPay - The brand
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => router.push('/about-us')} 
                                    className="text-gray-600 hover:text-gray-500 cursor-pointer"
                                >
                                    Go KongossaPay
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-2 border-t border-white pt-6 flex flex-col md:justify-between">
                    <div className='flex justify-between items-center mb-4'>
                        <div className='flex gap-4 font-medium text-sm'>
                            <button onClick={() => router.push('#')} className="cursor-pointer">
                                Terms & Conditions
                            </button>
                            <button onClick={() => router.push('#')} className="cursor-pointer">
                                Privacy notice
                            </button>
                        </div>

                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <button className="text-gray-600 hover:text-gray-500">
                                <Twitter color="#000000" size="18" fill='#000000' />
                            </button>
                            <button className="text-gray-600 hover:text-gray-500">
                                <Facebook color="#000000" size="18" fill='#000000' />
                            </button>
                            <button className="text-gray-600 hover:text-gray-500">
                                <Instagram color="#000000" strokeWidth={3} size="18" />
                            </button>
                            <button className="text-gray-600 hover:text-gray-500">
                                <Linkedin color="#000000" size="18" fill='#000000' />
                            </button>
                        </div>
                    </div>
                    <div className="text-gray-600 text-sm">
                        <p>KongossaPay Inc, is registered and regularised in Canada by the Financial Transactions and Report Analysis Centre of Canada as a Money Service Business. Rn: M20500281.</p>
                        <p>KongossaPay Inc is also registered in the United States as a Money Service Business with the United States Financial Crimes Enforcement Network (FinCEN). Rn: 31000231722151.</p>
                        <p>KongossaPay Payments Limited. Authorised and regulated by the Financial Conduct Authority (FCA) as Electronic Money Institution under Firm Reference Number (FRN) 931425. Registered address: Milton Hall Ely Road, Milton, Cambridge, England, CB24 6WZC UNITED KINGDOM.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
