import React from "react";

const Mp3Commercial = () => {
  return (
    <section className="bg-light py-20 px-4 sm:px-6 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-blue text-2xl text-center sm:text-3xl md:text-[36px] mb-4 font-medium">
          COMMERCIAL ARRANGEMENT
        </h2>
        <p className="mb-1 tracking-wider  text-base sm:text-xl">
          The investment fee for this premium programme is
          <span className="text-red font-bold"> N250,000</span> per participant,
          covering:
        </p>
        <ul className="list-disc text-base sm:text-xl font-semibold list-inside space-y-2">
          <li>Tuition</li>
          <li>Comprehensive training materials</li>
          <li>Certificates of completion</li>
        </ul>
        <h3 className="mt-6 mb-2 text-blue text-2xl font-medium">
          Special Offers
        </h3>
        <ul className="list-disc text-base sm:text-xl list-inside space-y-3">
          <li>
            Enjoy exclusive discounts for groups of five or more participants.
          </li>
          <li>
            Opt for a tailored in-house delivery of the programme to suit your
            organization's unique needs.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Mp3Commercial;
