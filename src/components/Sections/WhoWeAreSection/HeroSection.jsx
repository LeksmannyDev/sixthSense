import React from "react";
import BackgroundDesign from "../../shared/BackgroundDesign";
import { assets } from "../../../assets/asset";
import Call from "../../shared/Call";

const HeroSection = () => {
  const initialBg = assets.whoBg;
  return (
    <div className="w-full overflow-hidden font-metropolis">
      <BackgroundDesign initialBackground={initialBg} mode="static">
        <div className="max-w-5xl text-center ">
          <h1 className="text-4xl sm:text-5xl md:text-6xl uppercase sm:mb-10 mb-5 text-white font-medium flex flex-wrap justify-center">
            who we are
          </h1>
          <Call />
        </div>
      </BackgroundDesign>
    </div>
  );
};

export default HeroSection;
