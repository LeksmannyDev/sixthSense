import React from "react";
import ExecutiveBenefits from "../../shared/ExecutiveBenefits";
import GallerySection from "../EventsSection/GallerySection";

const RetreatBenefits = () => {
  const exampleBenefits = [
    "Leadership & Strategic Thinking Workshops",
    "Mindfulness & Stress Management",
    "Executive Coaching & Mentorship",
    "Exclusive Networking with Industry Leaders",
    "Outdoor Adventures & Team-Building",
  ];
  return (
    <>
      <ExecutiveBenefits
        title=" Where Leadership Meets Renewal"
        description="Our Executive Retreat is an immersive experience for leaders seeking strategic clarity, personal growth, and deep professional connections. Set in a tranquil environment, this retreat blends expert-led workshops, wellness activities, and networking opportunities."
        benefits={exampleBenefits}
      />
    </>
  );
};

export default RetreatBenefits;
