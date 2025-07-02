import React from "react";
import BackgroundDesign from "../../shared/BackgroundDesign";
import { assets } from "../../../assets/asset";

const HeroSection = () => {
  const initialBg = assets.whoBg;
  return (
    <div className="w-full overflow-hidden font-metropolis">
      <BackgroundDesign initialBackground={initialBg} mode="static">
        <div className="max-w-5xl text-center ">
          <h1 className="text-3xl sm:text-5xl md:text-6xl uppercase mb-4 text-white font-medium flex flex-wrap justify-center">
            who we are
          </h1>
        </div>
      </BackgroundDesign>
    </div>
  );
};

export default HeroSection;
