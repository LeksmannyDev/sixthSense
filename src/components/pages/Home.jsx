import React from "react";
import Hero from "../Sections/HomeSection/Hero";
import Banner1 from "../Sections/HomeSection/Banner1";
import Graphic from "../Sections/HomeSection/Graphic";
import HomeService from "../Sections/HomeSection/HomeService";
import Brands from "../Sections/WhatWeDoSection/Brands";
import Banner2 from "../Sections/WhoWeAreSection/Banner2";
import WhyChooseUs from "../Sections/HomeSection/WhyChooseUs";
import TestimonialSection from "../Sections/HomeSection/TestimonialSection";
import HomeBanner2 from "../Sections/HomeSection/HomeBanner2";

const Home = () => {
  return (
    <>
      <Hero />
      <Graphic />
      <Banner1 />
      <HomeService />
      <Brands />
      <WhyChooseUs />
      <TestimonialSection />
      <Banner2 />
    </>
  );
};

export default Home;
