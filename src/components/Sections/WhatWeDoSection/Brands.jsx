import React from "react";
import nba from "../../../assets/What/nba.png";
import nnpc from "../../../assets/What/nnpc.png";
import oando from "../../../assets/What/oando.png";
import meta from "../../../assets/What/meta.png";
import zylus from "../../../assets/What/zylus.png";
import boi from "../../../assets/What/boi.png";

const Brands = () => {
  const images = [
    { image: nba, name: "NBA" },
    { image: nnpc, name: "NNPC" },
    { image: oando, name: "Oando" },
    { image: meta, name: "Meta" },
    { image: zylus, name: "Zylus" },
    { image: boi, name: "BOI" },
  ];

  const duplicatedImages = [...images, ...images];

  return (
    <div className="bg-white lg:py-25 py-15 px-4 sm:px-6 md:px-10 text-center">
      <h2 className="text-2xl sm:text-3xl md:text-[45px] font-medium text-blue mb-10 sm:mb-2">
        Some Brands our Faculty has Trained
      </h2>

      {/* Container for the scrolling animation */}
      <div className="max-w-6xl mx-auto overflow-hidden">
        <div className="animate-scroll flex gap-8 md:gap-12">
          {duplicatedImages.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 py-3 sm:py-10 md:py-10 flex items-center justify-center min-w-[120px] md:min-w-[150px]"
            >
              <img
                src={item.image}
                alt={item.name}
                className="max-h-14 object-contain hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
