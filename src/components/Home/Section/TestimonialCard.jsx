import Image from "next/image";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="relative w-full md:max-w-lg rounded-2xl overflow-hidden shadow-lg bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          layout="fill"
          objectFit="cover"
          className="opacity-40"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 p-6 flex flex-col justify-end h-full">
        <p className="text-white text-lg">{testimonial.text}</p>
        
        {/* User Info */}
        <div className="mt-4 flex items-center">
          <span className="text-2xl">{testimonial.flag}</span>
          <span className="ml-2 font-bold text-white">
            {testimonial.name}, {testimonial.country}
          </span>
        </div>
      </div>
    </div>
  );
};




