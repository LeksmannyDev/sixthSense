import React from "react";

const WhatNumbers = () => {
  const stats = [
    {
      title: "Clients Served",
      number: "120+",
      description:
        "Coaching delivers an ROI of up to 529%, showing its financial impact (MetrixGlobal LLC)",
    },
    {
      title: "People Impacted",
      number: "300+",
      description:
        "80% of coaching clients report enhanced self-confidence (International Coach Federation)",
    },
    {
      title: "Session had",
      number: "35",
      description:
        "70% of coaching clients achieve better work performance (International Coach Federation)",
    },
  ];

  return (
    <div className="bg-light py-15 pb-20 px-4 text-center">
      <h2 className="text-2xl md:text-[40px] font-medium text-blue mb-10">
        What the Numbers Say?
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`px-4 py-10 sm:py-12 md:py-15 rounded-[50px] ${
              index === 1 ? "bg-[#FFFFFF]" : "bg-[#0101011A]"
            }`}
          >
            <p className="text-red text-sm italic">{stat.title}</p>
            <h3 className="text-4xl sm:text-5xl font-black text-blue my-2">
              {stat.number}
            </h3>
            <p className="text-sm mx-auto max-w-2xs text-gray px-2 sm:px-0">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatNumbers;
