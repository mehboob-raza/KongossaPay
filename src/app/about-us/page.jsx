import HeroSection from "@/components/shared/HeroSection";
import { MdSpeed, MdSecurity, MdSupport, MdPeople, MdTrendingUp, MdPhoneIphone } from "react-icons/md";
import { RiMoneyDollarCircleLine, RiGlobalLine, RiUserHeartLine, RiShieldCheckLine } from "react-icons/ri";
import Image from "next/image";

export default function AboutUs() {
  const features = [
    {
      icon: RiGlobalLine,
      title: "Global Reach",
      description: "Send money to over 150 countries worldwide with competitive rates."
    },
    {
      icon: MdSpeed,
      title: "Fast Transfers",
      description: "Quick and efficient transfers completed within minutes."
    },
    {
      icon: MdSecurity,
      title: "Secure Platform",
      description: "Bank-grade security protecting your money and data."
    },
    {
      icon: RiMoneyDollarCircleLine,
      title: "Great Rates",
      description: "Competitive exchange rates with low transfer fees."
    }
  ];

  const stats = [
    { number: "150+", label: "Countries Served" },
    { number: "1M+", label: "Happy Customers" },
    { number: "24/7", label: "Customer Support" },
    { number: "100%", label: "Success Rate" }
  ];

  const benefits = [
    {
      icon: MdPhoneIphone,
      title: "Easy to Use",
      description: "Simple and intuitive mobile app for seamless transfers"
    },
    {
      icon: RiUserHeartLine,
      title: "Customer First",
      description: "Dedicated support team ready to help you"
    },
    {
      icon: MdTrendingUp,
      title: "Growing Network",
      description: "Constantly expanding our global presence"
    },
    {
      icon: RiShieldCheckLine,
      title: "Fully Compliant",
      description: "Licensed and regulated money transfer service"
    }
  ];

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
    <div className="bg-gradient-to-b from-white to-blue-50">
      <HeroSection
        title="About KongossaPay"
        subtitle="KongossaPay was born out of the desire to simplify international money transfers. Our mission is to connect people and businesses worldwide by offering a reliable, fast, and affordable service."
      />

      {/* New Services Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-[#0a136e] to-[#0770e6] bg-clip-text text-transparent mb-12">
          Our Services
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* For Individuals */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <MdPeople className="text-[#0a136e]" />
              For Individuals
            </h3>
            <div className="space-y-4">
              {services.individuals.map((service, index) => (
                <div key={index} className="border-l-2 border-[#0a136e] pl-4">
                  <h4 className="font-semibold text-gray-900">{service.title}</h4>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* For Businesses */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <MdTrendingUp className="text-[#0a136e]" />
              For Businesses
            </h3>
            <div className="space-y-4">
              {services.businesses.map((service, index) => (
                <div key={index} className="border-l-2 border-[#0a136e] pl-4">
                  <h4 className="font-semibold text-gray-900">{service.title}</h4>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Fees and Currencies */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <RiMoneyDollarCircleLine className="text-[#0a136e]" />
              Fees and Currencies
            </h3>
            <div className="space-y-4">
              {services.fees.map((service, index) => (
                <div key={index} className="border-l-2 border-[#0a136e] pl-4">
                  <h4 className="font-semibold text-gray-900">{service.title}</h4>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Features */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-4">
                <feature.icon className="w-12 h-12 text-[#0a136e]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-[#0a136e] to-[#0770e6] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#0a136e] to-[#0770e6] bg-clip-text text-transparent mb-6">
              Our Mission
            </h2>
            <p className="text-gray-600 mb-4">
              We're on a mission to make international money transfers accessible to everyone. Our platform combines cutting-edge technology with user-friendly design, ensuring that sending money internationally is not just fast and secure, but also simple and stress-free.
            </p>
            <p className="text-gray-600">
              Whether you're supporting family back home, paying for international services, or conducting business globally, KongossaPay provides the tools and technology to make it seamless.
            </p>
          </div>
          <div className="w-full md:w-1/2 relative h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a136e]/10 to-[#0770e6]/10 rounded-2xl"></div>
            <Image
              src="/images/Home/mobile.png"
              alt="KongossaPay App"
              fill
              className="object-contain p-8"
            />
          </div>
        </div>
      </div>

      {/* Additional Benefits */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-[#0a136e] to-[#0770e6] bg-clip-text text-transparent mb-12">
          Why People Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="mb-4 flex justify-center">
                <benefit.icon className="w-12 h-12 text-[#0a136e]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-[#0a136e] to-[#0770e6] py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join millions of satisfied customers who trust KongossaPay for their international money transfers.
          </p>
          <button className="bg-white text-[#0a136e] px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
            Download App Now
          </button>
        </div>
      </div>
    </div>
  );
}
