import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../../assets/asset";
import GallerySection from "../EventsSection/GallerySection";

const Masterclass = () => {
  return (
    <section className="bg-light py-30 px-4 sm:px-6 md:px-10">
      <div className="text-gray max-w-6xl items-center text-justify md:text-left mx-auto">
        {" "}
        {/* Class 1  */}
        <h2 className="text-3xl lg:text-5xl md:text-4xl text-center font-medium text-deepBlue mb-8 md:mb-12 sm:mb-10 lg:mb-15">
          Our Masterclasses
        </h2>
        <h1 className="text-3xl md:text-[40px] lg:text-[50px] font-medium lg:text-left text-center text-deepBlue mb-4">
          Transformational Leadership
          <br /> Masterclass (TLM)
        </h1>
        {/* Intro Paragraph */}
        <p className="mb-7 text-base sm:text-lg md:text-xl lg:text-[24px]">
          The{" "}
          <span className="text-red font-semibold">
            Transformational Leadership Masterclass
          </span>{" "}
          equips future-ready leaders with the mindset, skillset, and toolset
          essential to catalyze positive transformation across organizations.
          <br />
          <br />
          Led by a high-level faculty of industry captains and seasoned experts,
          this exclusive programme offers an immersive exploration into adaptive
          leadership, strategic thinking, and change management. Through
          real-world case studies, interactive exercises, and thought-provoking
          discussions, participants gain actionable insights and skills that
          directly elevate their leadership impact. <br />
          <br /> Leaders who go through this program will emerge as resilient,
          visionary leaders, ready to inspire innovation and foster a culture of
          change-readiness—creating ripple effects of positive, lasting
          transformation where it’s needed most.
        </p>
        <div className="flex flex-wrap items-center justify-center md:justify-normal gap-4 sm:gap-6 md:gap-9">
          <Link
            to="/contact-us"
            className="bg-red text-white uppercase cursor-pointer text-xs sm:text-sm md:text-md px-5 sm:px-8 md:px-12 py-2 sm:py-3 rounded-full font-medium transition duration-300"
          >
            Apply Now
          </Link>

          <a
            href="https://drive.google.com/file/d/15rc4gzTn08_K4q_pY0c5VPDowrQujf7f/view?usp=sharing"
            target="_blank"
            download
            className="border-3 border-[#ff0c10] text-center uppercase text-xs sm:text-sm md:text-md text-deepBlue font-medium cursor-pointer px-5 sm:px-8 md:px-12 py-2 sm:py-3 rounded-full transition-all duration-300 bg-transparent flex items-center gap-2"
          >
            Download Brochure
            <img
              src={assets.donwloadB}
              alt="Download icon"
              className="w-3 h-3 object-contain"
            />
          </a>
        </div>
        {/* Class 2  */}
        <div className="lg:mt-40 md:mt-30 sm:mt-20 mt-20">
          <h1 className="text-3xl md:text-[40px] lg:text-[50px] font-medium lg:text-left text-center text-deepBlue mb-4">
            Managing People, Processes and
            <br /> Performances (MP3)
          </h1>
          <p className="mb-4 text-base md:text-xl lg:text-[24px]">
            The{" "}
            <span className="font-bold text-red">
              MP3 Masterclass: Managing People, Processes, and Performance
            </span>{" "}
            was created to precisely address this challenge. This results-driven
            programme equips middle-level leaders with the frameworks and skills
            to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base sm:text-lg md:text-[22px] mb-2 pl-4">
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
          <p className="mb-7 text-base sm:text-lg md:text-xl lg:text-[24px]">
            Through a blend of immersive learning, real-world case studies, and
            actionable tools, participants leave empowered to bridge the gap
            between strategy and execution—turning management challenges into
            measurable successes.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center md:justify-normal  gap-4 sm:gap-6 md:gap-9">
          <Link
            to="/contact-us"
            className="bg-red text-white uppercase cursor-pointer text-xs sm:text-sm md:text-md px-5 sm:px-8 md:px-12 py-2 sm:py-3 rounded-full font-medium transition duration-300"
          >
            Apply Now
          </Link>

          <a
            href="https://drive.google.com/file/d/1JXGBvoxGdbl6mDEe2n8PMusi8gPChBk5/view?usp=sharing"
            target="_blank"
            download
            className="border-3 border-[#ff0c10] text-center uppercase text-xs sm:text-sm md:text-md text-deepBlue font-medium cursor-pointer px-5 sm:px-8 md:px-12 py-2 sm:py-3 rounded-full transition-all duration-300 bg-transparent flex items-center gap-2"
          >
            Download Brochure
            <img
              src={assets.donwloadB}
              alt="Download icon"
              className="w-3 h-3 object-contain"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Masterclass;
