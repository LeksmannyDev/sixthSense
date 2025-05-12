import React from "react";
import { assets } from "../../assets/asset";

const ServicesHomeDesign = ({ title }) => {
  return (
    <div className="w-full overflow-hidden relative">
      <div
        role="img"
        className="min-h-[60vh] sm:min-h-[60vh] md:min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-cover bg-center"
        style={{ backgroundImage: `url(${assets.background})` }}
      >
        <div className="absolute inset-0 bg-[#000000CC] flex items-center justify-center">
          <div className="max-w-7xl mx-auto text-center px-2">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl uppercase mb-4 text-white font-medium">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHomeDesign;
