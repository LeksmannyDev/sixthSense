import React from "react";
import { eventAsset } from "../EventsSection/eventsAssets";

const LmcGraphic2 = () => {
  return (
    <section className="overflow-hidden flex justify-center items-center bg-light pb-5 pt-10 sm:pt-20">
      <div className="w-[100%] ">
        <div
          role="img"
          aria-label="WHAT YOU STAND TO GAIN"
          className="w-full  lg:ml-7 ml-3 h-[600px] sm:h-[700px] md:h-[900px] lg:h-[1200px] xl:h-[1400px] 2xl:h-[1500px] flex items-center justify-center bg-center"
          style={{
            backgroundImage: `url(${eventAsset.lmcGraphic2})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
    </section>
  );
};

export default LmcGraphic2;
