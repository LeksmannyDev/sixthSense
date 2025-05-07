import React from "react";
import { homeAsset } from "../HomeSection/homeAsset";

const HeroSection = () => {
  return (
    <div className="w-full overflow-hidden font-metropolis">
      <div
        role="img"
        aria-label="About Us - Ejideson Prestige Empresa Limited"
        className="min-h-[100vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${homeAsset.Hero})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="max-w-5xl text-center z-10 relative px-2">
          <h1 className="text-3xl sm:text-5xl md:text-6xl uppercase mb-4 text-white font-medium flex flex-wrap justify-center">
            who we are
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
