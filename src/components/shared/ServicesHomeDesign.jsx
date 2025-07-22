const ServicesHomeDesign = ({ title, backgroundImage }) => {
  return (
    <div className="relative w-full ">
      <img
        src={backgroundImage}
        alt="background"
        className="w-full h-[550px] md:h-[600px] lg:h-auto object-cover"
      />
      <div className="absolute inset-0 bg-[#003366CC] flex items-center justify-center">
        <div className="max-w-6xl mx-auto text-center px-2">
          <h1 className="text-3xl sm:text-5xl md:text-6xl uppercase text-white font-medium">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ServicesHomeDesign;
