import React from "react";
import img1 from "../../../assets/Services/1.jpg";
import img2 from "../../../assets/Services/2.jpg";
import img3 from "../../../assets/Services/3.jpg";
import img4 from "../../../assets/Services/4.jpg";

const GalleryCard = ({ img, index, tall = false }) => {
  const heightClass = tall
    ? "h-[400px] xl:h-[500px]"
    : "h-[220px] xl:h-[240px]";

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

const TrainingImage = () => {
  return (
    <section className="bg-light pt-10 lg:pb-40 pb-20 px-4 sm:px-6 md:px-10">
      <div className="max-w-5xl mx-auto items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:hidden">
          {[img1, img2, img3, img4].map((img, index) => (
            <GalleryCard img={img} index={index} key={index} />
          ))}
        </div>

        {/* Desktop View  */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-3 ">
          {/* Left Image (Image 1) */}
          <div className="relative h-[400px] xl:h-[500px]">
            <GalleryCard img={img1} index={0} tall />
          </div>

          <div className="col-span-2 flex flex-col gap-3">
            <GalleryCard img={img2} index={1} />
            <GalleryCard img={img3} index={2} />
          </div>

          <div className="relative h-[400px] xl:h-[500px]">
            <GalleryCard img={img4} index={3} tall />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingImage;
