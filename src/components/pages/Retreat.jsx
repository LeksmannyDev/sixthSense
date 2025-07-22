import React from "react";
import HomeRetreat from "../Sections/RetreatSection/HomeRetreat";
import Recharge from "../Sections/RetreatSection/Recharge";
import RetreatBenefits from "../Sections/RetreatSection/RetreatBenefits";
import Banner2 from "../Sections/WhoWeAreSection/Banner2";
import RetreatPictures from "../Sections/RetreatSection/RetreatPictures";
import RetreatQuote from "../Sections/RetreatSection/RetreatQuote";

const Retreat = () => {
  return (
    <>
      <HomeRetreat />
      <RetreatQuote />
      <RetreatBenefits />
      {/* <Recharge /> */}
      <RetreatPictures />
      <Banner2 />
    </>
  );
};

export default Retreat;
