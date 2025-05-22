import React from "react";
import EventHomeDesign from "../../shared/EventHomeDesign";
import { eventAsset } from "../EventsSection/eventsAssets";

const Mp3Home = () => {
  return (
    <EventHomeDesign
      backgroundImage={eventAsset.background3}
      topText="Leadership Excellence Starts Here"
      title={
        <>
          MP3
          <br /> Masterclass
        </>
      }
      subtitle="Empowering mid-level leaders to lead high-performing teams"
      ctaLink="/contact-us"
      ctaText="apply now"
      brochureText="Download Brochure"
      brochureLink="https://drive.google.com/file/d/1JXGBvoxGdbl6mDEe2n8PMusi8gPChBk5/view?usp=sharing"
    />
  );
};
export default Mp3Home;
