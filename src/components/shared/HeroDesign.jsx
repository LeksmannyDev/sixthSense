import React from "react";
import { Link } from "react-router-dom";
import BackgroundDesign from "./BackgroundDesign";

const HeroDesign = ({ title }) => {
  return (
    <div className="w-full overflow-hidden font-metropolis">
      <BackgroundDesign>
        <div className="max-w-5xl text-center z-10 relative px-2">
          <h1 className="text-3xl sm:text-5xl md:text-6xl uppercase mb-4 text-white font-medium flex flex-wrap justify-center">
            {title}
          </h1>

          <p className="text-[14px] sm:text-[18px] md:text-[21px] mt-3 max-w-5xl mx-auto text-light">
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

export default HeroDesign;
