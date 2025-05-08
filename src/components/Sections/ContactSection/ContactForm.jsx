import React from "react";
import phone from "../../../assets/Contact/phone icon.png";
import envelope from "../../../assets/Contact/gmail icon.png";
import location from "../../../assets/Contact/location icon.png";
import globe from "../../../assets/Contact/website icon.png";
import share from "../../../assets/Contact/Vector-4.png";
import facebook from "../../../assets/Contact/fb icon.png";
import pinterest from "../../../assets/Contact/pin icon.png";
import twitter from "../../../assets/Contact/twi icon.png";
import youtube from "../../../assets/Contact/youtube icon.png";

const ContactForm = () => {
  return (
    <section id="contact" className="bg-white text-gray">
      <div className="py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 max-w-[90%] sm:max-w-[85%] md:max-w-[80%] mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10">
          {/* LEFT COLUMN */}
          <div className="w-full 2xl:w-[30%] md:w-[100%] sm:w-[100%] space-y-4 md:space-y-6">
            {[
              { img: phone, title: "Phone Number", desc: "+234 708 040 1080" },
              {
                img: envelope,
                title: "Email Address",
                desc: "sixthsenseleadership@gmail.com",
              },
              {
                img: location,
                title: "Location",
                desc: "Brownstone Estate, Lekki, Lagos",
              },
              {
                img: globe,
                title: "Website",
                desc: "www.sixthsenseleadership.com",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 sm:p-5 md:p-6 shadow bg-white rounded-md"
              >
                <div className="bg-[#6391C21A] rounded-full flex items-center justify-center min-w-[40px] min-h-[40px] sm:min-w-[48px] sm:min-h-[48px]">
                  <img
                    src={item.img}
                    alt=""
                    className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                  />
                </div>
                <div className="mt-1">
                  <h3 className="font-semibold text-[15px] sm:text-[16px] md:text-[17px] text-gray">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm max-w-xs mx-auto text-gray">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

            <div className="flex items-start gap-4 p-4 sm:p-5 md:p-6 shadow bg-white rounded-md">
              <div className="bg-[#6391C21A] rounded-full flex items-center justify-center min-w-[40px] min-h-[40px] sm:min-w-[48px] sm:min-h-[48px]">
                <img
                  src={share}
                  alt=""
                  className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                />
              </div>
              <div>
                <h3 className="font-semibold text-[15px] sm:text-[16px] md:text-[17px] text-gray mb-2">
                  Social Media
                </h3>
                <div className="flex gap-3 sm:gap-4">
                  {[facebook, pinterest, twitter, youtube].map((icon, idx) => (
                    <img
                      key={idx}
                      src={icon}
                      alt=""
                      className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="w-full 2xl:w-[70%]  md:w-[100%]  sm:w-[100%] p-4 sm:p-5 md:p-6 shadow bg-white rounded-md">
            <h2 className="font-semibold text-[18px] sm:text-[19px] md:text-[20px] mb-2">
              Send Message
            </h2>
            <p className="text-[13px] sm:text-[14px] md:text-[15px] mb-4 sm:mb-5 md:mb-6">
              We're here to listen and help you! Whether you have questions,
              ideas, or feedback, your thoughts are important to us. Reach out
              today, and let's start a meaningful conversation!
            </p>

            <form className="space-y-3 sm:space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                {[
                  { name: "name", placeholder: "Your Name" },
                  {
                    name: "email",
                    placeholder: "Email Address",
                    type: "email",
                  },
                  { name: "phone", placeholder: "Phone Number", type: "tel" },
                  { name: "subject", placeholder: "Subject" },
                ].map(({ name, placeholder, type = "text" }, idx) => (
                  <input
                    key={idx}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    required
                    className="border-[0.5px] rounded-md border-[#a8a8a8] placeholder:text-font placeholder:text-[14px] sm:placeholder:text-[15px] md:placeholder:text-[16px] placeholder:text-[#0c0c0c] p-3 sm:p-4 w-full"
                  />
                ))}
              </div>
              <textarea
                rows="5"
                placeholder="Subject"
                className="border-[0.5px] overflow-hidden mt-4 sm:mt-5 md:mt-6 rounded-md border-[#a8a8a8] placeholder:text-font placeholder:text-[14px] sm:placeholder:text-[15px] md:placeholder:text-[16px] placeholder:text-[#0c0c0c] p-4 sm:p-5 w-full"
              ></textarea>
              <button
                type="submit"
                className="bg-red-600 text-white py-2 sm:py-3 px-5 sm:px-6 rounded-full font-medium mt-1 sm:mt-2 hover:bg-red-700 transition text-sm sm:text-base"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
