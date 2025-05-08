import React from "react";
import { homeAsset } from "./homeAsset";

const HomeBanner2 = () => {
  return (
    <section className="relative w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[550px]">
      {/* Background Image */}
      <div className="flex justify-center items-center w-full h-full">
        <div className="relative w-full h-full overflow-hidden">
          <img
            src={homeAsset.homeBanner1}
            alt="Banner Background"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
      </div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center uppercase text-white px-4 mx-auto max-w-6xl">
        <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl lg:text-[50px] transform transition-transform duration-700 hover:scale-105 leading-tight max-w-4xl">
          Join the growing community of empowered leaders.
        </h2>
      </div>
    </section>
  );
};

export default HomeBanner2;
