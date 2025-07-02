import React from "react";
import HomeSection from "../Sections/LeadershipSection/HomeSection";
import Masterclass from "../Sections/LeadershipSection/Masterclass";
import Mp3Masterclass from "../Sections/LeadershipSection/Mp3Masterclass";
import GallerySection from "../Sections/EventsSection/GallerySection";
import Executive from "../Sections/LeadershipSection/Executive";
import OurApproach from "../Sections/LeadershipSection/OurApproach";
import Banner2 from "../Sections/WhoWeAreSection/Banner2";
import Graphic2 from "../Sections/LeadershipSection/Graphic2";

const Leadership = () => {
  return (
    <>
      <HomeSection />
      <Masterclass />
      {/* <GallerySection title="Images from our last Session" /> */}
      {/* <Mp3Masterclass /> */}
      {/* <GallerySection title="Images from our last Session" /> */}
      <Executive />
      <OurApproach />
      {/* <GallerySection title="Images from last our Session" /> */}
      <Banner2 />
      {/* <Graphic2 /> */}
    </>
  );
};

export default Leadership;
