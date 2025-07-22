import React from "react";
import { assets } from "../../../assets/asset";

const Graphic = () => {
  return (
    <section className="w-full overflow-hidden bg-light  py-1 md:py-10 lg:py-20 xl:py-30">
      <div className="max-w-5xl pt-10 md:pt-0 mx-auto px-4 sm:px-6 md:px-10 text-center">
        <h2 className="text-2xl md:text-[45px] font-bold text-red mb-2">
          Welcome to
        </h2>
        <h1 className="text-3xl md:text-5xl font-bold text-blue mb-6">
          SixthSense Leadership
        </h1>
        <p className="text-base md:text-[20.5px] text-gray font-medium max-w-5xl mx-auto ">
          We are a strategy, human capital development, and consulting company
          empowering leaders to transform organizations for sustainable growth
          through cutting-edge leadership solutions.
        </p>
        <hr className="mt-8 sm:mt-10 md:mt-12 border-[#BEBEBE] border" />
      </div>

      {/* Background Image Block */}
      <div className="md:max-w-[1500px] w-full mx-auto overflow-hidden md:mt-8 mt-5 mb-15 px-2 sm:px-6 md:px-10">
        <div className="w-full relative">
          <img
            src={assets.graphic}
            alt="Empowering Leaders"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Graphic;
