import React from "react";
import SectionHeader from "../../shared/SectionHeader";
import { services } from "./homeAsset";

const HomeService = () => {
  return (
    <section className="bg-blue py-16 px-4 xl:h-250 h-full sm:px-6 md:px-20">
      <SectionHeader subtitle="Our Services" title="What We Do" />

      <div className="flex flex-wrap justify-center gap-6 sm:gap-x-1 md:gap-x-5 lg:gap-x-4 gap-y-5">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-4xl shadow-md overflow-hidden w-full max-w-[420px] border-b-[8px] border-[#003366]"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-64 object-cover rounded-4xl"
            />
            <div className="p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-deepBlue mb-4 max-w-full sm:max-w-[50%]">
                {service.title}
              </h3>
              <ul className="space-y-1 sm:space-y-7">
                {service.items.map((item, idx) => (
                  <li key={idx}>
                    <div className="flex items-start gap-1">
                      <div className="w-10 h-10 flex-shrink-0 rounded-full flex items-center justify-center">
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <h4 className="text-xl font-semibold text-gray mt-1.5">
                        {item.name}
                      </h4>
                    </div>
                    <p className="text-md text-gray  mt-1 max-w-xs pl-1">
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
