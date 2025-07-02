import React from "react";
import HeroSection from "../Sections/WhoWeAreSection/HeroSection";
import AboutSection from "../Sections/WhoWeAreSection/AboutSection";
import NumbersSection from "../Sections/WhoWeAreSection/NumbersSection";
import PurposeSection from "../Sections/WhoWeAreSection/PurposeSection";
import Banner1 from "../Sections/WhoWeAreSection/Banner1";
import ValueSection from "../Sections/WhoWeAreSection/ValueSection";
import Banner2 from "../Sections/WhoWeAreSection/Banner2";

const WhoWeAre = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      {/* <NumbersSection /> */}
      <PurposeSection />
      <Banner1 />
      <ValueSection />
      <Banner2 />
    </>
  );
};

export default WhoWeAre;
