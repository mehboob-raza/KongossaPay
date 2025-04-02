"use client";
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { Textarea } from '../ui/textarea';
import { Input } from '../ui/input';

// Define initial form state
const initialFormState = {
  name: "",
  email: "",
  comment: "",
};

// Define validation messages
const validateForm = (name, email, comment) => {
  const errors = {};
  if (!name.trim() || name.length < 2) errors.name = "Username is required";
  if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) errors.email = "Invalid email address";
  if (!comment.trim() || comment.length < 2) errors.comment = "Comment must be at least 2 characters";
  return errors;
};

const ContactForm = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData.name, formData.email, formData.comment);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    console.log(formData);

    // Simulate a submit delay
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData(initialFormState); // Reset form after submission
      setErrors({});
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="h- w-full max-w-[500px]">
    
      <div className='flex flex-col lg:flex-row gap-4 lg:gap-10'>

        {/* Name Input */}
        <div className="space-y-2 w-full flex flex-col items-start">
          <h1 className="bg-gradient-to-r from-blue-900 to-purple-900 bg-clip-text text-transparent font-base font-[500] text-[1rem]">Name</h1>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className={`border shadow-lg border-[#E3E3E4] h-14 text-[0.95rem] font-[500] text-paragraph bg-white  dark:text-white dark:bg-[#223749] 
              ${errors.name ? 'focus:border-4 focus:border-none border-[#DC3545]' : 'focus:border-4 focus:border-none'} focus:outline-none rounded-xl w-full`}
          />
          {errors.name && <p className="text-red-500 font-[400] text-[0.8rem] mb-2">{errors.name}</p>}
        </div>

        {/* Email Input */}
        <div className="space-y-2 w-full flex flex-col items-start">
          <h1 className="bg-gradient-to-r from-blue-900 to-purple-900 bg-clip-text text-transparent font-base font-[500] text-[1rem]">Email</h1>
          <Input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className={`border shadow-lg border-[#E3E3E4] h-14 text-[0.95rem] font-[500] text-paragraph bg-white  dark:text-white dark:bg-[#223749] 
              ${errors.email ? 'focus:border-4 focus:border-none border-[#DC3545]' : 'focus:border-4 focus:border-none'} focus:outline-none rounded-xl w-full`}
          />
          {errors.email && <p className="text-red-500 font-[400] text-[0.8rem] mb-2">{errors.email}</p>}
        </div>
      </div>
      <div className="flex-1 flex-grow space-y-2 mt-4 flex flex-col items-start">
        <h1 className="bg-gradient-to-r from-blue-900 to-purple-900 bg-clip-text text-transparent font-base text-[1rem]">Email</h1>
        <Input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          className={`border shadow-lg border-[#E3E3E4] h-14 text-[0.95rem] font-[500] text-paragraph bg-white  dark:text-white dark:bg-[#223749] 
              ${errors.email ? 'focus:border-4 focus:border-none border-[#DC3545]' : ' focus:border-none'} focus:outline-none rounded-xl w-full`}
        />
        {errors.comment && <p className="text-red-500 text-sm mt-1">{errors.comment}</p>}
      </div>
      {/* Comment Input */}
      <div className="flex-1 flex-grow space-y-2 mt-4  flex flex-col items-start">
        <h1 className="bg-gradient-to-r from-blue-900 to-purple-900 bg-clip-text text-transparent font-base text-[1rem]">Comments</h1>
        <Textarea
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          placeholder="Your Thoughts"
          className={`border shadow-lg border-[#E3E3E4] text-[0.95rem] font-base font-[400] bg-white p-3 text-paragraph dark:bg-input dark:text-white dark:bg-[#223749] 
            ${errors.comment ? 'focus:border-none border-none' : 'focus:border-none'} focus:outline-none rounded-xl w-full h-[100%] min-h-[160px]`}
        />
        {errors.comment && <p className="text-red-500 text-sm mt-1">{errors.comment}</p>}
      </div>

      {/* Submit Button */}
      <div className="text-right mt-4 lg:mt-6">
        <Button type="submit" disabled={isSubmitting} className="bg-gradient-to-br from-blue-400 to-purple-600 px-4 py-2 rounded-xl">
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
