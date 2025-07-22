import React from "react";
import HomeTraining from "../Sections/TrainingSection/HomeTraining";
import TrainingBenefits from "../Sections/TrainingSection/TrainingBenefits";
import TrainingImage from "../Sections/TrainingSection/TrainingImage";
import Banner2 from "../Sections/WhoWeAreSection/Banner2";
import TrainQuote from "../Sections/TrainingSection/TrainQuote";

const Training = () => {
  return (
    <>
      <HomeTraining />
      <TrainQuote />
      <TrainingBenefits />
      {/* <TrainingImage /> */}
      <Banner2 />
    </>
  );
};

export default Training;
