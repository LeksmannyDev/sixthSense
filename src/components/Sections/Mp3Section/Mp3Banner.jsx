import React from "react";
import { eventAsset } from "../EventsSection/eventsAssets";
import EventBannerDesign from "../../shared/EventBannerDesign";

const Mp3Banner = () => {
  return (
    <EventBannerDesign
      image={eventAsset.eventBanner}
      title="FOR WHO?"
      text="Specially designed for middle-level managers, team leads, and supervisors who are responsible for managing diverse teams, overseeing day-to-day operations, and ensuring the achievement of strategic organizational goals."
    />
  );
};

export default Mp3Banner;
