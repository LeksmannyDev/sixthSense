import React from "react";
import HeroWhat from "../Sections/WhatWeDoSection/HeroWhat";
import WhatBanner from "../Sections/WhatWeDoSection/WhatBanner";
import ServiceSection from "../Sections/WhatWeDoSection/ServiceSection";
import WhatNumbers from "../Sections/WhatWeDoSection/WhatNumbers";
import Brands from "../Sections/WhatWeDoSection/Brands";
import Banner2 from "../Sections/WhoWeAreSection/Banner2";

const WhatWeDo = () => {
  return (
    <>
      <HeroWhat />
      <WhatBanner />
      <ServiceSection />
      {/* <WhatNumbers /> */}
      <Brands />
      <Banner2 />
    </>
  );
};

export default WhatWeDo;
