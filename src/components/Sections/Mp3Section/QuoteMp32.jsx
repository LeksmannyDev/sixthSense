import React from "react";
import QuoteDesign from "../../shared/QuoteDesign";

const QuoteMp32 = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 md:py-20 py-10 bg-white">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-center items-center py-5 sm:py-12">
        <div className="text-center w-full">
          <p className="text-xl sm:text-2xl md:text-[26px] text-gray font-light mb-3">
            “Middle management is the backbone of any organization. They must
            possess the ability to manage up, down, and across to ensure the
            success of the business.”
          </p>
          <p className="text-sm text-red font-semibold uppercase">
            Jack Welch, Former CEO of GE
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuoteMp32;
