import React from "react";
import LmcHome from "../Sections/LmcSection/LmcHome";
import QuoteLmc from "../Sections/LmcSection/QuoteLmc";
import LmcClass from "../Sections/LmcSection/LmcClass";
import LmcBanner from "../Sections/LmcSection/LmcBanner";
import LmcGraphic from "../Sections/LmcSection/LmcGraphic";
import LmcNumbers from "../Sections/LmcSection/LmcNumbers";
import Quote2Lmc from "../Sections/LmcSection/Quote2Lmc";
import LmcGraphic2 from "../Sections/LmcSection/LmcGraphic2";
import CoachProfile from "../Sections/LmcSection/CoachProfile";
import Commercial from "../Sections/LmcSection/Commercial";

const Lmc = () => {
  return (
    <>
      <LmcHome />
      <QuoteLmc />
      <LmcClass />
      <LmcBanner />
      <LmcNumbers />
      <LmcGraphic />
      <Quote2Lmc />
      <LmcGraphic2 />
      <CoachProfile />
      <Commercial />
    </>
  );
};

export default Lmc;
