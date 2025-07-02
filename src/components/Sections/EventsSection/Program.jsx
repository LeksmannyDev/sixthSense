import React from "react";
import { eventAsset } from "./eventsAssets";

const Program = () => {
  return (
    <section className="relative w-full h-[450px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px]">
      <div className="relative w-full h-full">
        <div className="relative w-full h-full overflow-hidden">
          <img
            src={eventAsset.program}
            alt="Banner Background"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#000000B2]/90"></div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 mx-auto max-w-5xl">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-medium text-red mb-4 sm:mb-6">
            Program
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 md:gap-8 w-full max-w-md sm:max-w-xl md:max-w-5xl">
            <div className="bg-[#FF0C101A] border border-white/30 text-white rounded-4xl px-6 sm:px-8 py-10 sm:py-15 w-full">
              <h3 className="text-red font-semibold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">
                Duration
              </h3>
              <p className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                1 Day
              </p>
              <p className="text-lg sm:text-xl md:text-2xl">
                (in-person and virtual)
              </p>
            </div>
            <div className="bg-[#FF0C101A] border border-white/30 text-white rounded-4xl px-6 sm:px-8 py-10 sm:py-19 w-full">
              <h3 className="text-red font-semibold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">
                Investment
              </h3>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold">
                #250,000
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
