// EventPop.jsx
import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import EventSection from "../Sections/HomeSection/EventSection";
import { EVENTS } from "../../assets/asset";

const EventPop = () => {
  const DISPLAY_DURATION = 7000;
  const [isVisible, setIsVisible] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const mainEvent = EVENTS.find((e) => e.id === "main-event");
    if (!mainEvent) return;

    if (mainEvent.endDate && new Date(mainEvent.endDate) <= new Date()) {
      return;
    }

    setIsVisible(true);
    const timer = setTimeout(() => {
      handleClose();
    }, DISPLAY_DURATION);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsFadingOut(true);
    setTimeout(() => setIsVisible(false), 400);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-3 sm:px-4 transition-opacity duration-500 ${
        isFadingOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        className={`relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-[95%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl overflow-hidden transform transition-all duration-500 ${
          isFadingOut ? "scale-95 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        {/* Close Button */}
        <div className="relative bg-white rounded-2xl overflow-hidden w-full">
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 z-50 bg-gray-100 hover:bg-gray-200 rounded-full p-2 sm:p-3"
          >
            <FaTimes className="text-xl sm:text-2xl text-[#003366]" />
          </button>

          <EventSection eventId="main-event" />
        </div>

        {/* Register Button */}
        <div className="flex justify-center pb-4 sm:pb-6 mt-4 sm:mt-6">
          <a
            href="https://luma.com/ndyi661x"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FF0C10] hover:bg-[#d80a0e] text-white font-semibold px-5 sm:px-8 py-2 sm:py-3 rounded-full text-xs sm:text-sm md:text-base transition duration-300 shadow-md hover:shadow-lg"
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventPop;
