import React from "react";
import { assets } from "../../../assets/asset";

const AboutSection = () => {
  return (
    <div className="w-full px-4 py-8 md:py-12 bg-light">
      <div className="max-w-[1200px] mx-auto grid xl:grid-cols-2 gap-4 md:gap-5 items-center">
        {/* Text Block */}{" "}
        <div className="bg-[#1C1C1C] text-white w-full max-w-[600px] mx-auto p-4 md:px-9 md:py-7 h-auto md:h-[360px] relative">
          <div className="border-l-4 border-[#ff0c10] h-full pl-4">
            <p className="text-base sm:text-lg md:text-xl break-words">
              SixthSense Leadership is a human capital development and
              consulting company empowering leaders to transform organizations
              for sustainable growth through cutting-edge leadership solutions.
              <br />
              <br />
              Our expertise includes leadership development, culture
              transformation, change management, strategic consulting, and
              executive coaching to help organizations achieve their full
              potential and lead the future.
            </p>
          </div>
        </div>
        {/* Image Block */}
        <div className="w-full max-w-[600px] mx-auto relative h-[300px] md:h-[360px]">
          <img
            src={assets.aboutBanner}
            alt="SixthSense Leadership Session"
            className="w-full h-full object-cover rounded-tr-[80px]"
          />
          <div className="absolute inset-0 bg-black opacity-50 rounded-tr-[80px]"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
