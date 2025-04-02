import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";

const contactDetails = [
    {
        icon: <Mail size={24} className="text-white" />,
        title: "EMAIL",
        description: "Our friendly team is here to help.",
        content: (
            <>
                <p>support@kongossapay.com</p>
            </>
        ),
    },
    // {
    //     icon: <MapPin size={24} className="text-white" />,
    //     title: "OFFICE ADDRESS",
    //     description: "Come say hello at our office HQ.",
    //     content: (
    //         <Link href="https://maps.google.com?q=600+Matheson+Blvd+W,Mississauga+ON" className="hover:text-[#0770e6] transition-colors duration-300">
    //             600 Matheson Blvd W, Mississauga ON
    //         </Link>
    //     ),
    // },
    {
        icon: <Phone size={24} className="text-white" />,
        title: "PHONE",
        description: "Our friendly team is here to help.",
        content: (
            <Link href="tel:+16475767091" className="hover:text-[#0770e6] transition-colors duration-300">
                +1 111-222-3333
            </Link>
        ),
    },
    {
        icon: <MessageCircle size={24} className="text-white" />,
        title: "Live CHAT WITH US",
        description: "24/7 Customer Support",
        content: (
            <Link href="#" className="hover:text-[#0770e6] transition-colors duration-300">
                Chat with us
            </Link>
        ),
    },
];

const ContactSection = () => {
    return (
        <section>
            <div className="flex flex-col items-start gap-8">
                {contactDetails.map((item, index) => (
                    <div key={index} className="flex space-x-1 md:space-x-4 items-start">
                        {/* Icon */}
                        <div className="p-3 bg-gradient-to-r from-[#0a136e] to-[#0770e6] rounded-full shadow-lg">
                            {item.icon}
                        </div>

                        {/* Content */}
                        <div className="flex flex-col items-start whitespace-pre-wrap">
                            <h3 className="text-[#0a136e] font-semibold text-sm">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {item.description}
                            </p>
                            <div className="mt-2 text-gray-900 text-sm">
                                {item.content}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ContactSection;
