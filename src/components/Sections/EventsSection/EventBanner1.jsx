import React from "react";
import { eventAsset } from "./eventsAssets";
import EventBannerDesign from "../../shared/EventBannerDesign";

const EventBanner1 = () => {
  return (
    <div>
      <EventBannerDesign
        image={eventAsset.banner1}
        title="Who Should Attend?"
        text="The Transformational Leadership Masterclass is tailored for senior
              leaders who are ready to raise their leadership game and drive
              meaningful change that repositions their organization for growth. This
              programme is particularly beneficial for leaders in industries
              experiencing high levels of disruption, such as technology, finance,
              healthcare, real estate, and manufacturing."
      />
    </div>
  );
};
export default EventBanner1;
