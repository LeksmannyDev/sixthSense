import React from "react";
import { quoteDetails } from "./eventsAssets";

const QuoteBanner = () => {
  return (
    <div className="w-full px-4 py-12 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-[10%]">
        {quoteDetails.map((quote, index) => (
          <div key={index} className="text-center w-full">
            <p className="text-xl sm:text-2xl md:text-[30px] text-gray font-light mb-4 md:mb-6">
              {quote.quote}
            </p>

            <p className="text-sm sm:text-base md:text-[18px] text-blue mb-4 md:mb-6 font-medium uppercase">
              {quote.name}
            </p>

            <div className="relative mx-auto w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80">
              <div className="absolute inset-0 mt-2 ml-2 border-b-[14px] border-r-[14px] h-[80%] w-[80%] border-[#1F3864] rounded-[20px] sm:rounded-[30px] md:rounded-[50px] z-0" />

              <div className="absolute top-0 left-0 w-[80%] h-[80%] rounded-[20px] sm:rounded-[30px] md:rounded-[50px] overflow-hidden z-10">
                <img
                  src={quote.image}
                  alt="Mission"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuoteBanner;
