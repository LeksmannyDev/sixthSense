import React from "react";

const Commercial = () => {
  return (
    <section className="bg-light py-20 px-4 sm:px-6 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-blue text-2xl text-center sm:text-3xl md:text-[36px] mb-4 font-medium">
          COMMERCIAL ARRANGEMENT
        </h2>
        <p className="mb-4 tracking-wide text-base sm:text-xl">
          The investment fee for this premium Coaching Programme is
          <span className="text-red font-bold"> N5,000,000</span> only. This
          covers:
        </p>
        <ul className="list-disc text-base sm:text-xl tracking-wide list-inside space-y-2">
          <li>
            <strong>Programme Design:</strong> Tailored coaching frameworks to
            meet your team’s unique needs
          </li>
          <li>
            <strong>Bespoke Content Curation:</strong> Customized materials
            designed to drive impactful learning and application
          </li>
          <li>
            <strong>Advisory Time Exchange:</strong> Dedicated coaching sessions
            with expert facilitators
          </li>
          <li>
            <strong>Facilitation and Correspondence:</strong> Seamless support
            and professional delivery throughout the Programme
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Commercial;
