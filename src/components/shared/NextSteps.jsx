import React from "react";

const NextSteps = ({ text, buttonLink }) => {
  return (
    <section className="bg-white text-center py-20 sm:py-28 px-4 sm:px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-blue mb-4 uppercase">
          Take Next Steps
        </h2>

        <p className="text-gray text-base sm:text-[20px] md:text-[22px] mb-10 leading-relaxed ">
          {text}
        </p>

        <a
          href={buttonLink}
          target="_blank"
          download
          className="inline-block bg-red text-white uppercase cursor-pointer text-xs sm:text-sm md:text-md px-10 sm:px-14 py-3 sm:py-4 rounded-full font-medium transition duration-300 hover:bg-red-700"
        >
          DOWNLOAD THE BROCHURE
        </a>
      </div>
    </section>
  );
};

export default NextSteps;
