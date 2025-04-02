import { FaDownload, FaHistory, FaBell, FaUserCheck } from 'react-icons/fa';
import { RiSecurePaymentLine, RiTimeLine, RiStarFill } from 'react-icons/ri';
import { BiTransfer } from 'react-icons/bi';
import Image from 'next/image';

export default function AppDownload() {
    const features = [
        { icon: FaUserCheck, text: "Login" },
        { icon: BiTransfer, text: "Simple Few Taps to Send Money" },
        { icon: FaHistory, text: "View transaction History" },
        { icon: FaBell, text: "GZT Instant App notifications" },
        { icon: RiSecurePaymentLine, text: "No hidden fees" },
        { icon: RiTimeLine, text: "24/7 Transfer" },
        { icon: RiStarFill, text: "5-star customer rating" },
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-1 gap-12 items-center">
                    {/* Left Content */}
                    <div className="flex flex-col gap-12">
                        <h2 className="heading text-center">App Download</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center">
                            Fast, Secure Money Transfers. Access your account via your mobile phone.
                            View Balance, Transfer Funds, View Transactions wherever you are.
                        </p>

                        <div className="grid sm:grid-cols-3 gap-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all">
                                    <feature.icon className="w-8 h-8 text-[#0770e6]" />
                                    <span className="text-gray-700">{feature.text}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-6 mt-8">
                            <button className="flex items-center gap-2 bg-[#0a136e] text-white px-8 py-3 rounded-full hover:bg-[#0770e6] transition-colors">
                                <FaDownload className="w-5 h-5" />
                                Download App
                            </button>
                            <button className="flex items-center gap-2 border-2 border-[#0a136e] text-[#0a136e] px-8 py-3 rounded-full hover:bg-[#0a136e] hover:text-white transition-all">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    {/* <div className="relative h-[600px] flex items-center justify-center">
            <div className="absolute w-[300px] h-[600px] bg-gradient-to-r from-[#0a136e] to-[#0770e6] rounded-[40px] opacity-10 transform rotate-12"></div>
            <Image
              src="/images/app-mockup.png" // You'll need to add your app mockup image
              alt="KongossaPay App"
              width={280}
              height={560}
              className="relative z-10"
            />
          </div> */}
                </div>
            </div>
        </section>
    );
}
