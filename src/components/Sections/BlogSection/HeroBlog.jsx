import React from "react";
import { Link } from "react-router-dom";
import BackgroundDesign from "../../shared/BackgroundDesign";
import { assets } from "../../../assets/asset";
import Call from "../../shared/Call";

const HeroBlog = () => {
  const initialBg = assets.blogBg;
  return (
    <div className="w-full overflow-hidden font-metropolis">
      <BackgroundDesign initialBackground={initialBg}>
        <div className="max-w-5xl text-center z-10 relative px-2">
          <h1 className="text-3xl sm:text-5xl md:text-6xl uppercase mb-4 text-white font-medium flex flex-wrap justify-center">
            our INSIGHTS
          </h1>
          <Call />
        </div>
      </BackgroundDesign>
    </div>
  );
};

export default HeroBlog;
