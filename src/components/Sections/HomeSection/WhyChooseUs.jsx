import React from "react";
import { chooseUs, homeAsset } from "./homeAsset";
import { Link } from "react-router-dom";

const WhyChooseUs = () => {
  return (
    <section className="relative w-full h-[850px] sm:h-[700px] md:h-[750px] lg:h-[550px] xl:h-[700px]">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={homeAsset.choose}
          alt="Banner Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1F3864] opacity-80" />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center px-4 sm:px-6 md:px-10 justify-center text-center text-white  mx-auto max-w-5xl h-full">
        <p className="text-red text-lg sm:text-xl md:text-2xl font-semibold uppercase">
          OUR EDGE
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-medium text-lightBlue mt-2 mb-10">
          Why Clients Choose Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-8 w-full px-4">
          {chooseUs.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mb-4">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg sm:text-xl md:text-[27px] font-bold mb-2">
                {feature.title}
              </h3>
              <p className="text-md sm:text-[19px] max-w-[270px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <Link
          to="/contact-us#contact"
          className="bg-red text-white uppercase cursor-pointer text-xs sm:text-sm md:text-md px-5 sm:px-15 py-2 sm:py-3 rounded-full font-medium transition duration-300"
        >
          get started
        </Link>
      </div>
    </section>
  );
};

export default WhyChooseUs;
