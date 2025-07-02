import React from "react";
import { Link } from "react-router-dom";
import BackgroundDesign from "../../shared/BackgroundDesign";
import { assets } from "../../../assets/asset";
import Call from "../../shared/Call";

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

          <Call />
        </div>
      </BackgroundDesign>
    </div>
  );
};

export default HeroWhat;
