import React from "react";

const AboutSection = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 py-8 md:py-12 bg-light">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-center items-start md:items-center">
        <div className="hidden md:block h-[270px] border-l-4 border-[#FF0C10] mr-6"></div>

        <div className="text-gray text-lg sm:text-xl md:text-2xl">
          <p>
            SixthSense Leadership is a human capital development and consulting
            company empowering leaders to transform organizations for
            sustainable growth through cutting-edge leadership solutions.
            <br /> <br />
            Our expertise includes leadership development, culture
            transformation, change management, strategic consulting, and
            executive coaching to help organizations achieve their full
            potential and lead the future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
