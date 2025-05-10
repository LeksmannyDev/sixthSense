import React from "react";

const QuoteDesign = ({ quote, author }) => {
  return (
    <div className="w-full px-4 py-12 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-center items-center py-5 sm:py-12">
        <div className="text-center w-full">
          <p className="text-xl sm:text-2xl md:text-[28px] text-gray font-light mb-1">
            “{quote}”
          </p>
          <p className="text-sm text-red font-medium uppercase">{author}</p>
        </div>
      </div>
    </div>
  );
};

export default QuoteDesign;
