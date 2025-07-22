import React from "react";

const LmcNumbers = () => {
  const stats = [
    {
      title: "Return on Investment",
      number: "529%",
      description:
        "Coaching delivers an ROI of up to 529%, showing its financial impact (MetrixGlobal LLC)",
    },
    {
      title: "Self-Confidence Growth",
      number: "80%",
      description:
        "80% of coaching clients report enhanced self-confidence (International Coach Federation)",
    },
    {
      title: "Improved Work Performance",
      number: "70%",
      description:
        "70% of coaching clients achieve better work performance (International Coach Federation)",
    },
    {
      title: "Enhanced Communication Skills",
      number: "72%",
      description:
        "72% of clients report improved communication, vital for leadership (International Coach Federation)",
    },
    {
      title: "Boosted Relationships",
      number: "73%",
      description:
        "73% of participants report stronger workplace relationships (International Coach Federation)",
    },
    {
      title: "Strategic Decision-Making",
      number: "71%",
      description:
        "71% of leaders credit coaching for better strategic thinking, boosting organizational success (Manchester Inc.)",
    },
    {
      title: "Skill Development",
      number: "61%",
      description:
        "61% of coaching clients improve business management skills (International Coach Federation)",
    },
    {
      title: "Leadership Effectiveness",
      number: "86%",
      description:
        "86% of companies report that coaching strengthens resilience and adaptability in leaders (Manchester Inc.).",
    },
    {
      title: "Transformational Results",
      number: "8x",
      description:
        "Transformational Results: Businesses investing in coaching see $7.90 ROI for every $1 spent (International Coach Federation)",
    },
  ];

  return (
    <div className="bg-light sm:py-25 py-16 px-4 sm:px-6 md:px-8 text-center">
      <h1 className="text-2xl md:text-3xl uppercase lg:text-[37px] font-medium text-center text-blue mb-8">
        What the Numbers Say?
      </h1>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`py-10 sm:py-10 md:py-12 rounded-[50px] ${
              index % 2 === 1 ? "bg-[#FFFFFF]" : "bg-[#CEE9FF]"
            }`}
          >
            <p className="text-red text-lg italic font-medium">{stat.title}</p>
            <h3 className="text-4xl sm:text-6xl font-black text-blue my-3">
              {stat.number}
            </h3>
            <p className="text-[14px] mx-auto sm:max-w-xs text-center text-gray px-2 sm:px-10">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LmcNumbers;
