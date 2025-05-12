import React from "react";
import { approaches } from "../../../assets/asset";

const OurApproach = () => {
  return (
    <section className="bg-light py-12 sm:py-16 lg:py-20 pt-0 px-4 sm:px-8 lg:px-16 text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-deepBlue mb-8 sm:mb-12">
        Our Approach
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {approaches.map((item, index) => (
          <div
            key={index}
            className={`text-white p-4 sm:p-6 flex items-center justify-center text-center rounded-full aspect-square ${item.color}`}
          >
            <div className="px-2 sm:px-4">
              <h3 className="font-semibold text-lg md:text-xl mb-2 sm:mb-3">
                {item.title}
              </h3>
              <p className="text-md">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurApproach;
