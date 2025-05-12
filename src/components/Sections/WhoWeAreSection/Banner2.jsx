import React from "react";
import { assets } from "../../../assets/asset";

const Banner2 = () => {
  return (
    <section className="relative w-full h-[400px] sm:h-[400px] overflow-hidden">
      <div className="relative w-full h-full overflow-hidden">
        <img
          src={assets.whoBanner2}
          alt="brochure"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark overlay with subtle transition */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 mx-auto w-full max-w-7xl">
        <div className="font-medium text-2xl sm:text-3xl md:text-5xl transform transition-transform duration-700 hover:scale-105">
          <h2>Download our Brochure</h2>
        </div>

        <p className="text-sm sm:text-[24px] mt-3 sm:mt-5 text-light mb-4 sm:mb-6 ">
          Discover how SixthSense Leadership can transform your organization.
          Our comprehensive brochure provides insights into our services,
          success stories, and the impact we can make together.
        </p>

        <div className="flex flex-row">
          <button className=" border-3 border-[#ff0c10] text-center uppercase text-sm text-blackish font-medium cursor-pointer px-6 sm:px-15 py-3 rounded-full transition-all duration-300 bg-transparent flex items-center gap-2 ">
            Download Brochure
            <img
              src={assets.download}
              alt="Download icon"
              className="w-4 h-4"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner2;
