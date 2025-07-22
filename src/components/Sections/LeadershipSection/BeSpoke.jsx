import { Link } from "react-router-dom";
import { assets } from "../../../assets/asset";

const BeSpoke = () => {
  return (
    <section className="bg-white py-10 sm:py-15 px-4 sm:px-6 md:px-10 ">
      <div className="text-gray max-w-5xl mx-auto text-justify md:text-left">
        <h2 className="text-3xl md:text-4xl text-center font-medium text-deepBlue mb-10 sm:mb-12 lg:mb-16">
          BESPOKE EXECUTIVE TRAINING PROGRAMMES
        </h2>

        {/* Class  */}
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-10 mt-10 sm:mt-16 lg:mt-20">
          <div className="w-full lg:w-[40%] flex-shrink-0 flex">
            <img
              src={assets.bespoke}
              alt="BeSpoke Class"
              className="w-full max-w-[700px] sm:max-h-[550px] max-h-[500px] md:max-h-[600px] lg:max-h-none object-cover mx-auto lg:mx-0"
            />
          </div>
          <div className="w-full lg:w-[60%] flex flex-col lg:text-left text-center justify-center">
            <h1 className="text-3xl md:text-4xl font-medium max-w-sm mx-auto lg:m-0  text-deepBlue ">
              Looking for something different? <br />
              <span className="text-3xl md:text-4xl font-medium lg:text-left text-center text-red ">
                We’ve got you!
              </span>
            </h1>

            <p className="sm:mb-10 mb-6 text-base sm:text-lg md:text-xl w-full lg:max-w-[570px] mx-auto lg:mx-0 mt-7">
              We deliver tailored learning experiences to address your
              organization’s specific needs, challenges, and strategic
              objectives. Starting with in-depth diagnostic assessments, we
              design and deploy customized content that drive measurable
              performance improvements, aligning leadership capabilities with
              business goals.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start ">
              <Link
                to="/contact-us#contact"
                className="bg-red text-white uppercase cursor-pointer text-xs sm:text-sm md:text-md px-8 sm:px-10 md:px-12 py-2 sm:py-3 rounded-full font-medium transition duration-300"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeSpoke;
