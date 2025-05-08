import React from "react";
import { assets } from "../../../assets/asset";
import SectionHeader from "../../shared/SectionHeader";

const PurposeSection = () => {
  return (
    <section
      id="purpose"
      className="bg-light px-4 sm:px-6 md:px-10 py-8 sm:py-12 lg:py-16"
    >
      <div className="max-w-6xl mx-auto mb-10 lg:mb-20">
        <SectionHeader subtitle="purpose" title="Why We Exist" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Vision */}
          <div className="flex flex-col gap-4 ">
            <h3 className="text-xl sm:text-3xl md:text-4xl font-semibold text-red uppercase">
              Our Vision
            </h3>
            <p className="text-sm sm:text-[18px] md:text-[20px] text-gray leading-relaxed">
              To be a trusted global authority in leadership development and a
              choice partner for leaders and organizations seeking
              transformative and sustainable growth.
            </p>
          </div>

          {/* Vision Image */}
          <div className="relative mx-auto w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80">
            <div className="absolute inset-0 mt-4 ml-3 border-b-[10px] border-r-[10px] border-[#1F3864] rounded-[20px] sm:rounded-[30px] md:rounded-[30px] z-0" />
            <div className="absolute top-1 left-1 w-[96%] h-[96%] rounded-[20px] sm:rounded-[30px] md:rounded-[30px] overflow-hidden z-10">
              <img
                src={assets.vision}
                alt="Vision"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Mission Image */}
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 hidden md:block">
            <div className="absolute inset-0 mt-4 ml-3 border-b-[14px] border-r-[14px] border-[#1F3864] rounded-[20px] sm:rounded-[30px] md:rounded-[30px] z-0" />
            <div className="absolute top-1 left-1 w-[96%] h-[96%] rounded-[20px] sm:rounded-[30px] md:rounded-[30px] overflow-hidden z-10">
              <img
                src={assets.mission}
                alt="Mission"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Mission */}
          <div className="flex flex-col gap-4 ">
            <h3 className="text-xl sm:text-3xl md:text-4xl uppercase font-semibold text-red">
              Our Mission
            </h3>
            <p className="text-sm sm:text-[18px] md:text-[20px] text-gray leading-relaxed">
              Empowering leaders to transform organizations and lead the future 
              by raising the bar in leadership development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurposeSection;
