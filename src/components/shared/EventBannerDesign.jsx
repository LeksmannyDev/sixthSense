import React from "react";

const EventBannerDesign = ({ image, title, text }) => {
  return (
    <section className="relative w-full h-[350px] sm:h-[450px] lg:h-[500px] xl:h-[450px] overflow-hidden">
      <div className="relative w-full h-full overflow-hidden">
        <img
          src={image}
          alt="banner"
          className="w-full h-[650px] object-cover"
        />
      </div>

      {/* Dark overlay with subtle transition */}
      <div className="absolute inset-0 bg-[#000000B2] opacity-100"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-left text-white px-4 mx-auto w-full max-w-6xl">
        <div className="font-medium text-2xl sm:text-3xl md:text-[40px] text-red transform transition-transform duration-700 hover:scale-105">
          <h2>{title}</h2>
        </div>

        <p className="text-sm sm:text-[24px] mt-3 sm:mt-5 text-light mb-4 sm:mb-6 ">
          {text}
        </p>
      </div>
    </section>
  );
};

export default EventBannerDesign;
