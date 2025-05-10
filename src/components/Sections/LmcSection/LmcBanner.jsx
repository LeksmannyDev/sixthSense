import React from "react";
import { eventAsset } from "../EventsSection/eventsAssets";
import EventBannerDesign from "../../shared/EventBannerDesign";

const LmcBanner = () => {
  return (
    <div>
      <EventBannerDesign
        image={eventAsset.eventBanner}
        title="FOR WHO?"
        text="Specially designed for senior executives, department heads, and functional leaders, this group coaching programme empowers leaders in management teams to drive exceptional results by mastering the art of influence, fostering innovation, and optimizing team performance across the organization.
It provides a collaborative environment where leaders can align their vision, sharpen their strategic thinking, and elevate their collective leadership impact."
      />
    </div>
  );
};

export default LmcBanner;
