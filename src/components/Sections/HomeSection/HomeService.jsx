import React from "react";
import SectionHeader from "../../shared/SectionHeader";
import { services } from "./homeAsset";

const HomeService = () => {
  return (
    <section className="bg-[#E2EDFF] py-16 xl:h-270 h-full px-4 sm:px-6 md:px-10">
      <SectionHeader subtitle="Our Services" title="What We Do" />

      <div className="flex flex-wrap justify-center gap-6 sm:gap-x-1 md:gap-x-5 lg:gap-x-9 gap-y-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-4xl shadow-md overflow-hidden w-full md:max-w-[450px] border-b-[8px] border-[#003366]"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-64 object-cover rounded-4xl"
            />
            <div className="sm:px-20 px-10 py-8 mx-auto">
              <h3 className="text-2xl sm:text-3xl font-bold text-deepBlue mb-5 max-w-full sm:max-w-[50%]">
                {service.title}
              </h3>
              <ul className="space-y-8 sm:space-y-7">
                {service.items.map((item, idx) => (
                  <li key={idx}>
                    <div className="flex items-center gap-3">
                      {/* Icon */}
                      <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-[#D9D9D9] flex items-center justify-center">
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="w-6 h-6 object-contain"
                        />
                      </div>

                      {/* Text */}
                      <h4 className="md:text-xl text-lg font-semibold text-gray max-w-full sm:max-w-[60%]">
                        {item.name}
                      </h4>
                    </div>

                    <p className="md:text-[18px] text-base font-normal text-gray text-left  mt-2 ">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeService;
