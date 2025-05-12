import React from "react";
import img1 from "../../../assets/Events/gal1.jpg";
import img2 from "../../../assets/Events/gal2.jpg";
import img3 from "../../../assets/Events/gal3.jpg";
import img4 from "../../../assets/Events/gal4.jpg";
const GalleryCard = ({ img, index, tall = false }) => {
  const heightClass = tall
    ? "h-[400px] xl:h-[500px]"
    : "h-[190px] xl:h-[240px]";

  return (
    <div className={`relative ${heightClass}`}>
      <div className="absolute inset-0 ml-2 border-t-[8px] border-r-[8px] h-[calc(100%-8px)] w-[calc(100%-8px)] border-[#003366] rounded-[20px] md:rounded-[30px] lg:rounded-[50px] z-0" />
      <div className="absolute top-[8px] left-0 w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-[20px] md:rounded-[30px] lg:rounded-[50px] overflow-hidden z-10">
        <img
          src={img}
          alt={`Leadership session ${index + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
const GallerySection = ({ title }) => {
  return (
    <section className="bg-light pt-10 px-4 sm:px-8 sm:pb-35 pb-20 lg:px-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl mt-0 font-medium text-center text-blue mb-5 sm:mb-10">
        {title}
      </h2>

      {/* (2-column grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden">
        {[img1, img2, img3, img4].map((img, index) => (
          <GalleryCard img={img} index={index} key={index} />
        ))}
      </div>

      {/* Desktop View  */}
      <div className="hidden lg:grid lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {/* Left Image (Image 1) */}
        <div className="relative h-[400px] xl:h-[500px]">
          <GalleryCard img={img1} index={0} tall />
        </div>

        <div className="col-span-2 flex flex-col gap-8">
          <GalleryCard img={img2} index={1} />
          <GalleryCard img={img3} index={2} />
        </div>

        <div className="relative h-[400px] xl:h-[500px]">
          <GalleryCard img={img4} index={3} tall />
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
