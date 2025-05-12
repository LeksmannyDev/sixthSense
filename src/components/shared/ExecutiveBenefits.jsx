import React from "react";

const ExecutiveBenefits = ({
  title,
  description,
  sectionTitle = "Key Benefits",
  benefits = [],
}) => {
  return (
    <section className="bg-light md:py-20  px-4 sm:px-8 lg:px-16 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-[52px] font-medium text-deepBlue mb-4">
          {title}
        </h2>

        <p className="text-gray text-sm sm:text-base md:text-[21px] md:mb-10 mb-5 leading-relaxed">
          {description}
        </p>

        <h3 className="text-3xl text-deepBlue text-left mb-5">
          {sectionTitle}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-2">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="border border-[#1F3864] rounded-[12px] font-medium px-5 py-3 sm:px-6 sm:py-4 text-blue text-base md:text-lg"
            >
              {benefit}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExecutiveBenefits;
