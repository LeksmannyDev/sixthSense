import React from "react";
import { eventAsset } from "../EventsSection/eventsAssets";
import EventBannerDesign from "../../shared/EventBannerDesign";

const Mp3Banner = () => {
  return (
    <section className="relative w-full h-[350px]  md:h-[400px] xl:h-[450px] overflow-hidden">
      <div className="relative w-full h-full overflow-hidden">
        <img
          src={eventAsset.mp3Banner}
          alt="banner"
          className="w-full xl:h-[950px] h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-[#112953D9] "></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-left text-white px-4 sm:px-6 md:px-10 mx-auto w-full max-w-6xl">
        <div className="font-medium text-2xl sm:text-3xl md:text-[37px] text-red transform transition-transform duration-700 hover:scale-105">
          <h2>FOR WHO?</h2>
        </div>
        <p className="text-base sm:text-xl md:text-[21px] max-w-3xl mx-auto mt-3 sm:mt-5 text-center text-white font-medium mb-4 sm:mb-6 ">
          Specially designed for middle-level managers, team leads, and
          supervisors who are responsible for managing diverse teams, overseeing
          day-to-day operations, and ensuring the achievement of strategic
          organizational goals.
        </p>
      </div>
    </section>
  );
};

export default Mp3Banner;
