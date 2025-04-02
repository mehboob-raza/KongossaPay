import { 
  MdPersonAddAlt1, 
  MdGroups, 
  MdAttachMoney,
  MdPayments,
  MdCheck 
} from "react-icons/md";

export default function HowWork() {
  const steps = [
    {
      title: "Sign up for free",
      description: "Create your account in minutes",
      icon: MdPersonAddAlt1
    },
    {
      title: "Add a recipient",
      description: "Enter your recipient's details",
      icon: MdGroups
    },
    {
      title: "Choose amount & currency",
      description: "Select how much to send",
      icon: MdAttachMoney
    },
    {
      title: "Select payment method",
      description: "Choose how to pay",
      icon: MdPayments
    },
    {
      title: "Confirm and send",
      description: "Review and complete transfer",
      icon: MdCheck
    }
  ];

  return (
    <section className="py-14 sm:py-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center gap-6 w-full text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-[#0a136e] to-[#0770e6] bg-clip-text text-transparent">
            How It Works
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Send money abroad in 5 simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start justify-between relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-1 bg-gradient-to-r from-[#0a136e] to-[#0770e6]" />

            {/* Steps */}
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center w-full md:w-48 relative z-10 mb-8 md:mb-0"
              >
                {/* Icon Circle */}
                <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center mb-4 relative">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#0a136e] to-[#0770e6] flex items-center justify-center">
                    <step.icon size={32} className="text-white" />
                  </div>
                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center">
                    <span className="text-[#0a136e] font-bold">{index + 1}</span>
                  </div>
                </div>

                {/* Text */}
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
