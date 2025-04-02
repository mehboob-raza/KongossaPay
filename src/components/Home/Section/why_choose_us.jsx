import { MdSpeed, MdSecurity } from "react-icons/md";
import { RiMoneyDollarCircleLine, RiGlobalLine } from "react-icons/ri";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Fast Transfers",
      description: "Send money in just a few clicks, received in second or 24-48 hours",
      icon: MdSpeed,
      color: "#e2fac0",
      darkColor: "#94a87e"
    },
    {
      title: "Competitive Fees",
      description: "Save up to 70% compared to traditional banks",
      icon: RiMoneyDollarCircleLine,
      color: "#f7deca",
      darkColor: "#a38d7e"
    },
    {
      title: "Maximum Security",
      description: "Advanced encryption technology to protect your data",
      icon: MdSecurity,
      color: "#cfe0fc",
      darkColor: "#7790b3"
    },
    {
      title: "Global Coverage",
      description: "Send money to over 150 countries",
      icon: RiGlobalLine,
      color: "#e8d3fe",
      darkColor: "#9788a7"
    }
  ];

  return (
    <section className="py-14 sm:py-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center gap-6 w-full text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-[#0a136e] to-[#0770e6] bg-clip-text text-transparent">
            Why Choose KongossaPay?
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Experience the difference with KongossaPay's innovative money transfer solutions
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col items-center p-6 rounded-2xl transition-all duration-300"
              style={{
                background: `linear-gradient(to bottom, ${feature.color}40, ${feature.color})`,
                border: `2px solid ${feature.color}`,
                boxShadow: `0 4px 6px -1px ${feature.color}40`
              }}
            >
              <div className="mb-4">
                <feature.icon 
                  className="w-16 h-16"
                  style={{ color: feature.darkColor }}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
