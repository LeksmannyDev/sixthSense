import React from "react";
import { eventAsset } from "./eventsAssets";
import EventBannerDesign from "../../shared/EventBannerDesign";

const EventBanner2 = () => {
  return (
    <div>
      <EventBannerDesign
        image={eventAsset.banner2}
        title="Community Access"
        text="Leaders who go through this program will receive a complimentary access to our alumni network for ongoing support, networking, and knowledge-sharing."
      />
    </div>
  );
};
export default EventBanner2;
