import React, { useState, useEffect } from "react";
import { assets } from "../../assets/asset";
import { homeAsset } from "../Sections/HomeSection/homeAsset";

const BackgroundDesign = ({ children, initialBackground }) => {
  const animatedBackgrounds = [
    assets.home,
    homeAsset.homeBanner1,
    assets.whoBanner,
  ];
  const backgrounds = [initialBackground, ...animatedBackgrounds];

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
    <div className="relative w-full min-h-screen overflow-hidden">
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentBgIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${bg})` }}
          aria-hidden={index !== currentBgIndex}
        />
      ))}
      <div className="absolute inset-0 bg-[#010101cc] opacity-80"></div>
      <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
};

export default BackgroundDesign;
