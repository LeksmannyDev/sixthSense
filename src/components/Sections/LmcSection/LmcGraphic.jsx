import React from "react";
import { eventAsset } from "../EventsSection/eventsAssets";

const LmcGraphic = () => {
  return (
    <section className="overflow-hidden flex justify-center items-center bg-light py-5">
      <div className="w-[100%] ">
        <div
          role="img"
          aria-label="Empowering Leaders"
          className="w-full  lg:ml-7 ml-3 h-[400px] sm:h-[700px] md:h-[700px] lg:h-[800px] xl:h-[900px] 2xl:h-[1200px] flex items-center justify-center bg-center"
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
