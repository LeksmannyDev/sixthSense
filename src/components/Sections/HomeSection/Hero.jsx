import React from "react";
import { Link } from "react-router-dom";

import { homeAsset } from "./homeAsset";

const Hero = () => {
  const homeContent = {
    title: [
      { text: "Empowering ", color: "text-white" },
      { text: "Leaders, ", color: "text-red" },
      { text: "Enabling", color: "text-white" },
      { text: "Transformation ", color: "text-red" },
    ],
    description:
      "Let’s help you position your organization for sustainable success",
    cta1: "schedule a free call",
  };
  return (
    <div className="w-full overflow-hidden font-metropolis">
      <div
        role="img"
        aria-label="About Us - Ejideson Prestige Empresa Limited"
        className="min-h-[100vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${homeAsset.Hero})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

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

          <p className="text-[14px] sm:text-[18px] md:text-[24px] mt-3 max-w-4xl mx-auto text-font text-light">
            {homeContent.description}
          </p>

          <div className="mt-6 flex flex-wrap justify-center text-font gap-3 sm:gap-4">
            <Link className="bg-red text-white uppercase cursor-pointer text-xs sm:text-sm md:text-md px-5 sm:px-14 py-2 sm:py-3 rounded-full font-medium transition duration-300">
              {homeContent.cta1}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
