import React from 'react';
import { MdPeople, MdTrendingUp } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Services() {
  const services = {
    individuals: [
      {
        title: "International Money Transfers",
        description: "Send money to family and friends worldwide"
      },
      {
        title: "Paying Bills Abroad",
        description: "Handle international payments and bills with ease"
      },
      {
        title: "Financial Support",
        description: "Support your loved ones across borders"
      }
    ],
    businesses: [
      {
        title: "International Supplier Payments",
        description: "Manage global vendor payments efficiently"
      },
      {
        title: "Cross-border Payroll",
        description: "Streamline international payroll management"
      },
      {
        title: "Custom Solutions",
        description: "Tailored solutions for your business needs"
      }
    ],
    fees: [
      {
        title: "Real-time Calculator",
        description: "Get instant fee estimates for your transfers"
      },
      {
        title: "Available Currencies",
        description: "Access a wide range of global currencies"
      },
      {
        title: "Rate Comparison",
        description: "See how we compare to competitors"
      }
    ]
  };

  return (
    <section className="py-14 sm:py-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-6xl font-bold text-center bg-gradient-to-r from-[#0a136e] to-[#0770e6] bg-clip-text text-transparent mb-12">
            Our Services
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* For Individuals */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <MdPeople className="text-[#0a136e] text-3xl" />
                For Individuals
              </h3>
              <div className="space-y-4">
                {services.individuals.map((service, index) => (
                  <div 
                    key={index} 
                    className="border-l-2 border-[#0a136e] pl-4 hover:border-[#0770e6] transition-colors duration-300"
                  >
                    <h4 className="font-semibold text-gray-900">{service.title}</h4>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* For Businesses */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <MdTrendingUp className="text-[#0a136e] text-3xl" />
                For Businesses
              </h3>
              <div className="space-y-4">
                {services.businesses.map((service, index) => (
                  <div 
                    key={index} 
                    className="border-l-2 border-[#0a136e] pl-4 hover:border-[#0770e6] transition-colors duration-300"
                  >
                    <h4 className="font-semibold text-gray-900">{service.title}</h4>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Fees and Currencies */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <RiMoneyDollarCircleLine className="text-[#0a136e] text-3xl" />
                Fees and Currencies
              </h3>
              <div className="space-y-4">
                {services.fees.map((service, index) => (
                  <div 
                    key={index} 
                    className="border-l-2 border-[#0a136e] pl-4 hover:border-[#0770e6] transition-colors duration-300"
                  >
                    <h4 className="font-semibold text-gray-900">{service.title}</h4>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}