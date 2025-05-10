import React from "react";
import { assets } from "../../../assets/asset";

const Graphic = () => {
  return (
    <section className="w-full overflow-hidden bg-light px-4 py-1 md:py-10 lg:py-20 xl:py-30">
      <div
        role="img"
        aria-label="Empowering Leaders"
        className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[920px] flex items-center justify-center bg-cover bg-center rounded-md"
        style={{ backgroundImage: `url(${assets.graphic})` }}
      />
    </section>
  );
};

export default Graphic;
