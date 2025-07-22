import { Link } from "react-router-dom";
import { executiveProgram } from "../HomeSection/homeAsset";

const Executive = () => {
  return (
    <section className="bg-white py-10 sm:py-12 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 ">
        <h2 className="text-2xl sm:text-3xl md:text-[40px] text-center font-medium text-deepBlue mb-8 sm:mb-12 uppercase">
          Executive Open Training Programmes
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {executiveProgram.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center py-3 transition-transform hover:scale-[1.02]"
            >
              <div className="bg-[#E5E5E5] p-4 sm:p-5 rounded-xl flex items-center justify-center mb-4 w-16 h-16 sm:w-20 sm:h-20">
                <img
                  src={service.icon}
                  alt={`Icon for ${service.title}`}
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
              </div>
              <h3
                className="text-lg sm:text-xl font-semibold text-gray mb-2"
                dangerouslySetInnerHTML={{
                  __html: service.title.replace(/\n/g, "<br />"),
                }}
              ></h3>
              <p className="text-sm sm:text-[15px] md:text-[17px] text-gray px-2 sm:px-4">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-center  mt-14">
          <Link
            to="/contact-us"
            className="bg-red text-white uppercase cursor-pointer text-xs sm:text-sm md:text-md px-8 sm:px-10 md:px-12 py-2 sm:py-3 rounded-full font-medium transition duration-300"
          >
            Apply Now
          </Link>
        </div>
        <hr className="mt-15 sm:mt-18 md:mt-25 border-[#BEBEBE] border " />
      </div>
    </section>
  );
};

export default Executive;
