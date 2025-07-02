import React from "react";
import { facultyList } from "../../../assets/asset";

const FacultyList = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-24 bg-light">
      <div className="text-gray max-w-5xl text-justify mx-auto">
        <div className="mb-10 space-y-5 text-lg leading-relaxed">
          <p className="text-base sm:text-lg md:text-[21px]">
            Our faculty is a distinguished team of accomplished professionals,
            industry veterans, and thought leaders with a combined experience of
            over 200 years. With diverse educational backgrounds from leading
            institutions both within and outside the country, our experts are
            well-versed in cutting-edge tools, techniques, and methodologies for
            delivering impactful physical and virtual training programmes.
            <br /> <br />
            They include fellows and certified members of prestigious
            professional bodies such as the Nigerian Institute of Management
            (NIM), Chartered Institute of Personnel Management (CIPM),
            International Council of Management Consulting Institutes (ICMCI),
            Institute of Management Consulting Nigeria (IMC), Chartered
            Institute of Information and Strategy Management (CIISM), and
            Chartered Institute of Directors (IoD), among others. <br /> <br />{" "}
            Our faculty members bring a unique blend of extensive knowledge,
            practical experience, and innovative approaches to every training
            programme. They have collectively designed, implemented, and
            facilitated learning solutions for at least one of the top three
            brands across various sectors, including telecommunications, banking
            and finance, technology, oil and gas, food and agriculture, and
            manufacturing.
            <br />
            <br /> Dedicated to developing talent and driving impactful learning
            experiences, our faculty uses highly interactive methods such as
            expert-led discussions, real-world simulations, case studies, and
            hands-on activities. By drawing on their career experiences and
            current best practices, they ensure participants gain actionable
            insights and the confidence to excel in their roles.
            <br />
            <br />
            With a steadfast commitment to continuous learning, our faculty
            regularly updates content to reflect the latest trends,
            technologies, and methodologies. This ensures our training programs
            remain relevant, forward-thinking, and aligned with the evolving
            demands of today's business environment.
            <br />
            <br /> Our faculty's passion for teaching, commitment to excellence,
            and diverse expertise make them invaluable to our training
            initiatives, guiding leaders toward exceptional results and lasting
            success in their roles.
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
              <p className="mt-4 sm:mt-6 text-sm md:text-base lg:text-[19px] text-deepBlue font-light">
                {member.name}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FacultyList;
