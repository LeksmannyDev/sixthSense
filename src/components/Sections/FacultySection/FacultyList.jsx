import React from "react";
import { facultyList } from "../../../assets/asset";

const FacultyList = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-24 bg-light">
      <div className="text-gray max-w-5xl text-justify mx-auto">
        <div className="mb-10 space-y-5 text-lg leading-relaxed">
          <p className="text-base sm:text-lg md:text-[19.5px]">
            Our faculty comprises a distinguished group of accomplished
            professionals, industry veterans, and certified experts with a
            combined experience of over 200 years. Educated at leading
            institutions within and outside the country, they bring deep
            subject-matter expertise and a solid grasp of contemporary
            leadership and management practices. Many are fellows and members of
            respected professional bodies, including the Nigerian Institute of
            Management (NIM), Chartered Institute of Personnel Management
            (CIPM), International Council of Management Consulting Institutes
            (ICMCI), and the Institute of Directors (IoD). Collectively, they
            have delivered high-impact training for top organisations across
            sectors such as banking, telecommunications, oil and gas,
            technology, and agribusiness.
            <br /> <br />A distinguishing factor of our faculty is their ability
            to translate experience into practical, results-oriented learning.
            Each programme is built around proven methodologies, real-world case
            studies, and interactive sessions designed to engage participants
            and drive performance. Their commitment to continuous learning
            ensures that course content reflects current trends, emerging tools,
            and evolving business needs. With a shared passion for excellence,
            they consistently equip leaders at all levels with the insight,
            skills, and confidence to navigate complexity and deliver meaningful
            outcomes.
          </p>
        </div>

        <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 sm:gap-6 gap-y-10 sm:gap-y-16">
          {facultyList.map((member, index) => (
            <a
              key={index}
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center w-full mx-auto text-center "
            >
              <div className="w-full">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full"
                />
              </div>
              <p className="mt-4 sm:mt-6 text-sm md:text-base lg:text-[19px] text-deepBlue">
                <span className="font-medium">
                  {member.name.replace(/ MCloD, FIMC, CMC$/, "")}
                </span>
                {member.name.includes("MCloD, FIMC, CMC") && (
                  <span className="font-normal"> MCloD, FIMC, CMC</span>
                )}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FacultyList;
