import React from "react";
import { Link } from "react-router-dom";
import BackgroundDesign from "../../shared/BackgroundDesign";
import { assets } from "../../../assets/asset";
import Call from "../../shared/Call";

const HeroContact = () => {
  const initialBg = assets.contactBg;
  return (
    <div className="w-full overflow-hidden">
      <BackgroundDesign initialBackground={initialBg}>
        <div className="max-w-5xl text-center z-10 relative px-2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl uppercase mb-4 text-white font-medium flex flex-wrap justify-center">
            contact us
          </h1>
          <p className="text-lg sm:text-xl md:text-[22px] mt-5 text-center font-medium mx-auto text-white">
            Begin your leadership development journey with us
          </p>
          {/* <Call /> */}
        </div>
      </BackgroundDesign>
    </div>
  );
};

export default HeroContact;
