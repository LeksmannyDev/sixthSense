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
      subtitle="Managing People, Processes, and Performance"
    />
  );
};
export default Mp3Home;
