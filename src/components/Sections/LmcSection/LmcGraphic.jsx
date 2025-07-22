import React from "react";
import { eventAsset } from "../EventsSection/eventsAssets";

const LmcGraphic = () => {
  return (
    <section className="overflow-hidden bg-light py-15 px-4 sm:px-6 md:px-10">
      <div className="text-gray max-w-5xl text-justify mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-[37px] font-semibold text-center text-blue mb-8 lg:mb-20">
          THE LMC STRATEGIC APPROACH
        </h1>
      </div>
      <div className="w-[100%] ">
        <div
          role="img"
          aria-label="Empowering Leaders"
          className="w-full  lg:ml-7 ml-3 h-[800px] sm:h-[1200px] md:h-[1500px] lg:h-[1800px] xl:h-[1900px] 2xl:h-[2000px] flex items-center justify-center bg-center"
          style={{
            backgroundImage: `url(${eventAsset.lmcGraphic})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
    </section>
  );
};

export default LmcGraphic;
