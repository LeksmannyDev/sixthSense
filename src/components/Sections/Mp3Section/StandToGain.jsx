import React from "react";
import { gain } from "../EventsSection/eventsAssets";

const StandToGain = () => {
  return (
    <section className="bg-light lg:py-25 py-16 px-4 sm:px-8  lg:px-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-[40px] text-center font-medium text-blue mb-10">
          WHAT PARTICIPANTS STAND TO GAIN
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-6">
          {gain.map((service, index) => (
            <div
              key={index}
              className="border border-[#1F3864] bg-white py-10 px-0 overflow-hidden flex flex-col"
            >
              <div className="p-2 flex flex-col h-full mx-auto justify-center gap-y-2 items-center text-center">
                <h2
                  className="text-blue text-[16px] px-4 text-center sm:text-[16px] md:text-[22px] font-semibold"
                  dangerouslySetInnerHTML={{ __html: service.title }}
                />
                <p className="text-gray text-[14px] sm:text-[14px] md:text-[15px]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StandToGain;
