import React from "react";
import Mp3Home from "../Sections/Mp3Section/Mp3Home";
import QuoteMp3 from "../Sections/Mp3Section/QuoteMp3";
import Mp3Class from "../Sections/Mp3Section/Mp3Class";
import QuoteMp32 from "../Sections/Mp3Section/QuoteMp32";
import Mp3Banner from "../Sections/Mp3Section/Mp3Banner";
import Mp3Numbers from "../Sections/Mp3Section/Mp3Numbers";
import CourseContent from "../Sections/Mp3Section/CourseContent";
import StandToGain from "../Sections/Mp3Section/StandToGain";
import ModuleOverview from "../Sections/Mp3Section/ModuleOverview";
import Mp3Methodology from "../Sections/Mp3Section/Mp3Methodology";
import Mp3Commercial from "../Sections/Mp3Section/Mp3Commercial";
import Mp3NextSteps from "../Sections/Mp3Section/Mp3NextSteps";

const Mp3 = () => {
  return (
    <>
      <Mp3Home />
      <QuoteMp3 />
      <Mp3Class />
      <QuoteMp32 />
      <Mp3Banner />
      {/* <Mp3Numbers /> */}
      {/* <CourseContent /> */}
      <StandToGain />
      {/* <ModuleOverview /> */}
      {/* <Mp3Methodology /> */}
      {/* <Mp3Commercial /> */}
      <Mp3NextSteps />
    </>
  );
};

export default Mp3;
