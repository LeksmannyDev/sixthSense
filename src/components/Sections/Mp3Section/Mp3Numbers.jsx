import React from "react";

const Mp3Numbers = () => {
  const stats = [
    {
      number: "70%",
      description:
        "70% of employees’ engagement is influenced by their direct manager (Gallup, 2020)",
    },
    {
      number: "70%",
      description:
        "70% of change initiatives fail due to ineffective leadership at the middle management level (McKinsey, 2015)",
    },
    {
      number: "25%",
      description:
        "High-performing middle managers can drive 25% better productivity in teams (Harvard Business Review, 2018)",
    },
    {
      number: "30%",
      description:
        "Organizations with effective middle managers report 30% higher profitability (Gallup, 2019)",
    },
    {
      number: "80%",
      description:
        "80% of organizations report a lack of strong middle management leadership (Deloitte, 2020)",
    },
    {
      number: "60%",
      description:
        "60% of managers feel unprepared for leadership roles (Bridgespan Group, 2019)",
    },
    {
      number: "68%",
      description:
        "68% of middle managers are responsible for driving operational efficiency (Harvard Business Review, 2020)",
    },
    {
      number: "47%",
      description:
        "47% higher chance of project success when middle managers lead effectively (Project Management Institute, 2021)",
    },
    {
      number: "50%",
      description:
        "50% of employees stay because of effective middle management leadership (LinkedIn, 2021)",
    },
  ];

  return (
    <div className="bg-light sm:py-30 py-16 px-4 text-center">
      <h2 className="text-2xl md:text-[40px] font-medium text-blue mb-10">
        What the Numbers Say?
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`px-4 py-10 sm:py-10 md:py-12 rounded-[50px] ${
              index % 2 === 1 ? "bg-[#FFFFFF]" : "bg-[#FF66001A]"
            }`}
          >
            <h3 className="text-4xl sm:text-6xl font-black text-blue my-3">
              {stat.number}
            </h3>
            <p className="text-[14px] mx-auto sm:max-w-2xs text-center text-gray px-2 sm:px-0">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mp3Numbers;
