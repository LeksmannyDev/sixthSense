import React from "react";
import { assets } from "../../../assets/asset";

const Graphic2 = () => {
  return (
    <section className="overflow-hidden flex justify-center items-center bg-light py-5">
      <div className="w-[100%] ">
        <div
          role="img"
          aria-label="Our Values"
          className="w-full  lg:ml-5 ml-2 h-[400px] sm:h-[450px] md:h-[550px] lg:h-[750px] xl:h-[900px] 2xl:h-[1150px] flex items-center justify-center bg-center"
          style={{
            backgroundImage: `url(${assets.graphic2})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
    </section>
  );
};

export default Graphic2;
