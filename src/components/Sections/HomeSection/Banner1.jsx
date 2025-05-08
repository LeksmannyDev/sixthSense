import React from "react";
import { homeAsset } from "./homeAsset";

const Banner1 = () => {
  return (
    <section className="relative w-full h-[350px] sm:h-[350px] lg:h-[500px] overflow-hidden">
      {/* Enhanced Background Container */}
      <div className="flex justify-center items-center">
        <div className="relative w-full h-[350px] sm:h-[350px] lg:h-[500px] overflow-hidden">
          <img
            src={homeAsset.homeBanner1}
            alt="Image Preview"
            className="absolute w-full h-[1200px] top-[-260px] object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-80"></div>
        </div>
      </div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 mx-auto w-full max-w-4xl">
        <p className="text-xl sm:text-2xl md:text-3xl text-white font-metropolis">
          At SixthSense Leadership, we understand that the future of every
          organization starts with its leaders; hence, We empower leaders to
          transform organizations and drive sustainable growth through
          innovative leadership development solutions.
        </p>
      </div>
    </section>
  );
};

export default Banner1;
