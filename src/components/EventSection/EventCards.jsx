import React from "react";
import { assets, events } from "../../assets/asset";

const EventCards = () => {
  return (
    <div className="bg-white py-12 md:py-20 px-4 sm:px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-y-10 gap-y-10 lg:gap-15">
          {events.map((item, index) => (
            <div
              key={index}
              className="bg-[#F9F9F9] rounded-3xl shadow-xl p-4 sm:p-6 md:p-12 border border-[#D8D8D8] flex flex-col h-full"
            >
              {/* Top: image */}
              <div className="w-full mb-6">
                <img
                  src={item.image}
                  alt="event"
                  className="w-full h-full object-cover "
                />
              </div>

              {/* Bottom: content */}
              <div className="flex-1">
                <h3 className="text-blue text-lg md:text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-blue text-base md:text-lg leading-relaxed mb-4 ">
                  {item.description}
                </p>

                <ul className="space-y-2 text-[#4F4F4F] text-[15px] md:text-lg mb-6">
                  {item.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <img
                        src={item.icons[idx]}
                        alt="icon"
                        className="w-5 h-5 mt-0.5 flex-none"
                      />
                      <span className="leading-snug">{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center ">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red font-medium text-xs sm:text-sm border border-[#FF0C10] capitalize rounded-full px-2 py-1 underline flex items-center gap-2 hover:bg-[#E2EDFF] transition duration-300"
                  >
                    register
                    <img
                      src={assets.register}
                      alt="Arrow icon"
                      className="w-4 h-4 inline-block"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventCards;
