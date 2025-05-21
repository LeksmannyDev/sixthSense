import React from "react";
import { Link } from "react-router-dom";
import BackgroundDesign from "../../shared/BackgroundDesign";
import { assets } from "../../../assets/asset";

const HeroBlog = () => {
  const initialBg = assets.blogBg;
  return (
    <div className="w-full overflow-hidden font-metropolis">
      <BackgroundDesign initialBackground={initialBg}>
        <div className="max-w-5xl text-center z-10 relative px-2">
          <h1 className="text-3xl sm:text-5xl md:text-6xl uppercase mb-4 text-white font-medium flex flex-wrap justify-center">
            our INSIGHTS
          </h1>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link
              to="/contact-us"
              className="bg-red text-white uppercase cursor-pointer text-xs sm:text-sm md:text-md px-5 sm:px-14 py-2 sm:py-3 rounded-full font-medium transition duration-300"
            >
              schedule a free call
            </Link>
          </div>
        </div>
      </BackgroundDesign>
    </div>
  );
};

export default HeroBlog;
