import { useState } from "react";
import phone from "../../../assets/Contact/phone icon.svg";
import envelope from "../../../assets/Contact/gmail icon.svg";
import location from "../../../assets/Contact/location icon.svg";
import globe from "../../../assets/Contact/website icon.svg";
import share from "../../../assets/Contact/Vector-4.svg";
import facebook from "../../../assets/Contact/fb icon.svg";
import twitter from "../../../assets/Contact/twi icon.svg";
import linkedin from "../../../assets/Contact/linkedin.png";
import instagram from "../../../assets/Contact/instagram.png";
import youtube from "../../../assets/Contact/youtube icon.svg";
import { FaPaperPlane, FaCheck, FaExclamationTriangle } from "react-icons/fa";

const ContactForm = () => {
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false });

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "dc1ac2cf-6a33-45f8-a66f-f2f716fa10ef",
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ submitting: false, success: true, error: false });
        e.target.reset();
        setTimeout(
          () => setStatus((prev) => ({ ...prev, success: false })),
          5000
        );
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus({ submitting: false, success: false, error: true });
    }
  };
  return (
    <section id="contact" className="bg-white overflow-x-hidden text-gray">
      <div className="py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 max-w-[90%] sm:max-w-[85%] md:max-w-[80%] mx-auto">
        <div className="flex flex-col items-center justify-center lg:flex-row gap-6 md:gap-8 lg:gap-10">
          {/* LEFT COLUMN */}
          <div className="w-full 2xl:w-[30%] md:w-[100%] sm:w-[100%] space-y-4 md:space-y-6">
            {[
              { img: phone, title: "Phone Number", desc: "+234 708 040 1080" },
              {
                img: envelope,
                title: "Email Address",
                desc: "info@sixthsenseleadership.com",
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
            ].map((item, idx) => {
              let link = "#";
              if (item.title === "Phone Number") link = `tel:${item.desc}`;
              else if (item.title === "Email Address")
                link = `mailto:${item.desc}`;
              else if (item.title === "Website") link = `https://${item.desc}`;
              else if (item.title === "Location")
                link = `https://www.google.com/maps/search/${encodeURIComponent(
                  item.desc
                )}`;

              return (
                <a
                  key={idx}
                  href={link}
                  target={
                    item.title === "Phone Number" ||
                    item.title === "Email Address"
                      ? "_self"
                      : "_blank"
                  }
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="flex items-start gap-4 p-4 sm:p-5 md:p-6 shadow bg-white rounded-md ">
                    <div className="bg-[#6391C21A] rounded-full flex items-center justify-center min-w-[40px] min-h-[40px] sm:min-w-[55px] sm:min-h-[55px]">
                      <img
                        src={item.img}
                        alt={item.title}
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
                </a>
              );
            })}

            <div className="flex items-start gap-4 p-4 sm:p-5 md:p-6 shadow bg-white rounded-md">
              <div className="bg-[#6391C21A] rounded-full flex items-center justify-center min-w-[40px] min-h-[40px] sm:min-w-[55px] sm:min-h-[55px]">
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
                  {[
                    {
                      icon: linkedin,
                      link: "https://www.linkedin.com/company/sixthsense-leadership-consulting-ltd/",
                    },
                    {
                      icon: instagram,
                      link: "https://www.instagram.com/sixthsenseleadership/profilecard/?igsh=MWxlNjFlaHA1NG1rOQ==",
                    },
                    {
                      icon: facebook,
                      link: "https://web.facebook.com/search/top?q=sixth%20sense%20leadership",
                    },

                    {
                      icon: twitter,
                      link: "#",
                    },
                    {
                      icon: youtube,
                      link: "#",
                    },
                  ].map(({ icon, link }, idx) => (
                    <a
                      key={idx}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={icon}
                        alt="social-icon"
                        className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="w-full 2xl:w-[70%] md:w-[100%] sm:w-[100%] p-4 sm:p-5 md:p-6 shadow bg-white rounded-md">
            <h2 className="font-semibold text-[18px] sm:text-[19px] md:text-[20px] mb-2">
              Send Message
            </h2>
            <p className="text-[13px] sm:text-[14px] md:text-[15px] mb-4 ">
              We're here to listen and help you! Whether you have questions,
              ideas, or feedback, your thoughts are important to us. Reach out
              today, and let's start a meaningful conversation!
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-3 sm:space-y-5 py-1"
            >
              <input
                type="hidden"
                name="access_key"
                value="dc1ac2cf-6a33-45f8-a66f-f2f716fa10ef"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-1 ">
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
                    className="resize-none border-[0.5px] overflow-hidden mt-4 sm:mt-5 md:mt-6 rounded-md border-[#a8a8a8] placeholder:text-[14px] sm:placeholder:text-[15px] md:placeholder:text-[16px] placeholder:text-[#0c0c0c] p-4 sm:p-5 w-full"
                  />
                ))}
              </div>
              <textarea
                rows="5"
                placeholder="Subject"
                className="border-[0.5px] rounded-md border-[#a8a8a8] placeholder:text-[14px] sm:placeholder:text-[15px] md:placeholder:text-[16px] placeholder:text-[#0c0c0c] p-4 sm:p-5 w-full min-h-[120px] max-h-[300px] resize-y"
              ></textarea>
              <button
                type="submit"
                disabled={status.submitting}
                className="bg-red text-white uppercase py-2 sm:py-3 px-5 sm:px-6 rounded-full font-medium mt-1 sm:mt-2 cursor-pointer text-sm sm:text-base"
              >
                {status.submitting ? "Sending..." : <>Send Message</>}
              </button>
              {status.success && (
                <div className="flex items-center p-3 text-sm text-white font-medium text-font bg-gradient-blue rounded-2xl md:text-base">
                  <FaCheck className="flex-shrink-0 mr-2" />
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}

              {status.error && (
                <div className="flex items-center p-3 text-sm text-white font-medium text-font bg-red-900 rounded-2xl md:text-base">
                  <FaExclamationTriangle className="flex-shrink-0 mr-2" />
                  Failed to send message. Please try again or email us directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
