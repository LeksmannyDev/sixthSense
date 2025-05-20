import React from "react";
import { assets } from "../../../assets/asset";
import SectionHeader from "../../shared/SectionHeader";

const PurposeSection = () => {
  return (
    <section
      id="purpose"
      className="bg-light px-4 sm:px-6 md:px-10 py-8 sm:py-12 lg:py-16"
    >
      <div className="max-w-5xl mx-auto mb-10 lg:mb-20">
        <SectionHeader subtitle="purpose" title="Why We Exist" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Vision */}
          <div className="flex flex-col gap-4 order-2 md:order-1 text-center md:text-left">
            <h3 className="text-xl sm:text-3xl md:text-4xl font-semibold text-red uppercase">
              Our Vision
            </h3>
            <p className="text-base md:text-lg text-gray leading-relaxed">
              To be a trusted global authority in leadership development and a
              choice partner for leaders and organizations seeking
              transformative and sustainable growth.
            </p>
          </div>

          {/* Vision Image */}
          <div className="order-1 md:order-2 flex justify-center">
            <img
              src={assets.vision}
              alt="Vision"
              className="w-full max-w-[300px] md:max-w-[450px] h-auto object-cover rounded"
            />
          </div>

          {/* Mission Image */}
          <div className="order-3 md:order-3 flex justify-center">
            <img
              src={assets.mission}
              alt="Mission"
              className="w-full max-w-[300px] md:max-w-[450px] h-auto object-cover rounded"
            />
          </div>

          {/* Mission */}
          <div className="flex flex-col gap-4 order-4 md:order-4 text-center md:text-left">
            <h3 className="text-xl sm:text-3xl md:text-4xl uppercase font-semibold text-red">
              Our Mission
            </h3>
            <p className="text-base md:text-lg text-gray leading-relaxed">
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
