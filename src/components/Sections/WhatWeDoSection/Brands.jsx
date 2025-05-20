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

  return (
    <div className="bg-white py-15 pb-20 px-4 sm:px-6 md:px-10 text-center">
      <h2 className="text-2xl md:text-[45px] font-medium text-blue mb-10 sm:mb-2">
        Brands our Faculty has Trained
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-row gap-4 md:gap-2">
        {images.map((item, index) => (
          <div
            key={index}
            className="mx-auto py-3 sm:py-10 md:py-10 flex items-center cursor-pointer justify-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="max-h-14 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
