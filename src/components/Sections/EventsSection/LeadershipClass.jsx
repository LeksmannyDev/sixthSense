import React from "react";
import { eventAsset } from "./eventsAssets";

const LeadershipClass = () => {
  return (
    <section className="bg-light py-25 px-4 sm:px-6 md:px-10">
      <div className="text-gray max-w-5xl text-justify mx-auto">
        {/* Heading */}
        <h1 className="text-2xl md:text-3xl lg:text-[37px] font-medium text-center text-blue mb-8">
          TURN DISRUPTION INTO <br /> YOUR GREATEST OPPORTUNITY!
        </h1>

        {/* Intro Paragraph */}
        <p className="text-base sm:text-lg md:text-xl">
          In today’s world where change and disruption are constant,
          organizations must adapt or risk falling behind. Rapid advancements in
          technology, evolving business models, shifting policies, and external
          forces continuously reshape industries, challenging leaders to not
          only respond but anticipate and leverage these shifts. The result? A
          critical demand for transformational leaders who can guide their
          organizations through uncertainty and drive meaningful change.
          <br />
          <br />
          Yet research reveals that nearly 70% of organizations struggle with
          transformation due to ineffective leadership (McKinsey & Co.), and a
          Deloitte survey shows only 14% of companies are confident in their
          leaders’ ability to navigate disruption. Addressing this gap, the{" "}
          <span className="text-red font-semibold">
            Transformational Leadership Masterclass
          </span>{" "}
          equips future-ready leaders with the mindset, skillset, and toolset
          essential to catalyze positive transformation across organizations.
        </p>

        {/* Image */}
        <div className="flex justify-center items-center py-5 md:py-8 lg:py-10">
          <div className="relative w-full h-full overflow-hidden  object-cover">
            <img
              src={eventAsset.tlcClass}
              alt="Leadership Discussion"
              className=""
            />
            {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
          </div>
        </div>

        {/* Program Overview Paragraph */}
        <p className="text-base sm:text-lg md:text-xl">
          Led by a high-level faculty of industry captains and seasoned experts,
          this exclusive programme offers an immersive exploration into adaptive
          leadership, strategic thinking, and change management. Through
          real-world case studies, interactive exercises, and thought-provoking
          discussions, participants gain actionable insights and skills that
          directly elevate their leadership impact.
          <br />
          <br />
          Leaders who go through this program will emerge as resilient,
          visionary leaders, ready to inspire innovation and foster a culture of
          change-readiness, creating ripple effects of positive, lasting
          transformation where it’s needed most.
        </p>
      </div>
    </section>
  );
};

export default LeadershipClass;
