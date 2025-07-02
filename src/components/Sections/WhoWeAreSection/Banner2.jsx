import React from "react";
import { assets } from "../../../assets/asset";

const Banner2 = () => {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "400px" }}
    >
      <div className="relative w-full h-full overflow-hidden">
        <img
          src={assets.whoBanner2}
          alt="brochure"
          className="w-full h-full object-cover"
          style={{ width: "100%", height: "800px" }}
        />
      </div>

      {/* Dark overlay with subtle transition */}
      <div className="absolute inset-0 bg-black opacity-85"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 md:px-10 mx-auto w-full max-w-7xl">
        <div className="font-medium text-2xl sm:text-3xl md:text-5xl transform transition-transform duration-700 hover:scale-105">
          <h2>Download our Brochure</h2>
        </div>

        <p className="text-md sm:text-lg md:text-xl lg:text-2xl mt-3 sm:mt-5 text-light mb-4 sm:mb-6 max-w-6xl">
          Discover how SixthSense Leadership can transform your organization.
          Our comprehensive brochure provides insights into our services,
          success stories, and the impact we can make together.
        </p>

        <div className="flex flex-row">
          <a
            href="https://drive.google.com/file/d/15rc4gzTn08_K4q_pY0c5VPDowrQujf7f/view?usp=sharing"
            target="_blank"
            download="SixthSense-Leadership-Brochure.pdf"
            className="border-2 border-[#ff0c10] text-center uppercase text-xs sm:text-sm  text-blackish font-medium cursor-pointer px-5 sm:px-8 md:px-12 py-2 sm:py-3 rounded-full transition-all duration-300 bg-transparent flex items-center gap-2"
          >
            Download Brochure
            <img
              src={assets.download}
              alt="Download icon"
              className="w-4 h-4"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner2;
