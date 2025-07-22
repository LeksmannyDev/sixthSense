import React from "react";

const WQuote = ({ quote }) => {
  return (
    <div className="w-full px-4 py-12 bg-[#ffffff]">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-center items-center py-5 sm:py-12">
        <div className="text-center w-full">
          <p className="text-xl sm:text-2xl text-gray font-normal mb-3">
            {quote}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WQuote;
