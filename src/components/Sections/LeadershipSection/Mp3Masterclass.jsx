import { Link } from "react-router-dom";
import { assets } from "../../../assets/asset";
import GallerySection from "../EventsSection/GallerySection";

const Mp3Masterclass = () => {
  return (
    <section className="bg-light pb-20 pt-0 px-4 sm:px-6 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-[51px] font-medium lg:text-right text-center text-deepBlue mb-4">
          Managing People, Processes and Performances (MP3)
        </h1>
        <div className="text-right space-y-4 mb-8">
          <p className="text-base sm:text-lg md:text-[22px]">
            The{" "}
            <span className="font-bold text-red">
              MP3 Masterclass: Managing People, Processes, and Performance
            </span>{" "}
            was created to precisely address this challenge. This results-driven
            programme equips middle-level leaders with the frameworks and skills
            to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base sm:text-lg md:text-[22px] pl-4">
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
          <p className="text-base sm:text-lg md:text-[22px]">
            Through a blend of immersive learning, real-world case studies, and
            actionable tools, participants leave empowered to bridge the gap
            between strategy and execution—turning management challenges into
            measurable successes.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center lg:justify-end gap-4 sm:gap-6 md:gap-9">
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

export default Mp3Masterclass;
