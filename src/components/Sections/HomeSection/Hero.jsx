import React from "react";
import { Link } from "react-router-dom";
import BackgroundDesign from "../../shared/BackgroundDesign";
import { assets } from "../../../assets/asset";

const Hero = () => {
  const homeContent = {
    title: [
      { text: "Empowering ", color: "text-white" },
      { text: "Leaders, ", color: "text-red" },
      { text: "Enabling", color: "text-white" },
      { text: "Transformation ", color: "text-red" },
    ],
    description:
      "Let's help you position your organization for sustainable success",
    cta1: "schedule a free call",
  };

  const initialBg = assets.homeBg;

  return (
    <div className="w-full overflow-hidden font-metropolis">
      <BackgroundDesign initialBackground={initialBg}>
        <div className="max-w-5xl text-center z-10 relative px-2">
          <h1 className="text-3xl sm:text-5xl md:text-6xl uppercase mb-4 font-medium flex flex-wrap justify-center">
            {homeContent.title.map((part, i) => (
              <span
                key={i}
                className={`${part.color} mr-3 last:mr-0 ${
                  part.text.trim() === "Leaders," ? "font-semibold" : ""
                }`}
              >
                {part.text}
              </span>
            ))}
          </h1>

          <p className="text-[14px] sm:text-[18px] md:text-[24px] mt-3 max-w-4xl mx-auto text-light">
            {homeContent.description}
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3 sm:gap-4">
            <Link className="bg-red text-white uppercase cursor-pointer text-xs sm:text-sm md:text-md px-5 sm:px-14 py-2 sm:py-3 rounded-full font-medium transition duration-300">
              {homeContent.cta1}
            </Link>
          </div>
        </div>
      </BackgroundDesign>
    </div>
  );
};

export default Hero;
