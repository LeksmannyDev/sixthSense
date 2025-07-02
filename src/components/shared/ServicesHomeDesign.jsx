import React from "react";
import { assets } from "../../assets/asset";

const ServicesHomeDesign = ({ title, backgroundImage }) => {
  return (
    <div className="relative">
      <div
        role="img"
        className="min-h-[50vh] sm:min-h-[70vh] flex items-center justify-center  bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-[#000000CC] opacity-100 flex items-center justify-center">
          <div className="max-w-6xl mx-auto text-center px-2">
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
