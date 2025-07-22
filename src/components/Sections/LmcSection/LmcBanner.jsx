import React from "react";
import { eventAsset } from "../EventsSection/eventsAssets";
import EventBannerDesign from "../../shared/EventBannerDesign";

const LmcBanner = () => {
  return (
    <section className="relative w-full h-[400px]  md:h-[450px] xl:h-[500px] overflow-hidden">
      <div className="relative w-full h-full overflow-hidden">
        <img
          src={eventAsset.lmcBanner}
          alt="banner"
          className="w-full xl:h-[1000px] h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-[#112953CC] "></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-left text-white px-4 sm:px-6 mx-auto w-full max-w-6xl">
        <div className="font-medium text-2xl sm:text-3xl md:text-[40px] text-red transform transition-transform duration-700 hover:scale-105">
          <h2>FOR WHO?</h2>
        </div>

        <p className="text-base sm:text-xl md:text-[23px] max-w-4xl mx-auto mt-3 sm:mt-5 text-center text-white font-medium mb-4 sm:mb-6 ">
          Specially designed for senior executives, department heads, and
          functional leaders, this group coaching programme empowers leaders in
          management teams to drive exceptional results by mastering the art of
          influence, fostering innovation, and optimizing team performance
          across the organization.
          <br /> <br />
          It provides a collaborative environment where leaders can align their
          vision, sharpen their strategic thinking, and elevate their collective
          leadership impact.
        </p>
      </div>
    </section>
  );
};

export default LmcBanner;
