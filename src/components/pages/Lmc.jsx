import React from "react";
import LmcHome from "../Sections/LmcSection/LmcHome";
import QuoteLmc from "../Sections/LmcSection/QuoteLmc";
import LmcClass from "../Sections/LmcSection/LmcClass";
import LmcBanner from "../Sections/LmcSection/LmcBanner";
import LmcGraphic from "../Sections/LmcSection/LmcGraphic";

const Lmc = () => {
  return (
    <>
      <LmcHome />
      <QuoteLmc />
      <LmcClass />
      <LmcBanner />
      <LmcGraphic />
    </>
  );
};

export default Lmc;
