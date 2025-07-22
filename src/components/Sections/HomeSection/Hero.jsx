import React from "react";
import { Link } from "react-router-dom";
import BackgroundDesign from "../../shared/BackgroundDesign";
import { assets } from "../../../assets/asset";
import Call from "../../shared/Call";
const Hero = () => {
  const homeContent = {
    title: [
      { text: "Empowering ", color: "text-white" },
      { text: "Leaders, ", color: "text-reed" },
      { text: "Enabling", color: "text-white" },
      { text: "Transformation ", color: "text-reed" },
    ],
    description:
      "Let's help you position your organization for sustainable success",
  };

  const initialBg = assets.homeBg;

  return (
    <div className="w-full overflow-hidden font-metropolis">
      <BackgroundDesign initialBackground={initialBg} mode="animated">
        <div className="max-w-5xl text-center z-10 relative px-4 sm:px-6 md:px-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl uppercase mb-4 font-medium flex flex-wrap justify-center">
            {homeContent.title.map((part, i) => (
              <span
                key={i}
                className={`${part.color} mr-3 last:mr-0 ${
                  part.text.trim() === "Leaders," ? "font-medium" : ""
                }`}
              >
                {part.text}
              </span>
            ))}
          </h1>

          <p className="text-lg sm:text-xl md:text-[22px] mt-3 max-w-4xl mx-auto text-white">
            {homeContent.description}
          </p>
          <Call />
        </div>
      </BackgroundDesign>
    </div>
  );
};

export default Hero;
