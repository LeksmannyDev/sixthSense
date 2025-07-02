import React from "react";

const modules = [
  {
    module: "Managing People",
    description:
      "Align team efforts with organizational strategy and motivating individuals for high performance",
    topics: [
      "Leadership Styles",
      "Motivating Teams",
      "Building Trust and Influence",
      "Managing Conflict",
    ],
    tools: "Leadership Frameworks, Role Play, Case Studies",
    time: "3 Hours",
  },
  {
    module: "Managing Process",
    description:
      "Understand how to optimize and streamline operations to ensure efficiency and alignment with strategy",
    topics: [
      "Process Optimization",
      "Workflow Efficiency",
      "Risk Management",
      "Tools for Continuous Improvement",
    ],
    tools: "Process Mapping, Creative Visuals, Scenario Analysis",
    time: "3 Hours",
  },
  {
    module: "Managing Performance",
    description:
      "Develop strategies for setting measurable goals, monitoring progress, and creating a performance-driven culture",
    topics: [
      "Goal Setting & Alignment",
      "Performance Metrics",
      "Feedback Mechanisms",
      "Performance Reviews",
    ],
    tools: "Performance Metrics, Group Exercises, Feedback Loops",
    time: "3 Hours",
  },
  {
    module: "Programme Review",
    description:
      "Reflect on learning outcomes, addresses any questions, and sets next steps for applying skills in the workplace",
    topics: ["Key Takeaways", "Action Plan Development", "Q&A Session"],
    tools: "Group Discussion, Feedback Survey, Action Plan Template",
    time: "1 Hour",
  },
];

const ModuleTable = () => {
  return (
    <div className="bg-light lg:py-25 py-16 px-4 sm:px-8 lg:px-16">
      <h2 className="text-3xl font-bold text-center text-blue mb-8">
        Module Overview
      </h2>
      <div className="max-w-7xl mx-auto">
        {/* Desktop Table (original) */}
        <div className="hidden md:block">
          <table className="w-full table-fixed border-separate border-spacing-y-3 border-spacing-x-1">
            <thead>
              <tr>
                <th className="bg-[#3333331A] p-3 lg:w-[18%] w-full border text-center lg:text-[22px] text-[19px] text-blue font-bold">
                  Module
                </th>
                <th className="bg-[#3333331A] p-3 lg:w-[35%] w-full border text-center lg:text-[22px] text-[19px] text-blue font-bold">
                  Description
                </th>
                <th className="bg-[#3333331A] p-3 lg:w-[28%] w-full border text-center lg:text-[22px] text-[19px] text-blue font-bold">
                  Topics Covered
                </th>
                <th className="bg-[#3333331A] p-3 lg:w-[19%] w-full border text-center lg:text-[22px] text-[19px] text-blue font-bold">
                  Key Tools
                </th>
                <th className="bg-[#3333331A] p-3 lg:w-[18%] w-full border text-center lg:text-[22px] text-[19px] text-blue font-bold">
                  Time Allocated
                </th>
              </tr>
            </thead>
            <tbody>
              {modules.map((mod, idx) => (
                <tr key={idx}>
                  <td className="bg-white p-2 xl:text-[22px] text-[19px] border text-center border-[#333] font-bold text-blue">
                    {mod.module}
                  </td>
                  <td className="bg-white p-4 border lg:text-center text-left border-[#333] text-gray">
                    {mod.description}
                  </td>
                  <td className="bg-white p-7 border border-[#333] text-gray">
                    <ul className="list-disc list-inside space-y-1">
                      {mod.topics.map((topic, i) => (
                        <li key={i}>{topic}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="bg-white p-4 border border-[#333] lg:text-center text-left text-gray">
                    {mod.tools}
                  </td>
                  <td className="bg-white p-4 border border-[#333] font-bold text-center text-red">
                    {mod.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-9">
          {modules.map((mod, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg border border-[#333] p-4"
            >
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="bg-[#3333331A] p-2 border border-[#333] text-center text-lg text-blue font-bold">
                  Module
                </div>
                <div className="bg-white p-2 border border-[#333] text-center font-bold text-blue">
                  {mod.module}
                </div>

                <div className="bg-[#3333331A] p-2 border border-[#333] text-center text-lg text-blue font-bold">
                  Time
                </div>
                <div className="bg-white p-2 border border-[#333] text-center font-bold text-red">
                  {mod.time}
                </div>
              </div>

              <div className="mb-3">
                <div className="bg-[#3333331A] p-2 border border-[#333] text-center text-lg text-blue font-bold mb-2">
                  Description
                </div>
                <div className="bg-white p-2 border border-[#333] text-gray">
                  {mod.description}
                </div>
              </div>

              <div className="mb-3">
                <div className="bg-[#3333331A] p-2 border border-[#333] text-center text-lg text-blue font-bold mb-2">
                  Topics Covered
                </div>
                <ul className="list-disc list-inside space-y-1 bg-white p-2 border border-[#333] text-gray">
                  {mod.topics.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="bg-[#3333331A] p-2 border border-[#333] text-center text-lg text-blue font-bold mb-2">
                  Key Tools
                </div>
                <div className="bg-white p-2 border border-[#333] text-center text-gray">
                  {mod.tools}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModuleTable;
