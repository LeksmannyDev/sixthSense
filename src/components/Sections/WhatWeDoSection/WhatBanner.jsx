import React from "react";

const WhatBanner = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 py-8 md:py-20 bg-light">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-center items-start md:items-center">
        <div className="hidden md:block h-[200px] border-l-4 border-[#FF0C10] mr-6"></div>

        <div className="text-gray text-lg sm:text-xl md:text-2xl">
          <p className="capitalize">
            At SixthSense Leadership, we understand that the future of every
            organization starts with its leaders; hence, we empower leaders to
            transform organizations and drive sustainable growth through
            innovative interventions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatBanner;
