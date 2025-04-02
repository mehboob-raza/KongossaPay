"use client";
import React from 'react';
import HeroSection from "@/components/shared/HeroSection";
import ContactForm from "@/components/Help/ContactForm";
import ContactSection from "@/components/Help/info";


export default function Help() {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50">
      <HeroSection
        title="Need Help?"
        subtitle="Get in touch with our support team. We're here to help you with any questions or concerns about your money transfers."
      />
      <h2 className="max-w-4xl mx-auto px-6 py-8 md:py-16 text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0a136e] to-[#0770e6] bg-clip-text text-transparent text-center mb-8">
        Get in touch with us
      </h2>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-start justify-between gap-8 pb-16">
        <ContactSection />
        <ContactForm />
      </div>
    </section>
  );
}
