import React from "react";
import { eventAsset } from "./eventsAssets";
import EventHomeDesign from "../../shared/EventHomeDesign";

const EventsHome = () => {
  return (
    <EventHomeDesign
      backgroundImage={eventAsset.background1}
      topText="GET READY TO LEAD CHANGE AND REPOSITION YOUR ORGANIZATION"
      title={
        <>
          Transformational Leadership
          <br /> Masterclass (TLM)
        </>
      }
      subtitle="The Transformational Leadership Masterclass"
      ctaLink="/contact-us"
      ctaText="apply now"
      brochureText="Download Brochure"
    />
  );
};

export default EventsHome;
