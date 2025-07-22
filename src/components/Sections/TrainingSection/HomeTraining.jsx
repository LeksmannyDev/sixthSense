import React from "react";
import ServicesHomeDesign from "../../shared/ServicesHomeDesign";
import { assets } from "../../../assets/asset";

const HomeTraining = () => {
  return (
    <ServicesHomeDesign
      title={
        <>
          executive <br /> Coaching
        </>
      }
      backgroundImage={assets.trainingBackground}
    />
  );
};

export default HomeTraining;
