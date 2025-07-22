import React, { useState } from "react";
import { assets } from "../../assets/asset";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxEfYJSVZjVi-jy-VD0u-m_p-DcRXcJEPeRXy5WbT5Ou6BjDQFTrvtmkh5vU6tfcbjw/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            timestamp: new Date().toISOString(),
            // source: "website",
          }),
        }
      );

      setMessage("Successfully subscribed to newsletter!");
      setEmail("");
    } catch (error) {
      console.error("Subscription error:", error);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-blue w-full px-4 sm:px-10 lg:px-10 py-12 lg:py-20 flex flex-col items-center ">
      {/* Row: Icon + Form with horizontal gap on desktop */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-x-30 xl:gap-x-60">
        {/* Title + Icon */}
        <div className="flex items-center gap-1 text-white justify-center">
          <img src={assets.mail} alt="Mail icon" className="h-10 w-10" />
          <span className="font-medium text-sm sm:text-base md:text-lg mt-1 text-center">
            SUBSCRIBE TO NEWSLETTER
          </span>
        </div>

        {/* Newsletter Form */}
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-full sm:max-w-md lg:max-w-xl h-13 rounded-full overflow-hidden bg-white"
        >
          <input
            type="email"
            name="CONTACT_EMAIL"
            placeholder="YOUR EMAIL ADDRESS"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 sm:px-5 text-sm sm:text-base text-[#1F3864] placeholder:text-sm font-medium focus:outline-none placeholder-[#1F3864]"
            disabled={isSubmitting}
          />
          <button
            type="submit"
            className="bg-red px-3 sm:px-6 text-xs sm:text-sm text-white cursor-pointer font-semibold whitespace-nowrap"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Subscribing..." : "GET STARTED"}
          </button>
        </form>
      </div>

      {/* Message under the form */}
      {message && (
        <p
          className={`text-center text-sm sm:text-base font-medium ${
            message.includes("Successfully") ? "text-white" : "text-red"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default Newsletter;
