import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../../assets/asset";
import GallerySection from "../EventsSection/GallerySection";

const Masterclass = () => {
  return (
    <section className="bg-light py-20 px-4 sm:px-6 lg:px-24">
      <div className="text-gray max-w-6xl items-center text-justify mx-auto">
        {" "}
        <h2 className="text-3xl md:text-[40px] text-center font-medium text-deepBlue mb-3 md:mb-7 sm:mb-5 lg:mb-15">
          Our Masterclasses
        </h2>
        <h1 className="text-3xl md:text-[48px] font-medium lg:text-left text-center text-deepBlue mb-4">
          Transformational Leadership Masterclass (TLM)
        </h1>
        {/* Intro Paragraph */}
        <p className="mb-7 text-base sm:text-lg md:text-[21px]">
          The{" "}
          <span className="text-red font-semibold">
            Transformational Leadership Masterclass
          </span>{" "}
          equips future-ready leaders with the mindset, skillset, and toolset
          essential to catalyze positive transformation across organizations.
          <br />
          Led by a high-level faculty of industry captains and seasoned experts,
          this exclusive programme offers an immersive exploration into adaptive
          leadership, strategic thinking, and change management. Through
          real-world case studies, interactive exercises, and thought-provoking
          discussions, participants gain actionable insights and skills that
          directly elevate their leadership impact. Leaders who go through this
          program will emerge as resilient, visionary leaders, ready to inspire
          innovation and foster a culture of change-readiness—creating ripple
          effects of positive, lasting transformation where it’s needed most.
        </p>
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-9">
          <Link
            to=""
            className="bg-red text-white uppercase cursor-pointer text-xs sm:text-sm md:text-md px-5 sm:px-8 md:px-12 py-2 sm:py-3 rounded-full font-medium transition duration-300"
          >
            Apply Now
          </Link>

          <button className="border-3 border-[#ff0c10] text-center uppercase text-xs sm:text-sm md:text-md text-deepBlue font-medium cursor-pointer px-5 sm:px-8 md:px-12 py-2 sm:py-3 rounded-full transition-all duration-300 bg-transparent flex items-center gap-2">
            Download Brochure
            <img
              src={assets.donwloadB}
              alt="Download icon"
              className="w-3 h-3 object-contain"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Masterclass;
