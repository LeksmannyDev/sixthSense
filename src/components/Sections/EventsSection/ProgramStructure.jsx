import React from "react";
import { modules } from "./eventsAssets";

const ProgramStructure = () => {
  return (
    <section className="bg-light py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-[40px] font-medium text-blue mb-4 text-center">
          Programme Structure
        </h2>
        <p className="text-center text-gray text-xl w-full lg:max-w-5xl mx-auto mb-12">
          The programme is divided into key modules, each focusing on a critical
          aspect of leadership and transformation.
        </p>

        <div className="space-y-20">
          {modules.map((module, index) => {
            const isOdd = index % 2 === 0;

            return (
              <div
                key={module.id}
                className="relative flex flex-col md:flex-row items-center justify-between gap-6"
              >
                {/* Left side (Even modules only) */}
                <div
                  className={`w-full md:w-5/12 text-justify ${
                    isOdd ? "order-2" : "order-2 md:order-1"
                  }`}
                >
                  {!isOdd && (
                    <div className="text-right w-full">
                      <h3 className="text-2xl ml-6 lg:max-w-full mx-auto font-medium text-blue mb-3">
                        {module.title}
                      </h3>
                      <ul className="list-disc space-y-2 text-gray text-right">
                        {module.points.map((point, i) => (
                          <li key={i} className="ml-auto w-fit">
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Module Label */}
                <div className="w-full md:w-2/12 flex justify-center items-center order-1 md:order-2 my-1 md:my-0">
                  <div className="text-red font-bold px-4 uppercase py-2 rounded-full text-xl text-center">
                    Module {module.id}
                  </div>
                </div>

                {/* Right side (Odd modules only) */}
                <div
                  className={`w-full md:w-5/12 ${
                    isOdd ? "order-3" : "order-3 md:order-3"
                  }`}
                >
                  {isOdd && (
                    <div className="text-left">
                      <h3 className="text-2xl mr-6 lg:max-w-[75%] font-medium text-blue mb-3">
                        {module.title}
                      </h3>
                      <ul className="list-disc pl-5 space-y-2 max-w-[400px] text-gray text-left">
                        {module.points.map((point, i) => (
                          <li key={i} className="mr-auto w-fit">
                            {point}
                          </li>
                        ))}
                      </ul>
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

export default ProgramStructure;
