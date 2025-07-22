import React from "react";
import { homeAsset } from "./homeAsset";

const Banner1 = () => {
  return (
    <section className="relative w-full h-[350px] sm:h-[400px] lg:h-[500px] overflow-hidden">
      {/* Enhanced Background Container */}
      <div className="flex justify-center  items-center">
        <div className="relative w-full h-[350px] sm:h-[400px] lg:h-[500px] overflow-hidden">
          <img
            src={homeAsset.banner1}
            alt="Image Preview"
            className="absolute w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center  px-4 sm:px-6 md:px-10  text-white mx-auto w-full max-w-3xl">
        <p className="md:text-[22px] text-lg sm:text-md text-white font-metropolis">
          At <strong>SixthSense Leadership</strong>, we understand that the
          future of every organization starts with its leaders; hence, we
          empower leaders to transform organizations and drive sustainable
          growth through innovative leadership development solutions.
        </p>
      </div>
    </section>
  );
};

export default Banner1;
