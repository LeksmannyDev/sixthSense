import React from "react";
import img1 from "../../../assets/Services/R1.png";
import img2 from "../../../assets/Services/R2.webp";
import img3 from "../../../assets/Services/R3.webp";

const GalleryCard = ({ img, index, tall = false }) => {
  const heightClass = tall
    ? "h-[500px] xl:h-[500px]"
    : "h-[300px] xl:h-[240px]";

  return (
    <div className={`relative ${heightClass}`}>
      <div className="absolute top-[8px] left-0 w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-[20px] md:rounded-[15px] lg:rounded-[20px] overflow-hidden z-10">
        <img
          src={img}
          alt={`Leadership session ${index + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

const RetreatPictures = () => {
  return (
    <section className="bg-white pt-10 lg:pb-40 pb-20 px-4 sm:px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        {/* Mobile View */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:hidden">
          {[img1, img2, img3].map((img, index) => (
            <GalleryCard img={img} index={index} key={index} />
          ))}
        </div>

        {/* Desktop View - Centered 3-image layout */}
        <div className="hidden lg:flex justify-center gap-1">
          {/* Left tall image */}
          <div className="flex-[3]">
            <GalleryCard img={img1} index={0} tall />
          </div>

          {/* Right column with two stacked images */}
          <div className="flex-[3] flex flex-col gap-3">
            <GalleryCard img={img2} index={1} />
            <GalleryCard img={img3} index={2} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RetreatPictures;
