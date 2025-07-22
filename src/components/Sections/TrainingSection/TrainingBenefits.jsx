import React from "react";
import ExecutiveBenefits from "../../shared/ExecutiveBenefits";
import { Link } from "react-router-dom";
import { eventAsset } from "../EventsSection/eventsAssets";

const TrainingBenefits = () => {
  const exampleBenefits = [
    "Deepened Self-Awareness",
    "People Development",
    "Strategic Alignment",
    "Community Access",
    "Culture of High Performance",
  ];
  return (
    <>
      <section className="px-4 sm:px-6 md:px-10 py-10">
        <div className="text-gray max-w-5xl mx-auto text-justify md:text-left ">
          <div className="flex flex-col lg:flex-row items-stretch justify-between gap-10 ">
            <div className="w-full lg:w-[40%] flex-shrink-0 flex">
              <img
                src={eventAsset.lmc}
                alt="BeSpoke Class"
                className="w-full max-w-[700px] sm:max-h-[550px] max-h-[500px] md:max-h-[600px] lg:max-h-none object-cover mx-auto lg:mx-0"
              />
            </div>
            <div className="w-full lg:w-[60%] flex flex-col lg:text-left text-center justify-center">
              <h1 className="text-3xl md:text-4xl font-medium max-w-lg mx-auto lg:m-0  text-deepBlue ">
                Leadership Mastery Circle (LMC)
              </h1>

              <p className="sm:mb-10 mb-6 text-base sm:text-lg md:text-xl lg:text-left text-center w-full lg:max-w-[570px] mx-auto lg:mx-0 mt-7">
                The{" "}
                <span className="font-bold text-red ">
                  Leadership Mastery Circle (LMC)
                </span>{" "}
                offers a premium, subscription-based coaching programme designed
                exclusively for executive teams seeking to elevate their
                collective leadership impact. By addressing performance
                challenges, fostering synergy, and equipping leaders with
                actionable strategies, LMC transforms teams into cohesive,
                high-performing units.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 md:gap-9">
                <Link
                  to="/leadership-circle"
                  className="text-[#003366] uppercase cursor-pointer border-[#FF0606] border text-xs sm:text-sm md:text-md px-8 sm:px-10 md:px-12 py-2 sm:py-3 rounded-full font-medium transition duration-300"
                >
                  Learn More
                </Link>
                <Link
                  to="/contact-us#contact"
                  className="bg-red text-white uppercase cursor-pointer text-xs sm:text-sm md:text-md px-8 sm:px-10 md:px-12 py-2 sm:py-3 rounded-full font-medium transition duration-300"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      <ExecutiveBenefits benefits={exampleBenefits} />
    </>
  );
};

export default TrainingBenefits;
