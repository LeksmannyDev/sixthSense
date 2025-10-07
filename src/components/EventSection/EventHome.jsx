import React from "react";
import { assets } from "../../assets/asset";
import BackgroundDesign from "../shared/BackgroundDesign";

const EventHome = () => {
  const initialBg = assets.Events;
  return (
    <div className="w-full overflow-hidden font-metropolis">
      <BackgroundDesign initialBackground={initialBg}>
        <div className="max-w-5xl text-center z-10 relative px-2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl uppercase mb-4 text-white font-medium flex flex-wrap justify-center">
            EVENTS
          </h1>
        </div>
      </BackgroundDesign>
    </div>
  );
};

export default EventHome;
