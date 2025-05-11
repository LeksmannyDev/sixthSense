import React from "react";
import { courseModules } from "../EventsSection/eventsAssets";

const CourseContent = () => {
  return (
    <section className="bg-light py-1 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-[40px] font-medium text-blue mb-5 text-center">
          Course Content Outline
        </h2>
        <div className="lg:space-y-20 space-y-10">
          {courseModules.map((module, index) => {
            const isOdd = index % 2 === 0;

            return (
              <div
                key={module.id}
                className="relative flex flex-col md:flex-row items-center  justify-between gap-y-4 gap-6"
              >
                {/* Left Side */}
                <div
                  className={`w-full md:w-5/12 text-justify ${
                    isOdd ? "order-2" : "order-2 md:order-1"
                  }`}
                >
                  {!isOdd && (
                    <div className="text-right w-full">
                      {module.points.map((point, i) => (
                        <div key={i} className="mb-4">
                          <h4 className="text-2xl ml-6 lg:max-w-full mx-auto font-medium text-blue mb-3">
                            {point}
                          </h4>
                          <ul className="list-disc space-y-2 text-gray text-right">
                            {module.details[i].map((detail, j) => (
                              <li key={j} className="ml-auto w-fit">
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Module Label*/}
                <div className="w-full md:max-w-xs flex flex-col items-center text-center order-1 md:order-2 my-1 md:my-0">
                  <div className="text-red font-bold px-4 py-1 sm:py-2  text-lg sm:text-xl whitespace-nowrap">
                    Module {module.id}
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-[40px] max-w-50 font-medium text-blue">
                    {module.title}
                  </h3>
                </div>

                {/* Right Side - Desktop position maintained exactly */}
                <div
                  className={`w-full  md:w-5/12 ${
                    isOdd ? "order-3" : "order-3 md:order-3"
                  }`}
                >
                  {isOdd && (
                    <div className="text-left">
                      {module.points.map((point, i) => (
                        <div key={i} className="mb-4">
                          <h4 className="text-2xl mr-6 lg:max-w-[75%] font-medium text-blue mb-3">
                            {point}
                          </h4>
                          <ul className="list-disc pl-5 space-y-2 max-w-[400px] text-gray text-left">
                            {module.details[i].map((detail, j) => (
                              <li key={j} className="mr-auto w-fit">
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CourseContent;
