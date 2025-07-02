import React from "react";
import { eventAsset } from "../EventsSection/eventsAssets";

const Mp3Class = () => {
  return (
    <section className="bg-light py-20 px-4 sm:px-6 lg:px-24">
      <div className="text-gray max-w-5xl text-justify mx-auto">
        {/* Heading */}
        <h1 className="text-3xl md:text-[40px] font-medium text-center text-blue mb-8">
          STRENGTHEN <br /> YOUR MIDDLE!
        </h1>

        {/* Intro Paragraph */}
        <p className="text-base sm:text-lg md:text-[21px]">
          Imagine a fast-growing organization grappling with the pains of
          success. Their strategy was clear, their goals ambitious, yet results
          fell short of expectations. Teams were disengaged, processes were
          riddled with inefficiencies, and performance metrics painted a
          frustrating picture.
          <br />
          <br />
          The issue wasn’t the strategy—it was execution.
          <br />
          <br />
          The middle managers, tasked with translating big-picture visions into
          actionable outcomes, were struggling. Lacking the tools to lead
          effectively, they juggled conflicting priorities, wrestled with siloed
          communication, and faced mounting stress. The result? Missed
          deadlines, frustrated teams, and a growing divide between leadership’s
          vision and reality which hindered further growth.
        </p>

        {/* Image */}
        <div className="flex justify-center py-5 md:py-8 lg:py-10">
          <div className="relative w-full h-full overflow-hidden object-cover">
            <img
              src={eventAsset.mp3Class}
              alt="Leadership Discussion"
              className=""
            />
            <div className="absolute inset-0 bg-black opacity-30"></div>
          </div>
        </div>

        {/* Program Overview Paragraph */}
        <p className="text-base sm:text-lg md:text-[21px]">
          This scenario is all too common. Research shows that middle management
          plays a pivotal role in driving organizational success, yet many are
          under-equipped to navigate the complexities of their roles.
          <br />
          <br /> The{" "}
          <span className="font-semibold">
            MP3 Masterclass: Managing People, Processes, and Performance
          </span>{" "}
          was created to precisely address this challenge. This results-driven
          programme equips middle-level leaders with the frameworks and skills
          to:{" "}
          <li>Build and sustain effective teams that deliver on objectives.</li>
          <li>
            Streamline processes to eliminate inefficiencies and foster
            collaboration.
          </li>
          <li>
            Drive consistent, high-level performance aligned with organizational
            goals.
          </li>
          Through a blend of immersive learning, real-world case studies, and
          actionable tools, participants leave empowered to bridge the gap
          between strategy and execution—turning management challenges into
          measurable successes.
        </p>
      </div>
    </section>
  );
};
export default Mp3Class;
