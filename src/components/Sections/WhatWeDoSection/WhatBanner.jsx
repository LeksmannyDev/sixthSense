import React from "react";

const WhatBanner = () => {
  return (
    <section className="relative w-full h-[300px] sm:h-[250px] md:h-[300px] bg-[#ffffff] mt-1 sm:mt-8 mb-10 sm:mb-10 overflow-hidden">
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-1 sm:px-6 mx-auto w-full max-w-7xl">
        <h2 className="text-xl sm:text-2xl md:text-3xl text-gray capitalize ">
          At SixthSense Leadership, we understand that the future of every
          organization starts with its leaders; hence, we empower leaders to
          transform organizations and drive sustainable growth through
          innovative interventions.
        </h2>
      </div>
    </section>
  );
};

export default WhatBanner;
