// pages/faqs.tsx
"use client";
import React, { useState } from "react";
import { MdExpandMore } from "react-icons/md";
import HeroSection from "@/components/shared/HeroSection";

const faqData = [
  {
    category: "General Questions",
    questions: [
      {
        question: "What is this money transfer app?",
        answer:
          "Our money transfer app is a secure digital platform that lets you send and receive money domestically and internationally, exchange currencies, and manage your finances—all from your smartphone or computer."
      },
      {
        question: "How do I download the money transfer app?",
        answer:
          "Download the app for free from the App Store (iOS) or Google Play Store (Android). Search for the app by name and install it in just a few taps."
      },
      {
        question: "Is the money transfer app free to use?",
        answer:
          "Yes, the app is free to download. However, fees may apply for certain transactions, such as international transfers or currency conversions. Check the 'Fees' section in the app for full details."
      },
      {
        question: "Which countries and currencies does the app support?",
        answer:
          "Our app supports money transfers to and from numerous countries and currencies. Visit the app or our website for a full list of supported locations."
      }
    ]
  },
  {
    category: "Account Setup",
    questions: [
      {
        question: "How do I create an account?",
        answer:
          "Download the app, provide your personal details (name, email, phone number), and verify your identity by uploading a valid ID (e.g., passport or driver's license)."
      },
      {
        question: "Why do I need to verify my identity?",
        answer:
          "Identity verification is required to comply with global anti-money laundering (AML) and know-your-customer (KYC) regulations. It ensures your account and transactions are secure."
      },
      {
        question: "How long does verification take?",
        answer:
          "Verification is usually completed in minutes but can take up to 24 hours in some cases. You'll receive a notification once your account is verified."
      },
      {
        question: "Can I use the app without verifying my identity?",
        answer: "No, verification is mandatory to send or receive money."
      }
    ]
  },
  {
    category: "Sending Money",
    questions: [
      {
        question: "How do I send money?",
        answer:
          "Log in, tap 'Send Money,' enter the recipient's details (phone number, email, or bank account), choose the amount and currency, and confirm the transaction."
      },
      {
        question: "How long does a transfer take?",
        answer:
          "Domestic transfers are usually instant, while international transfers can take 1-5 business days, depending on the destination and payment method."
      },
      {
        question: "What information do I need to send money?",
        answer:
          "You'll need the recipient's full name, phone number, email, or bank account details."
      },
      {
        question: "Are there limits on how much I can send?",
        answer:
          "Yes, limits vary based on your account type and local regulations. Check your limits in the 'Account Settings' section."
      }
    ]
  },
  {
    category: "Receiving Money",
    questions: [
      {
        question: "How do I receive money?",
        answer:
          "Share your registered phone number, email, or bank account details with the sender. Once the transfer is initiated, the funds will be credited to your account."
      },
      {
        question: "How do I withdraw received funds?",
        answer:
          "You can withdraw funds to your linked bank account, use them for transfers, or, in some cases, withdraw cash from partner locations."
      },
      {
        question: "Is there a fee to receive money?",
        answer:
          "Most transfers are free to receive, but fees may apply depending on the sender's location or payment method. Check the app for details."
      }
    ]
  },
  {
    category: "Fees and Exchange Rates",
    questions: [
      {
        question: "What fees apply to money transfers?",
        answer:
          "Fees depend on the transfer amount, destination, and payment method. The app will show the exact fee before you confirm the transaction."
      },
      {
        question: "How are exchange rates calculated?",
        answer:
          "Exchange rates are based on real-time market rates and may include a small margin. The app displays the rate before you confirm the transfer."
      },
      {
        question: "Can I lock in an exchange rate?",
        answer:
          "Yes, some transfers allow you to lock in the exchange rate for a limited time. Check the app for this feature."
      }
    ]
  },
  {
    category: "Security and Privacy",
    questions: [
      {
        question: "Is my money safe?",
        answer:
          "Absolutely. Our app uses advanced encryption and security measures to protect your data and transactions."
      },
      {
        question: "What happens if I send money to the wrong person?",
        answer:
          "Contact customer support immediately. If the transfer hasn't been completed, we may be able to cancel it. If the funds have already been received, we'll assist you in contacting the recipient."
      },
      {
        question: "How do I report a suspicious transaction?",
        answer:
          "Go to the 'Support' section in the app or contact our customer support team directly."
      }
    ]
  },
  {
    category: "Troubleshooting",
    questions: [
      {
        question: "What should I do if my transfer is delayed?",
        answer:
          "Check the transaction status in the app. If the transfer is still pending, contact customer support with your transaction ID for assistance."
      },
      {
        question: "Why was my transfer declined?",
        answer:
          "Transfers can be declined due to insufficient funds, incorrect recipient details, or security concerns. Check your account and transaction details, or contact support for help."
      },
      {
        question: "How do I update my personal information?",
        answer:
          "Go to 'Account Settings' in the app and edit your details. You may need to re-verify your identity if you change critical information."
      }
    ]
  }
];

export default function Faqs() {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <HeroSection
        title="KongossaPay Money Transfer App FAQ"
        subtitle="Looking for a reliable way to send and receive money? Our money transfer app makes it easy, fast, and secure. Check out our comprehensive FAQ to learn how to use the app, understand fees, and get help with common issues."
      />
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center gap-6 w-full text-center mb-16">
          <p className="text-lg text-gray-600 max-w-2xl">
          Everything You Need to Know.Find answers to common questions about KongossaPay's services
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="max-w-4xl mx-auto">
          {faqData.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-8 ">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {section.category}
              </h2>

              <div className="space-y-4 ">
                {section.questions.map((item, index) => {
                  const itemIndex = `${sectionIndex}-${index}`;
                  return (
                    <div
                      key={index}
                      className="border border-[#0a136e]/20 rounded-lg overflow-hidden hover:border-[#0a136e]/40 transition-colors duration-300"
                    >
                      <button
                        onClick={() => toggleItem(itemIndex)}
                        className="w-full flex items-center justify-between p-4 text-left cursor-pointer"
                      >
                        <span className="font-medium text-gray-900">
                          {item.question}
                        </span>
                        <MdExpandMore
                          className={`text-[#0a136e] text-2xl transition-transform duration-300 ${
                            openItem === itemIndex ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {openItem === itemIndex && (
                        <div className="p-4 pt-0">
                          <p className="text-gray-600">{item.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Note: When the time comes, we'll need splash photos of the application, which we'll integrate into the application. */}
    </section>
  );
}
