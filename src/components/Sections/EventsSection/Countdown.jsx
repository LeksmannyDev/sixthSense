import React, { useState, useEffect } from "react";
import { eventAsset } from "./eventsAssets";

const Countdown = () => {
  let targetDate = "September 10, 2025";

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const [buttonDate, setButtonDate] = useState("");

  useEffect(() => {
    if (targetDate) {
      const dateObj = new Date(targetDate);
      const options = { year: "numeric", month: "long", day: "numeric" };
      setButtonDate(dateObj.toLocaleDateString("en-US", options));
    }

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24))
          .toString()
          .padStart(2, "0"),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
          .toString()
          .padStart(2, "0"),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
          .toString()
          .padStart(2, "0"),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
          .toString()
          .padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const stats = [
    { number: timeLeft.days, description: "Days" },
    { number: timeLeft.hours, description: "Hours" },
    { number: timeLeft.minutes, description: "Minutes" },
    { number: timeLeft.seconds, description: "Seconds" },
  ];

  return (
    <div className=" py-20 px-4 sm:px-6 md:px-10 bg-light text-center">
      <h2 className="text-2xl md:text-[40px] font-medium text-blue mb-10">
        Countdown till next Session
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`px-4 py-10 sm:py-12 md:py-15 rounded-[50px] ${
              index % 2 === 1 ? "bg-[#FF0C101A]" : "bg-white"
            }`}
          >
            <h3 className="text-4xl sm:text-6xl font-black text-blue my-2">
              {stat.number}
            </h3>
            <p className="text-red text-[15px] italic">{stat.description}</p>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center">
        <button className="border-[#ff0c10] text-center uppercase text-sm text-white font-medium px-6 sm:px-15 py-3 rounded-full bg-red flex items-center gap-2">
          {buttonDate || "Select Date"}
          <img
            src={eventAsset.calendar}
            alt="Calendar icon"
            className="w-4 h-4"
          />
        </button>
      </div>
    </div>
  );
};

export default Countdown;
