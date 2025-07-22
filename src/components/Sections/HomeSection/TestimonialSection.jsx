import React, { useState } from "react";
import { testimonials } from "./homeAsset";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const getIndex = (offset) =>
    (currentIndex + offset + testimonials.length) % testimonials.length;

  return (
    <section className="py-25  px-4 sm:px-6 md:px-10  bg-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex text-center lg:text-left flex-col max-w-6xl mx-auto lg:flex-row justify-between gap-10 items-start mb-1 sm:mb-20">
          <div className="lg:max-w-70 lg:ml-0 mx-auto w-full">
            <p className="text-red text-xl font-semibold uppercase">
              Testimonials
            </p>
            <h2 className="text-3xl sm:text-[40px] font-medium text-blue mt-2">
              What Our Clients Say
            </h2>
          </div>
          <p className="text-gray mx-auto font-normal lg:max-w-md w-80% lg:mr-0 lg:mt-5 mt-0 text text-[18px]">
            At <strong>SixthSense Leadership</strong>, we value the feedback
            from our clients. Here’s what some of our satisfied partners have to
            say about their experiences with our leadership programs and
            services.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 sm:left-3 z-20 bg-white border p-2 sm:p-3 rounded-full shadow"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Cards */}
          <div className="flex justify-center items-center text-center gap-2 sm:gap-4 mt-10 w-full overflow-hidden py-6">
            {[getIndex(-1), currentIndex, getIndex(1)].map((index) => {
              const isActive = index === currentIndex;

              return (
                <motion.div
                  key={index}
                  className={`flex-shrink-0 w-[70%] sm:w-[60%] lg:w-[30%] px-2 transition-all duration-300 ${
                    isActive
                      ? "scale-115 z-10"
                      : "scale-80 opacity-70 hidden lg:block"
                  }`}
                >
                  <div className="bg-white border-[0.5px] border-[#003366] rounded-4xl p-5 sm:p-6 min-h-[300px] shadow flex flex-col items-center justify-center h-full text-center">
                    <p className="text-gray text-sm sm:text-base mb-4">
                      {testimonials[index].quote}
                    </p>
                    <div className="flex items-center justify-center gap-1 mt-4">
                      <img
                        src={testimonials[index].logo}
                        alt="client logo"
                        className="w-12 h-12 object-contain"
                      />
                      <div className="text-left">
                        <p className="text-red font-semibold text-xs sm:text-sm">
                          {testimonials[index].client}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 sm:right-3 z-20 bg-white border p-2 sm:p-3 rounded-full shadow-md hover:bg-[#e0f7fa] transition"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
