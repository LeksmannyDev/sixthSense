import React from "react";

const ContactMap = () => {
  return (
    <section className="py-12 bg-[#f5f5f5] px-4 sm:px-6 lg:px-24">
      <div className="max-w-5xl mx-auto mb-14 text-center">
        <h2 className="text-3xl sm:text-4xl text-blue font-medium mb-4 ">
          Find Us on Google Maps
        </h2>
        <p className="text-sm sm:text-xl text-gray mb-10">
          Looking for directions? Click here to find us on Google Maps! We’re
          excited to welcome you to our location and ensure you have a smooth
          journey.
        </p>
        <div className="overflow-hidden rounded-xl shadow-lg w-full h-[300px] sm:h-[400px] md:h-[550px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.592253002591!2d3.4883266758921523!3d6.446365624053042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf5069d6acbb3%3A0x65b73367767b3d4e!2sBrownStone%20Estate%20Lekki!5e0!3m2!1sen!2sng!4v1746739772996!5m2!1sen!2sng"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Our Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
