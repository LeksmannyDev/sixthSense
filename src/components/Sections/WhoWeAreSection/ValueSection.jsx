import React from "react";
import { coreValues } from "../../../assets/asset";
import SectionHeader from "../../shared/SectionHeader";

const ValueSection = () => {
  return (
    <section className="py-12 sm:py-14 md:py-16 bg-light px-4 sm:px-6 lg:px-12 xl:px-20">
      <div className="max-w-5xl mx-auto">
        <SectionHeader subtitle="our values" title="What we Stand for." />

        {/* Desktop */}
        <div className="hidden lg:block w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {coreValues.slice(0, 3).map((value, index) => (
              <div
                key={index}
                className="rounded-[30px] border-[3px] border-[#003366] p-4 sm:p-5 md:p-6 flex flex-col justify-between h-full"
              >
                <div className="py-3 sm:py-5 flex flex-col items-center gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10">
                    <img
                      src={value.icon}
                      alt={value.alt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="font-bold capitalize text-gray text-center text-xl sm:text-2xl mt-2 sm:mt-2">
                    {value.title}
                  </p>
                  <p className="text-gray text-sm sm:text-base md:text-[16px] lg:text-[18px] xl:text-[20px] max-w-xs sm:max-w-2xs mx-auto font-medium text-center">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}

            <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-5 md:gap-6 mt-2 sm:mt-0">
              {coreValues.slice(3).map((value, index) => (
                <div
                  key={index}
                  className="w-full  sm:max-w-sm rounded-[30px] border-[3px] border-[#003366] p-4 sm:p-5 md:p-6 flex flex-col justify-between h-full"
                >
                  <div className="py-3 sm:py-5 flex flex-col items-center gap-3 sm:gap-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10">
                      <img
                        src={value.icon}
                        alt={value.alt}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="font-bold capitalize text-gray text-center text-xl sm:text-2xl mt-2 sm:mt-2">
                      {value.title}
                    </p>
                    <p className="text-gray text-sm sm:text-base md:text-[16px] lg:text-[18px] xl:text-[20px] max-w-xs sm:max-w-2xs mx-auto font-medium text-center">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="w-full  sm:max-w-sm rounded-[30px] border-[3px] border-[#003366] p-4 sm:p-5 md:p-6 flex flex-col justify-between h-full"
              >
                <div className="py-7 sm:py-12 flex flex-col items-center gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10">
                    <img
                      src={value.icon}
                      alt={value.alt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="font-bold capitalize text-gray text-center text-xl sm:text-2xl mt-2 sm:mt-4">
                    {value.title}
                  </p>
                  <p className="text-gray text-sm sm:text-base md:text-[16px] lg:text-[18px] xl:text-[20px] max-w-xs sm:max-w-2xs mx-auto font-medium text-center">
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
