import React from "react";
import { gain } from "../EventsSection/eventsAssets";

const StandToGain = () => {
  return (
    <section className="bg-light lg:py-25 py-16 px-4 sm:px-8  lg:px-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-[35px] text-center font-medium text-blue md:mb-15 mb-10">
          WHAT PARTICIPANTS STAND TO GAIN
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {gain.map((service, index) => (
            <div
              key={index}
              className="rounded-[30px] border  bg-white py-5 px-0 overflow-hidden flex flex-col"
            >
              <div className="p-2 flex flex-col h-full mx-auto justify-center gap-y-2 items-center text-center">
                <h3 className="uppercase font-metropolis text-[#1F3864] font-semibold text-[30px] sm:text-[40px] md:text-[45px]">
                  {service.number}
                </h3>
                <h2
                  className="text-blue  text-center text-[19px] md:text-[22px] font-medium"
                  dangerouslySetInnerHTML={{ __html: service.title }}
                />
                <p className="text-gray font-normal max-w-[80%] sm:max-w-[90%] md:max-w-[95%] mx-auto text-[15px] md:text-[16px]">
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
