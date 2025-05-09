import React from "react";
import EventsHome from "../Sections/EventsSection/EventsHome";
import QuoteBanner from "../Sections/EventsSection/QuoteBanner";
import LeadershipClass from "../Sections/EventsSection/LeadershipClass";
import GallerySection from "../Sections/EventsSection/GallerySection";
import Countdown from "../Sections/EventsSection/Countdown";
import EventBanner1 from "../Sections/EventsSection/EventBanner1";
import EventBanner2 from "../Sections/EventsSection/EventBanner2";
import Objectives from "../Sections/EventsSection/Objectives";
import ProgramStructure from "../Sections/EventsSection/ProgramStructure";

const Events = () => {
  return (
    <>
      <EventsHome />
      <QuoteBanner />
      <LeadershipClass />
      <GallerySection />
      <Countdown />
      <EventBanner1 />
      <Objectives />
      <ProgramStructure />
      <EventBanner2 />
    </>
  );
};

export default Events;
