import { Link } from "react-router-dom";
import { assets } from "../../assets/asset";
import facebook from "../../assets/elements/facebook.svg";
import twitter from "../../assets/elements/twitter.svg";
import pinterest from "../../assets/elements/pinterest.svg";
import linkedin from "../../assets/elements/linkedin.png";
import instagram from "../../assets/elements/instagram.png";
import youtube from "../../assets/elements/youtube.svg";
import Newsletter from "./NewsLetter";

const Footer = () => {
  return (
    <footer className="text-white">
      {/* Newsletter */}
      <Newsletter />

      {/* Contact Info */}
      <div className="w-full bg-[#333333]   py-10 md:py-16 lg:py-20 text-white px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto px-10 xl:px-1 flex flex-col md:flex-row items-start gap-10  xl:gap-x-40">
          <div className="flex-shrink-0 w-full md:w-auto">
            <Link to="/">
              <img
                src={assets.logo}
                alt="Logo"
                className="h-12 sm:h-16 w-auto object-contain mx-auto md:mx-0"
              />
            </Link>
          </div>

          <div className="w-full">
            <h3 className="text-[#6A9BC2] mb-4 md:mb-6 text-xl sm:text-2xl">
              Quick Links
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-sm  text-[#E0F7FA]">
              <ul className="space-y-3 sm:space-y-4">
                <li>
                  <Link to="/who-we-are">Who We Are</Link>
                </li>
                <li>
                  <Link to="/transformational-leadership">
                    Transformational Leadership Masterclass
                  </Link>
                </li>
                <li>
                  <Link to="/leadership-circle">Leadership Mastery Circle</Link>
                </li>
                <li>
                  <Link to="/mp3-masterclass">MP3 Masterclass</Link>
                </li>
              </ul>

              <ul className="space-y-3 sm:space-y-4">
                <li>
                  <Link to="/our-faculty">Our Faculty</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
              </ul>

              <div className="space-y-3 sm:space-y-4 mt-4 sm:mt-0">
                <p>
                  <a
                    href="https://maps.app.goo.gl/kavkwqyprNaw1kCDA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline"
                  >
                    Brownstone Estate, Lekki, Lagos
                  </a>
                </p>

                <p>
                  <a
                    href="tel:+2347080401080"
                    className="text-white hover:underline"
                  >
                    +234 708 040 1080
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:sixthsenseleadership@gmail.com"
                    className="text-white hover:underline"
                  >
                    info@sixthsenseleadership.com
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.sixthsenseleadership.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline"
                  >
                    www.sixthsenseleadership.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="max-w-7xl px-4 sm:px-6 md:px-10 mx-auto mt-20 md:mt-40 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-white">
          <p className="text-center md:text-left uppercase mb-4 md:mb-0">
            Copyright &copy; 2025 SIXTHSENSE LEADERSHIP. ALL RIGHTS RESERVED.
          </p>

          {/* Social Icon Images */}
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/company/sixthsense-leadership-consulting-ltd/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="linkedin" className="h-5 w-auto" />
            </a>
            <a
              href="https://www.instagram.com/sixthsenseleadership/profilecard/?igsh=MWxlNjFlaHA1NG1rOQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="instagram" className="h-5 w-auto" />
            </a>
            <a
              href="https://web.facebook.com/search/top?q=sixth%20sense%20leadership"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="Facebook" className="h-5 w-auto" />
            </a>

            {/* <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="Twitter" className="h-5 w-auto" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={youtube} alt="YouTube" className="h-5 w-auto" />
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
