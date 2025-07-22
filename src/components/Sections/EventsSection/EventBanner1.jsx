import React from "react";
import { eventAsset } from "./eventsAssets";
import EventBannerDesign from "../../shared/EventBannerDesign";

const EventBanner1 = () => {
  return (
    <section className="relative w-full h-[350px]  md:h-[400px] xl:h-[550px] overflow-hidden">
      <div className="relative w-full h-full overflow-hidden">
        <img
          src={eventAsset.banner1}
          alt="banner"
          className="w-full xl:h-[650px] h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-[#112953D9]"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-left text-white px-4 sm:px-6 md:px-10 mx-auto w-full max-w-6xl">
        <div className="font-medium text-2xl sm:text-3xl md:text-[37px] uppercase text-red transform transition-transform duration-700 hover:scale-105">
          <h2>Who Should Attend?</h2>
        </div>

        <p className="text-base sm:text-xl md:text-[23px] max-w-3xl mx-auto mt-3 sm:mt-5 text-center text-white font-medium mb-4 sm:mb-6 ">
          The Transformational Leadership Masterclass is tailored for senior
          leaders who are ready to raise their leadership game and drive
          meaningful change that repositions their organization for growth.
          <br />
          <br /> This programme is particularly beneficial for leaders in
          industries experiencing high levels of disruption, such as technology,
          finance, healthcare, real estate, and manufacturing.
        </p>
      </div>
    </section>
  );
};

export default EventBanner1;
