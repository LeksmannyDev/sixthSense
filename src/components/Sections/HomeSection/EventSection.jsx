// EventSection.jsx
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { EVENTS } from "../../../assets/asset";

const SLIDE_INTERVAL_MS = 3000;

const EventSection = ({ eventId = null }) => {
  const now = new Date();

  const validEvents = (function () {
    if (eventId) {
      const ev = EVENTS.find((e) => e.id === eventId);
      if (!ev) return [];
      if (ev.endDate && new Date(ev.endDate) <= now) return [];
      return [ev];
    }
    return EVENTS.filter((e) => (e.endDate ? new Date(e.endDate) > now : true));
  })();

  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const startXRef = useRef(null);
  useEffect(() => {
    if (validEvents.length <= 1) {
      setIndex(0);
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      return;
    }

    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % validEvents.length);
    }, SLIDE_INTERVAL_MS);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [validEvents.length]);

  const handleTouchStart = (e) => {
    startXRef.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startXRef.current - endX;
    const threshold = 50; // px
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // swipe left -> next
        setIndex((prev) => (prev + 1) % validEvents.length);
      } else {
        // swipe right -> prev
        setIndex(
          (prev) => (prev - 1 + validEvents.length) % validEvents.length
        );
      }
    }
  };

  if (!validEvents.length) return null;

  return (
    <section className="w-full overflow-hidden bg-light py-4 sm:py-8 md:py-12 lg:py-20 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto w-full overflow-hidden">
        <div
          className="w-full relative"
          style={{
            width: `${validEvents.length * 100}%`,
            display: "flex",
            transform: `translateX(-${index * (100 / validEvents.length)}%)`,
            transition: "transform 500ms ease",
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {validEvents.map((ev) => {
            const isExternal = ev.link && ev.link.startsWith("http");

            return (
              <div
                key={ev.id}
                className="w-full relative group"
                style={{
                  width: `${100 / validEvents.length}%`,
                  flexShrink: 0,
                }}
                aria-hidden={validEvents[index].id !== ev.id}
              >
                {isExternal ? (
                  <a
                    href={ev.link}
                    target={ev.target || "_blank"}
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <img
                      src={ev.imageDesktop}
                      alt={ev.title || "Event"}
                      className="w-full h-10% object-cover"
                    />
                  </a>
                ) : (
                  <Link
                    to={ev.link}
                    target={ev.target || "_self"}
                    className="block"
                  >
                    <img
                      src={ev.imageDesktop}
                      alt={ev.title || "Event"}
                      className="w-full h-10% object-cover"
                    />
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EventSection;
