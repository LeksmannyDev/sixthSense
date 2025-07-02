import React from "react";
import { eventAsset } from "../EventsSection/eventsAssets";

const Mp3Methodology = () => {
  return (
    <section className="overflow-hidden py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-[40px] font-medium text-blue mb-4 text-center">
          METHODOLOGY
        </h2>
        <p className="text-center text-gray md:text-[21px] text-lg w-full mb-8 sm:mb-1 md:mb-10 lg:mb-12">
          The MP3 Masterclass: Managing People, Processes, and Performance is a
          2-day immersive programme, delivered both physically and virtually,
          utilizing a range of engaging methodologies to ensure maximum learning
          retention and practical application:
        </p>
      </div>
      <div className="w-[100%] flex justify-center items-center ">
        <div
          role="img"
          aria-label="WHAT YOU STAND TO GAIN"
          className="w-full  lg:ml-7 ml-3 h-[500px] sm:h-[650px] md:h-[700px] lg:h-[900px] xl:h-[1200px] 2xl:h-[1500px] flex items-center justify-center bg-center"
          style={{
            backgroundImage: `url(${eventAsset.methodology})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
    </section>
  );
};

export default Mp3Methodology;
