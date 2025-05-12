import React from "react";
import { assets } from "../../../assets/asset";

const Executive = () => {
  return (
    <section className="overflow-hidden flex flex-col justify-center items-center bg-light ">
      <h2 className="text-3xl md:text-5xl sm:text-4xl text-center font-medium text-deepBlue md:mb-20 mb-10">
        Executive Open Training Programmes
      </h2>
      <div className="w-[100%] ">
        <div
          role="img"
          aria-label="THE LMC STRATEGIC APPROACH"
          className="w-full  lg:ml-7 ml-3 h-[600px] sm:h-[700px] md:h-[900px] lg:h-[1200px] xl:h-[1400px] 2xl:h-[1500px] flex items-center justify-center bg-center"
          style={{
            backgroundImage: `url(${assets.graphic1})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
    </section>
  );
};

export default Executive;
