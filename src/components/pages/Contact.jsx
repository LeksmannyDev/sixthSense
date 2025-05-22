import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroContact from "../Sections/ContactSection/HeroContact";
import ContactForm from "../Sections/ContactSection/ContactForm";
import ContactMap from "../Sections/ContactSection/ContactMap";

const Contact = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <>
      <HeroContact />
      <ContactForm />
      <ContactMap />
    </>
  );
};

export default Contact;
