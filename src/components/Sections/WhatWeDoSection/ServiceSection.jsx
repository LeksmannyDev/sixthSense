import React from "react";
import { Link } from "react-router-dom";
import service1 from "../../../assets/What/service1.webp";
import service2 from "../../../assets/What/service2.webp";
import viewMore from "../../../assets/What/View More.png";
import SectionHeader from "../../shared/SectionHeader";

const services = [
  {
    title: "Leadership Solutions",
    image: service1,
    items: [
      {
        name: "Leadership Development",
        link: "/services/leadership-development",
      },
      { name: "Executive Coaching", link: "/services/executive-training" },
      { name: "Executive Retreat", link: "/services/executive-retreat" },
    ],
  },
  {
    title: "Organizational Transformation",
    image: service2,
    items: [
      { name: "Culture Shift" },
      { name: "Change Management" },
      { name: "Strategic Consulting" },
    ],
  },
];

const ServiceSection = () => {
  return (
    <section className="bg-blue py-16 px-4 sm:px-6 md:px-20">
      <SectionHeader subtitle="Our Services" title="What We Do" />

      <div className="flex flex-wrap justify-center gap-6  lg:gap-x-4 gap-y-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-4xl shadow-md overflow-hidden border-b-[10px] border-[#003366] w-full max-w-[520px]"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-66 sm:h-80 object-cover rounded-4xl"
            />
            <div className="px-4 sm:px-6 md:px-7 py-7 sm:py-9">
              <h3 className="text-2xl sm:text-4xl font-semibold text-deepBlue mb-4 max-w-full sm:max-w-[50%]">
                {service.title}
              </h3>
              <ul className="space-y-5">
                {service.items.map((item, idx) => {
                  const ItemWrapper = item.link ? Link : "div";
                  const wrapperProps = item.link ? { to: item.link } : {};

                  return (
                    <li key={idx}>
                      <ItemWrapper
                        {...wrapperProps}
                        className="flex items-center justify-between border border-[#1F3864] px-4 sm:px-6 md:px-7 py-3 sm:py-4 rounded-[15px] hover:bg-blue-50 transition cursor-pointer"
                      >
                        <span className="text-blue text-base sm:text-[20px] font-medium">
                          {item.name}
                        </span>

                        {item.link && (
                          <span className="text-blue text-sm underline flex items-center gap-1">
                            view more
                            <img
                              src={viewMore}
                              alt="Arrow icon"
                              className="w-4 h-4 inline-block"
                            />
                          </span>
                        )}
                      </ItemWrapper>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
