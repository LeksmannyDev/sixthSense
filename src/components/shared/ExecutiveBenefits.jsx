import React from "react";

const ExecutiveBenefits = ({
  sectionTitle = "Key Benefits",
  benefits = [],
}) => {
  return (
    <section className="bg-white md:py-20 py-10 px-4 sm:px-8 lg:px-16 text-center">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl text-deepBlue uppercase font-medium mb-5">
          {sectionTitle}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-10 md:mt-15 sm:mt-12 mt-10">
          {/* First 4 benefits */}
          {benefits.slice(0, 4).map((benefit, index) => (
            <div
              key={index}
              className="border border-[#1F3864] rounded-[12px] font-medium px-5 py-3 sm:px-6 sm:py-4 text-deepBlue text-base md:text-xl hover:shadow-md transition"
            >
              {benefit}
            </div>
          ))}
        </div>

        {/* Centered full-width 5th benefit */}
        {benefits.length === 5 && (
          <div className="mt-4 md:mt-10 flex justify-center">
            <div className="border border-[#1F3864] w-full sm:w-2/4 rounded-[12px] font-medium px-5 py-3 sm:px-6 sm:py-4 text-deepBlue text-base md:text-xl hover:shadow-md transition">
              {benefits[4]}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExecutiveBenefits;
