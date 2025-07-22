import React from "react";
import ServicesHomeDesign from "../../shared/ServicesHomeDesign";
import { assets } from "../../../assets/asset";

const HomeSection = () => {
  return (
    <ServicesHomeDesign
      title={
        <>
          Leadership <br /> development
        </>
      }
      backgroundImage={assets.background}
    />
  );
};

export default HomeSection;
