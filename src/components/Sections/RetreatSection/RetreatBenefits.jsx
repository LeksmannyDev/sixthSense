import { Link } from "react-router-dom";
import ExecutiveBenefits from "../../shared/ExecutiveBenefits";
import { eventAsset } from "../EventsSection/eventsAssets";

const RetreatBenefits = () => {
  const exampleBenefits = [
    "Enhanced Strategic Clarity",
    "Stronger Leadership Cohesion",
    "Improved Decision-making",
    "Renewed Focus and Energy",
  ];
  return (
    <>
      <section className="px-4 sm:px-6 md:px-10 py-10 pt-0 sm:pt-5">
        <div className="text-gray max-w-5xl mx-auto text-justify md:text-left ">
          <div className="flex flex-col lg:flex-row items-stretch justify-between gap-10 ">
            <div className="w-full lg:w-[40%] flex-shrink-0 flex">
              <img
                src={eventAsset.lmr}
                alt="BeSpoke Class"
                className="w-full max-w-[700px] sm:max-h-[550px] max-h-[500px] md:max-h-[600px] lg:max-h-none object-cover mx-auto lg:mx-0"
              />
            </div>
            <div className="w-full lg:w-[60%] flex flex-col lg:text-left text-center justify-center">
              <h1 className="text-3xl md:text-4xl font-medium max-w-lg mx-auto lg:m-0  text-deepBlue ">
                Leadership Meets Renewal
              </h1>

              <p className="sm:mb-15 mb-6 text-base sm:text-lg md:text-xl lg:text-left text-center w-full lg:max-w-[570px] mx-auto lg:mx-0 mt-7">
                Our{" "}
                <span className="font-bold text-red ">Executive Retreats</span>{" "}
                are designed to align leadership teams, foster strategic
                thinking, and unlock new levels of collaboration and innovation.
                Whether you're navigating complex challenges, planning for
                long-term growth, or building stronger connections among your
                team, our retreats provide the perfect environment for
                transformative results.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 md:gap-9">
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

export default RetreatBenefits;
