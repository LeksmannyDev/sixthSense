import React from "react";
import { objectives } from "./eventsAssets";

const Objectives = () => {
  return (
    <section className="bg-light lg:py-35 py-16 px-4 sm:px-8 sm:pb-40 pb-20 lg:px-16">
      <div className="max-w-5xl mb-5 mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-[40px] text-center font-medium text-blue mb-10">
          Programme Objectives
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectives.map((service, index) => (
            <div
              key={index}
              className="rounded-[50px] border border-white bg-white py-5 px-2 overflow-hidden flex flex-col"
            >
              <div className="p-2 flex flex-col h-full mx-auto justify-center gap-y-2 items-center text-center">
                <h3 className="uppercase text-bebas text-gray text-[30px] sm:text-[40px] md:text-[45px]">
                  {service.number}
                </h3>
                <h2
                  className="text-red text-[16px] text-center sm:text-[16px] md:text-[17px] font-semibold"
                  dangerouslySetInnerHTML={{ __html: service.title }}
                />
                <p className="text-gray max-w-[80%] sm:max-w-[90%] md:max-w-[95%] mx-auto text-[14px] sm:text-[15px] md:text-[16px]">
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

export default Objectives;
