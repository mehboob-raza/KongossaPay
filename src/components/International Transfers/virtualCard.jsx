import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import QRCodeGenerator from '../transfer-payment-button/QRCodeGenerator';

const VirtualCard = () => {
  return (
    <Card className="w-full rounded-3xl flex items-center max-container bg-gradient-to-br from-white to-blue-50 px-0 shadow-lg border-none my-6">
      <CardContent className="flex flex-col-reverse md:flex-row items-center justify-between md:space-y-0 px-0 py-4">
        <div className="space-y-6 w-full px-8 py-8 self-start md:mt-12">
          <h1 className="heading ">
            What's the Cost of Sending Money Abroad?
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We try to keep our overhead low, so you don't have to lower your expectations.
          </p>
          <div className="mt-8">
            <QRCodeGenerator />
          </div>
        </div>
        <div className="w-full max-w-3xl mx-auto px-6 py-12">
          <div className='w-full rounded-3xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] backdrop-blur-xl px-8 py-10'>
            <h1 className='text-4xl font-semibold mb-10 bg-gradient-to-r from-[#0a136e] to-[#0770e6] bg-clip-text text-transparent text-center'>
              Transfer Fees
            </h1>
            <div className='grid grid-cols-2 gap-6 mb-10'>
              <div className='group p-6 rounded-2xl bg-white border border-gray-100 transition-all duration-300 hover:border-[#0a136e]/20 hover:shadow-lg hover:shadow-[#0a136e]/5'>
                <p className='font-medium text-gray-400 text-sm mb-2'>Fixed fees</p>
                <p className='font-semibold text-3xl text-gray-900'>$0</p>
              </div>
              <div className='group p-6 rounded-2xl bg-white border border-gray-100 transition-all duration-300 hover:border-[#0770e6]/20 hover:shadow-lg hover:shadow-[#0770e6]/5'>
                <p className='font-medium text-gray-400 text-sm mb-2'>Exchange fees</p>
                <p className='font-semibold text-3xl text-gray-900'>$0</p>
              </div>
              <div className='group p-6 rounded-2xl bg-white border border-gray-100 transition-all duration-300 hover:border-[#0a136e]/20 hover:shadow-lg hover:shadow-[#0a136e]/5'>
                <p className='font-medium text-gray-400 text-sm mb-2'>Processing fees</p>
                <p className='font-semibold text-3xl text-gray-900'>$0</p>
              </div>
              <div className='group p-6 rounded-2xl bg-white border border-gray-100 transition-all duration-300 hover:border-[#0770e6]/20 hover:shadow-lg hover:shadow-[#0770e6]/5'>
                <p className='font-medium text-gray-400 text-sm mb-2'>Hidden fees</p>
                <p className='font-semibold text-3xl text-gray-900'>$0</p>
              </div>
            </div>
            <div className='text-center p-6 rounded-2xl bg-gradient-to-r from-[#0a136e]/5 to-[#0770e6]/5 border border-[#0a136e]/10'>
              <p className='text-gray-600 text-lg mb-2'>
                No Hidden Fees?
              </p>
              <p className='text-2xl font-bold bg-gradient-to-r from-[#0a136e] to-[#0770e6] bg-clip-text text-transparent'>
                Yes, Absolutely Free!
              </p>
            </div>
            <div className="flex items-center justify-center mt-6 gap-2">
              <svg className="w-5 h-5 text-[#0a136e]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v4a1 1 0 102 0V7zm-1-3a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-500">
                Transparent pricing, no surprises
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VirtualCard;