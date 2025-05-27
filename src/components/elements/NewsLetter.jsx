import { useState } from "react";
import { assets } from "../../assets/asset";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", isError: false });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage({ text: "Please enter your email", isError: true });
      return;
    }

    setLoading(true);
    setMessage({ text: "", isError: false });

    try {
      // Replace with your Zoho endpoint or form integration
      const response = await fetch(
        "https://forms.zohopublic.com/leksmannydevgm1/form/Email/formperma/a9Ekca8UOmD0rNcoOb9prDIESNJ_Aa5zDmM-reqHXLU",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            // Add any additional fields required by Zoho
          }),
        }
      );

      if (response.ok) {
        setMessage({ text: "Thank you for subscribing!", isError: false });
        setEmail("");
      } else {
        throw new Error("Subscription failed");
      }
    } catch (error) {
      setMessage({
        text: "Subscription failed. Please try again later.",
        isError: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-blue w-full px-4 md:px-10 sm:px-8 py-12 lg:py-20 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-x-10 xl:gap-x-70">
      <div className="flex items-center gap-3 text-white w-full lg:w-auto justify-center lg:justify-start">
        <img src={assets.mail} alt="Mail icon" className="h-10 w-10" />
        <span className="font-medium text-sm mt-1 sm:text-[20px]">
          SUBSCRIBE TO NEWSLETTER
        </span>
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-md lg:max-w-xl">
        <div className="flex w-full h-13 rounded-full overflow-hidden bg-white">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="YOUR EMAIL ADDRESS"
            className="flex-1 px-5 text-xs sm:text-sm text-[#1F3864] placeholder:text-md font-medium focus:outline-none placeholder-[#1F3864]"
            disabled={loading}
          />
          <button
            type="submit"
            className="bg-red cursor-pointer px-4 sm:px-6 text-xs sm:text-sm text-white font-semibold hover:bg-darkRed transition-colors"
            disabled={loading}
          >
            {loading ? "PROCESSING..." : "GET STARTED"}
          </button>
        </div>
        {message.text && (
          <p
            className={`mt-2 text-center text-sm ${
              message.isError ? "text-red" : "text-green-500"
            }`}
          >
            {message.text}
          </p>
        )}
      </form>
    </div>
  );
};

export default Newsletter;
