import React from "react";
import QuoteDesign from "../../shared/QuoteDesign";

const QuoteLmc = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 sm:py-25 py-15 bg-white">
      <div className="max-w-xl mx-auto flex flex-col md:flex-row justify-center items-center">
        <div className="text-center w-full">
          <p className="text-xl sm:text-2xl md:text-[28px]  text-gray font-light mb-3 sm:mb-5">
            "Behind every fearless player is a fearless coach who refused to let
            them be anything but the best they can be."
          </p>
          <p className="text-sm text-red font-semibold uppercase">anonymous</p>
        </div>
      </div>
    </div>
  );
};
export default QuoteLmc;
