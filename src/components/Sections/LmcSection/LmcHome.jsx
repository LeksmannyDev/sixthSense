import React from "react";
import EventHomeDesign from "../../shared/EventHomeDesign";
import { eventAsset } from "../EventsSection/eventsAssets";

const LmcHome = () => {
  return (
    <EventHomeDesign
      backgroundImage={eventAsset.background2}
      topText="LEADERSHIP MASTERY CIRCLE (LMC)"
      title={
        <>
          Raise Your
          <br /> Leadership Game
        </>
      }
      subtitle="Executive Group Coaching for High-Impact Management Teams"
    />
  );
};
export default LmcHome;
