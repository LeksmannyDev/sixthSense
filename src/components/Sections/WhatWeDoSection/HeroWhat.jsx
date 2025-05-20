import React from "react";
import { Link } from "react-router-dom";
import BackgroundDesign from "../../shared/BackgroundDesign";
import { assets } from "../../../assets/asset";

const HeroWhat = () => {
  const initialBg = assets.whatBg;
  return (
    <div className="w-full overflow-hidden">
      <BackgroundDesign initialBackground={initialBg} mode="static">
        <div className="max-w-5xl text-center ">
          <h1 className="text-4xl sm:text-5xl md:text-6xl uppercase mb-4 text-white font-medium flex flex-wrap justify-center">
            what we do
          </h1>
          <p className="text-base sm:text-[18px] md:text-[21px] mt-3 max-w-4xl mx-auto text-light">
            We empower leaders and transform organizations with innovative,
            tailored solutions. Together, we shape the future of leadership.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
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

export default HeroWhat;
