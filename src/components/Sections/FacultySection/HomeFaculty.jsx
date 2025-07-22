import React from "react";
import BackgroundDesign from "../../shared/BackgroundDesign";
import { assets } from "../../../assets/asset";

const HomeFaculty = () => {
  const initialBg = assets.facultBg;
  return (
    <div className="w-full overflow-hidden font-metropolis">
      <BackgroundDesign initialBackground={initialBg}>
        <div className="max-w-5xl text-center z-10 relative px-2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl uppercase mb-4 text-white font-medium flex flex-wrap justify-center">
            Our Faculty
          </h1>
          <p className="text-lg sm:text-xl md:text-[22px] mt-10 max-w-4xl mx-auto text-white">
            Experienced Leaders Driving Exceptional Learning{" "}
          </p>
        </div>
      </BackgroundDesign>
    </div>
  );
};

export default HomeFaculty;
