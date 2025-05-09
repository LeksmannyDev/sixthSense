import React, { useState, useEffect } from "react";
import { homeAsset } from "../Sections/HomeSection/homeAsset";
import { assets } from "../../assets/asset";

const BackgroundDesign = ({ children }) => {
  const backgrounds = [
    homeAsset.Hero,
    assets.home,
    homeAsset.homeBanner1,
    assets.whoBanner,
  ];

  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) =>
        prevIndex === backgrounds.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <div className="relative min-h-[100vh] overflow-hidden">
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-800 ${
            index === currentBgIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${bg})` }}
          aria-hidden={index !== currentBgIndex}
        />
      ))}
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-10 min-h-[100vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
};

export default BackgroundDesign;
