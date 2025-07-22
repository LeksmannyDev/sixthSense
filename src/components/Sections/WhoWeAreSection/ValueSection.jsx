import React from "react";
import { coreValues } from "../../../assets/asset";
import SectionHeader from "../../shared/SectionHeader";

const ValueSection = () => {
  return (
    <section className="py-12 sm:py-14 md:py-16 bg-light px-4 sm:px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <SectionHeader subtitle="our values" title="What We Stand For" />

        {/* Desktop */}
        <div className="hidden lg:block w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-10">
            {coreValues.slice(0, 3).map((value, index) => (
              <div
                key={index}
                className="w-full sm:max-w-xs mx-auto rounded-[30px] border-[1.5px] border-[#003366] p-4 sm:p-5  flex flex-col justify-between "
              >
                <div className="py-12 flex flex-col items-center gap-3">
                  <div className="w-10 h-10 sm:w-15 sm:h-15">
                    <img
                      src={value.icon}
                      alt={value.alt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="font-bold capitalize text-gray text-center text-xl sm:text-2xl mt-1 ">
                    {value.title}
                  </p>
                  <p className="text-gray text-sm px-5 sm:text-base md:text-[16px] lg:text-[18px] font-normal text-center">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}

            <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-5 md:gap-10 mt-2 sm:mt-0">
              {coreValues.slice(3).map((value, index) => (
                <div
                  key={index}
                  className="w-full sm:max-w-xs rounded-[30px] border-[1.5px] border-[#003366] p-4 sm:p-5  flex flex-col justify-between  h-full"
                >
                  <div className="py-12 flex flex-col items-center gap-3">
                    <div className="w-10 h-10 sm:w-15 sm:h-15">
                      <img
                        src={value.icon}
                        alt={value.alt}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="font-bold capitalize text-gray text-center text-xl sm:text-2xl mt-1 ">
                      {value.title}
                    </p>
                    <p className="text-gray text-sm px-5 sm:text-base md:text-[16px] lg:text-[18px] font-normal text-center">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="block lg:hidden w-full px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 gap-y-6 sm:gap-5 md:gap-6">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="rounded-[30px] border-[1.5px] border-[#003366] p-4 sm:p-5 md:p-6 flex flex-col justify-between h-full"
              >
                <div className="py-6 flex flex-col items-center gap-2 ">
                  <div className="w-10 h-10 sm:w-12 sm:h-12">
                    <img
                      src={value.icon}
                      alt={value.alt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="font-bold capitalize text-gray text-center text-lg sm:text-xl md:text-2xl mt-1 sm:mt-2">
                    {value.title}
                  </p>
                  <p className="text-gray text-base md:text-lg px-2 sm:px-3 md:px-4 font-normal text-center leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
