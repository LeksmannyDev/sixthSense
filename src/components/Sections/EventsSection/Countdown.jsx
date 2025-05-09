import React from "react";
import { eventAsset } from "./eventsAssets";

const Countdown = () => {
  const stats = [
    {
      number: "20",
      description: "Days",
    },
    {
      number: "24",
      description: "Hours",
    },
    {
      number: "30",
      description: "Minutes",
    },
    {
      number: "12",
      description: "Seconds",
    },
  ];

  return (
    <div className="bg-light py-12 px-4 text-center">
      <h2 className="text-2xl md:text-[40px] font-medium text-blue mb-10">
        Countdown till next Session
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`px-4 py-10 sm:py-12 md:py-15 rounded-[50px] ${
              index % 2 === 1 ? "bg-[#FF0C101A]" : "bg-white"
            }`}
          >
            <h3 className="text-4xl sm:text-6xl font-black text-blue my-2">
              {stat.number}
            </h3>
            <p className="text-red text-[15px] italic">{stat.description}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="border-[#ff0c10] text-center uppercase text-sm text-white font-medium cursor-pointer px-6 sm:px-15 py-3 rounded-full bg-red flex items-center gap-2 ">
          May 30, 2025
          <img
            src={eventAsset.calendar}
            alt="Calendar icon"
            className="w-4 h-4"
          />
        </button>
      </div>
    </div>
  );
};

export default Countdown;
