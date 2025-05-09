import React from "react";
import BackgroundDesign from "../../shared/BackgroundDesign";

const HomeFaculty = () => {
  return (
    <div className="w-full overflow-hidden font-metropolis">
      <BackgroundDesign>
        <div className="max-w-5xl text-center z-10 relative px-2">
          <h1 className="text-3xl sm:text-5xl md:text-6xl uppercase mb-4 text-white font-medium flex flex-wrap justify-center">
            Our <br /> Faculty
          </h1>
        </div>
      </BackgroundDesign>
    </div>
  );
};

export default HomeFaculty;
