import React from "react";
import { assets } from "../../../assets/asset";
import { Link } from "react-router-dom";

const Banner1 = () => {
  return (
    <section className="relative w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
      {/* Background Image */}
      <div className="flex justify-center items-center w-full h-full">
        <div className="relative w-full h-full overflow-hidden">
          <img
            src={assets.whoBanner3}
            alt="Banner Background"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#33333399]"></div>
        </div>
      </div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center uppercase text-white px-4 sm:px-6 md:px-10 mx-auto max-w-5xl">
        <h2 className="font-semibold text-2xl sm:text-3xl md:text-[42px] mb-8 transform transition-transform duration-700 hover:scale-105 max-w-[630px] ">
          Join us on this journey to transform leadership
        </h2>{" "}
        <Link
          to="/contact-us"
          className="bg-red text-white uppercase cursor-pointer text-xs sm:text-sm md:text-md px-5 sm:px-18 py-2 sm:py-4 rounded-full font-medium transition duration-300"
        >
          get started
        </Link>
      </div>
    </section>
  );
};

export default Banner1;
