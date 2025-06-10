import React, { useState, useEffect } from "react";
import { assets } from "../../assets/asset";
import { homeAsset } from "../Sections/HomeSection/homeAsset";

const BackgroundDesign = ({ children, initialBackground, mode = "static" }) => {
  const animatedBackgrounds = [
    initialBackground,
    assets.home,
    homeAsset.homeBanner1,
    assets.whoBanner,
  ];

  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // ✅ Preload the initial background and others
  useEffect(() => {
    const imagesToPreload = [initialBackground];
    if (mode === "animated") {
      imagesToPreload.push(...animatedBackgrounds.slice(1)); // skip duplicate initialBackground
    }

    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [initialBackground, mode]);

  // Animated background switch logic
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
      <div className="absolute inset-0 bg-[#010101D6] opacity-90"></div>
      <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10">
        {children}
      </div>
    </div>
  );
};

export default BackgroundDesign;
