import React from "react";
import ExecutiveBenefits from "../../shared/ExecutiveBenefits";
import GallerySection from "../EventsSection/GallerySection";

const TrainingBenefits = () => {
  const exampleBenefits = [
    "Advanced Leadership Development",
    "Ono-on-One Coaching & Mentorship",
    "Strategic Decision Making",
    "Networking with industry Experts",
    "Financial & Business Growth Strategies",
  ];
  return (
    <>
      {" "}
      <ExecutiveBenefits
        title="Transforming Leaders, Shaping the Future"
        description="Our Executive Training Program is tailored for high-achieving professionals who want to accelerate their leadership skills and business expertise. This program provides hands-on learning experiences, real-world case studies, and mentorship from top industry leaders."
        benefits={exampleBenefits}
      />
    </>
  );
};

export default TrainingBenefits;
