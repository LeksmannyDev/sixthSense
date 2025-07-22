import React from "react";
import { eventAsset } from "./eventsAssets";
import EventHomeDesign from "../../shared/EventHomeDesign";

const EventsHome = () => {
  return (
    <EventHomeDesign
      backgroundImage={eventAsset.background1}
      title={
        <>
          Transformational Leadership
          <br /> Masterclass (TLM)
        </>
      }
      subtitle="Equipping future-ready leaders to drive transformative impact."
      ctaLink="/contact-us"
      ctaText="apply now"
      brochureText="Download Brochure"
      brochureLink="https://drive.google.com/file/d/15rc4gzTn08_K4q_pY0c5VPDowrQujf7f/view?usp=sharing"
    />
  );
};

export default EventsHome;
