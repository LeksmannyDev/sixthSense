// import { assets } from "../../assets/assets";

import { assets } from "../../assets/asset";

const Footer = () => {
  return (
    <footer className="text-white">
      {/* Newsletter */}
      <div className="bg-gradient-blue w-full text-font px-6 sm:px-10 lg:px-20 py-12 lg:py-20 flex flex-col lg:flex-row items-center justify-center gap-6 gap-x-60">
        {/* Left Side - Subscribe Text */}
        <div className="flex items-center gap-3 text-white w-full lg:w-auto justify-center lg:justify-start">
          <img src={assets.mail} alt="Mail icon" className="h-10 w-10" />
          <span className="font-medium text-sm mt-1 sm:text-[20px]">
            SUBSCRIBE TO NEWSLETTER
          </span>
        </div>

        {/* Right Side - Input and Button */}
        <div className="flex w-full max-w-md lg:max-w-xl h-13  rounded-full overflow-hidden bg-white">
          <input
            type="email"
            placeholder="YOUR EMAIL ADDRESS"
            className="flex-1 px-5 text-xs sm:text-sm text-[#1F3864] placeholder:text-md text-font font-medium focus:outline-none placeholder-[#1F3864]"
          />
          <button className="bg-red px-4 sm:px-6 text-xs sm:text-sm text-white font-semibold ">
            GET STARTED
          </button>
        </div>
      </div>

      {/* Contact Info */}
      <div className="w-full bg-[#333333] mx-auto px-6 sm:px-10 lg:px-20 py-10 md:py-20 text-center">
        {/* Heading */}
        <h4 className="text-green font-bold text-2xl sm:text-3xl text-red md:text-4xl uppercase mb-2">
          Our Contact
        </h4>
        <h2 className="text-3xl sm:text-5xl md:text-6xl text-font mt-4 font-medium mb-8">
          How to Reach Us
        </h2>

        {/* Contact Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-20 xl:gap-[250px] mb-10 md:mb-20">
          {/* Left - Contact Details */}
          <div className="text-sm sm:text-base text-[#E0F7FA] space-y-4 sm:space-y-5 text-left max-w-md">
            <p>Brownstone Estate, Lekki, Lagos</p>
            <p>+234 708 040 1080</p>
            <p>www.sixthsenseleadership.com</p>
            <p>sixthsenseleadership@gmail.com</p>
          </div>

          {/* Right - Image */}
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80">
            {/* Border box behind the image */}
            <div className="absolute inset-0 mt-3 border-b-10 border-r-10 border-[#1F3864] rounded-3xl sm:rounded-[50px] md:rounded-[60px] z-0" />

            {/* Image slightly shifted to reveal bottom/right borders */}
            <div className="absolute top-0 left-0 w-[98%] h-[98%] rounded-3xl sm:rounded-[50px] md:rounded-[60px] overflow-hidden z-10">
              <img
                src={assets.contact}
                alt="Contact"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
