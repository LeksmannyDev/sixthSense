import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/asset";

const EventHomeDesign = ({
  backgroundImage,
  topText,
  ctaLink,
  ctaText,
  brochureText,
  title,
  subtitle,
  brochureLink,
}) => {
  return (
    <div className="w-full overflow-hidden">
      <div
        role="img"
        className="min-h-[80vh] sm:min-h-[90vh] md:min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-[#003366CC] "></div>

        {/* Content */}
        <div className="max-w-5xl w-full text-center z-10 relative px-4 sm:px-6 md:px-10">
          <p className="text-red uppercase text-lg sm:text-xl md:text-[22px] font-normal mb-4 sm:mb-5">
            {topText}
          </p>

          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[57px] text-white font-medium leading-snug sm:leading-tight md:leading-[65px]">
            {title}
          </h1>

          <p className="text-lg sm:text-xl md:text-[22px] py-6 text-white">
            {subtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-9">
            <Link
              to={ctaLink}
              className="bg-red text-white uppercase cursor-pointer text-xs sm:text-sm md:text-md px-5 sm:px-8 md:px-12 py-2 sm:py-3 rounded-full font-medium transition duration-300"
            >
              {ctaText}
            </Link>

            <a
              href={brochureLink}
              target="_blank"
              className="border-3 border-[#ff0c10] text-center uppercase text-xs sm:text-sm md:text-md text-white font-medium cursor-pointer px-5 sm:px-8 md:px-12 py-2 sm:py-3  rounded-full transition-all duration-300 bg-transparent flex items-center gap-2"
            >
              {brochureText}
              <img
                src={assets.download}
                alt="Download icon"
                className="w-3 h-3 sm:w-4 sm:h-4 object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventHomeDesign;
