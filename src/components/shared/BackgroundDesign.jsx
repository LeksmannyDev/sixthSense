import React, { useState, useEffect } from "react";
import { assets } from "../../assets/asset";
import { homeAsset } from "../Sections/HomeSection/homeAsset";

const BackgroundDesign = ({ children, initialBackground, mode = "static" }) => {
  const animatedBackgrounds = [
    initialBackground, // You can keep this or customize
    assets.home,
    homeAsset.homeBanner1,
    assets.whoBanner,
  ];

  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    if (mode !== "animated") return;

    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) =>
        prevIndex === animatedBackgrounds.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [mode, animatedBackgrounds.length]);

  const backgrounds =
    mode === "animated" ? animatedBackgrounds : [initialBackground];

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
      <div className="absolute inset-0 bg-[#010101D6]"></div>
      <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10">
        {children}
      </div>
    </div>
  );
};

export default BackgroundDesign;
