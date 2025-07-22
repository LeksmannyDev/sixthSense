import React from "react";
import { approaches } from "../../../assets/asset";

const OurApproach = () => {
  return (
    <section className="bg-light py-20 md:py-25 px-4 sm:px-6 md:px-10 pb-0 text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-deepBlue mb-8 sm:mb-12">
        Our Approach
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
        {approaches.map((item, index) => (
          <div
            key={index}
            className={`text-white p-4 sm:p-6 flex items-center justify-center text-center rounded-full aspect-square ${item.color}`}
          >
            <div className="px-2 sm:px-4">
              <div className="rounded-xl flex items-center justify-center mb-3 ">
                <img
                  src={item.icon}
                  alt={`Icon for ${item.title}`}
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
              </div>
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
