import React from "react";

const QuoteBanner = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 md:py-20 py-10 bg-white">
      <div className="max-w-lg mx-auto flex flex-col md:flex-row justify-center items-center py-5 sm:py-12">
        <div className="text-center w-full">
          <p className="text-xl sm:text-2xl md:text-[28px]  text-gray font-light mb-3 sm:mb-5">
            “In a world that is constantly changing, the biggest risk you can
            take is not taking any risk.”
          </p>
          <p className="text-sm text-red font-semibold uppercase">
            Mark Zuckerberg, Co-founder, Facebook
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuoteBanner;
