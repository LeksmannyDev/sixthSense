import React from "react";
import { eventAsset } from "../EventsSection/eventsAssets";

const LmcClass = () => {
  return (
    <section className="bg-light py-20  px-4 sm:px-6 md:px-10">
      <div className="text-gray max-w-5xl text-justify mx-auto">
        {/* Heading */}
        <h1 className="text-3xl md:text-3xl lg:text-[37px] font-medium text-center text-blue mb-8">
          TAKE OFF THE LID <br /> IN YOUR LEADERSHIP!
        </h1>

        {/* Intro Paragraph */}
        <p className="text-base sm:text-lg md:text-xl">
          In today’s high-stakes business environment, the effectiveness of
          leadership defines the success of organizations. As businesses
          confront unprecedented challenges, from volatile markets to the demand
          for innovation, the way leadership responds directly impacts outcomes.
          <br />
          <br />
          Yet, research consistently highlights a troubling gap: most leaders
          lack the structured support and tools to transform potential into
          exceptional performance. Organizations often invest heavily in
          technology, processes, and strategy; however, leadership, which is the
          most critical driver of success, often remains underdeveloped.
        </p>

        {/* Image */}
        <div className="flex justify-center py-5 md:py-8 lg:py-10">
          <div className="relative w-full h-full overflow-hidden object-cover">
            <img
              src={eventAsset.lmcClass}
              alt="Leadership Discussion"
              className=""
            />
            {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
          </div>
        </div>

        {/* Program Overview Paragraph */}
        <p className="text-base sm:text-lg md:text-xl">
          The most exceptional performers, whether in business, sports, or the
          arts, credit expert coaching as their secret sauce. They rely on it to
          refine their skills, overcome blind spots, and achieve breakthrough
          results. Leadership is no exception. Professional coaching can turn
          reactive tendencies in leaders into proactive strategies and catalyse
          sustained growth for individuals and teams alike. <br />
          <br /> The{" "}
          <span className="text-red font-semibold">
            Leadership Mastery Circle (LMC)
          </span>{" "}
          bridges this gap, offering a premium, subscription-based coaching
          programme designed exclusively for executive teams seeking to elevate
          their collective leadership impact. By addressing performance
          challenges, fostering synergy, and equipping leaders with actionable
          strategies, LMC transforms teams into cohesive, high-performing units.{" "}
          <br />
          <br /> For organizations, this helps to drive measurable results and
          create a lasting competitive advantage. With the Leadership Mastery
          Circle, you are not just investing in leadership but also optimizing
          the potential of your organization for the present and the future.
        </p>
      </div>
    </section>
  );
};
export default LmcClass;
