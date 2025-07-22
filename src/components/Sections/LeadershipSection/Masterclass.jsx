import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../../assets/asset";
import GallerySection from "../EventsSection/GallerySection";

const Masterclass = () => {
  return (
    <section className="bg-white py-10 sm:py-15 lg:py-25 px-4 sm:px-6 md:px-10 pb-0">
      <div className="text-gray max-w-6xl mx-auto text-justify md:text-left">
        <h2 className="text-3xl md:text-4xl text-center font-medium text-deepBlue mb-10 sm:mb-12 lg:mb-16">
          LEADERSHIP MASTERCLASSES
        </h2>

        {/* Class 1 */}
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-10 mt-10 sm:mt-16 lg:mt-24">
          <div className="w-full lg:w-[40%] flex-shrink-0 flex">
            <img
              src={assets.tlm}
              alt="Transformational Class"
              className="w-full max-w-[700px] sm:max-h-[550px] max-h-[500px] md:max-h-[600px] lg:max-h-none object-cover mx-auto lg:mx-0"
            />
          </div>
          <div className="w-full lg:w-[60%] flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-medium lg:text-left text-center text-deepBlue mb-4">
              Transformational Leadership Masterclass (TLM)
            </h1>
            <p className="mb-7 text-base sm:text-lg md:text-xl w-full lg:max-w-xl mx-auto lg:mx-0">
              The{" "}
              <span className="text-red font-semibold">
                Transformational Leadership Masterclass
              </span>{" "}
              equips future-ready leaders with the mindset, skillset, and
              toolset essential to catalyze positive transformation across
              organizations.
              <br />
              <br />
              Led by a high-level faculty of industry captains and seasoned
              experts, this exclusive programme offers an immersive exploration
              into adaptive leadership, strategic thinking, and change
              management. Through real-world case studies, interactive
              exercises, and thought-provoking discussions, participants gain
              actionable insights and skills that directly elevate their
              leadership impact.
              <br />
              <br />
              Leaders who go through this program will emerge as resilient,
              visionary leaders, ready to inspire innovation and foster a
              culture of change-readiness—creating ripple effects of positive,
              lasting transformation where it's needed most.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 md:gap-9">
              <Link
                to="/transformational-leadership"
                className="text-[#003366] uppercase cursor-pointer border-[#FF0606] border text-xs sm:text-sm md:text-md px-8 sm:px-10 md:px-12 py-2 sm:py-3 rounded-full font-medium transition duration-300"
              >
                Learn More
              </Link>
              <Link
                to="/contact-us"
                className="bg-red text-white uppercase cursor-pointer text-xs sm:text-sm md:text-md px-8 sm:px-10 md:px-12 py-2 sm:py-3 rounded-full font-medium transition duration-300"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>

        {/* Class 2 */}
        <div className="flex flex-col-reverse lg:flex-row items-stretch justify-between gap-10 mt-20 sm:mt-28 lg:mt-40">
          <div className="w-full lg:w-[60%] flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-medium lg:text-left text-center text-deepBlue mb-4">
              Managing People, Processes and Performances (MP3)
            </h1>
            <p className="mb-4 text-base sm:text-lg md:text-xl w-full lg:max-w-xl mx-auto lg:mx-0">
              The{" "}
              <span className="font-bold text-red">
                MP3 Masterclass: Managing People, Processes, and Performance
              </span>{" "}
              is designed to empower managers who bridge the gap between
              strategy and execution as well as create a pipeline for senior
              leadership. This results-driven programme equips middle-level
              leaders with the frameworks and skills to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base sm:text-lg md:text-xl mb-5 lg:pl-4 pl-0 lg:max-w-xl w-full mx-auto lg:mx-0">
              <li>
                Build and sustain effective teams that deliver on objectives.
              </li>
              <li>
                Streamline processes to eliminate inefficiencies and foster
                collaboration.
              </li>
              <li>
                Drive consistent, high-level performance aligned with
                organizational goals.
              </li>
            </ul>
            <p className="mb-7 text-base sm:text-lg md:text-xl w-full lg:max-w-xl mx-auto lg:mx-0">
              Through a blend of immersive learning, real-world case studies,
              and actionable tools, participants leave empowered to bridge the
              gap between strategy and execution—turning management challenges
              into measurable successes.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 md:gap-9">
              <Link
                to="/mp3-masterclass"
                className="text-gray uppercase cursor-pointer border-[#FF0606] border text-xs sm:text-sm md:text-md px-8 sm:px-10 md:px-12 py-2 sm:py-3 rounded-full font-medium transition duration-300"
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
          <div className="w-full lg:w-[40%] flex-shrink-0 flex">
            <img
              src={assets.mp3}
              alt="Transformational Class"
              className="w-full max-w-[700px] sm:max-h-[550px] max-h-[500px] md:max-h-[600px] lg:max-h-none object-cover mx-auto lg:mx-0"
            />
          </div>
        </div>
        <hr className="mt-15 sm:mt-18 md:mt-25 border-[#BEBEBE] border" />
      </div>
    </section>
  );
};

export default Masterclass;
