import { useState, useEffect } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { assets } from "../../assets/asset";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  useEffect(() => {
    const currentPath = location.pathname.slice(1) || "home";
    setActiveItem(currentPath);
  }, [location]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleNavClick = (item) => {
    setActiveItem(item);
    setMenuOpen(false);
  };

  const navItems = [
    { label: "home", slug: "home" },
    { label: "who we are", slug: "who-we-are" },
    { label: "what we do", slug: "what-we-do" },
    { label: "blog", slug: "blog" },
    { label: "our faculty", slug: "our-faculty" },
    { label: "events", slug: "events" },
    { label: "contact us", slug: "contact-us" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 ${
        scrolled ? "bg-black opacity-80" : "bg-transparent"
      } backdrop-blur-sm h-15 transition-colors duration-300`}
    >
      <nav className="max-w-8xl mx-auto flex items-center justify-between h-full px-4 sm:px-6 md:px-8">
        {/* Logo container */}
        <div className="flex items-center mr-30 h-full">
          <img src={assets.logo} alt="Logo" className="h-12 w-auto" />
        </div>

        {/* Desktop Navigation (now only visible on lg and up) */}
        <div className="hidden xl:flex items-center h-full">
          <ul className="flex space-x-2 text-center ml-auto h-full">
            {navItems.map((item) => (
              <li key={item.slug} className="h-full flex items-center">
                <Link
                  to={item.slug === "home" ? "/" : `/${item.slug}`}
                  onClick={() => handleNavClick(item.slug)}
                  className={`group relative flex flex-col justify-center h-full px-4 text-[15px] font-semibold uppercase
        ${
          activeItem === item.slug
            ? "text-white bg-[#ED1F241A] border-b-2 px-9 border-[#ED1F24]"
            : "text-[#f5f5f5]"
        } hover:text-[#ff0c10]`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile menu button (now visible on md and below) */}
        <div className="xl:hidden flex items-center h-full">
          <FaBars
            className="text-3xl text-white cursor-pointer"
            onClick={toggleMenu}
          />
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed top-0 right-0 w-full h-screen bg-black z-60 transition-transform duration-300 ease-in-out xl:hidden ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end px-6 pt-6">
            <FaTimes
              className="text-3xl text-white cursor-pointer"
              onClick={toggleMenu}
            />
          </div>

          {/* Mobile nav links */}
          <div className="flex flex-col justify-center items-center h-full px-4 pb-8">
            <ul className="flex flex-col items-center space-y-8">
              {navItems.map((item) => (
                <li key={item.slug}>
                  <Link
                    to={item.slug === "home" ? "/" : `/${item.slug}`}
                    onClick={() => handleNavClick(item.slug)}
                    className={`group text-xl uppercase transition text-center ${
                      activeItem === item.slug
                        ? "text-[#ED1F24]"
                        : "text-[#f5f5f5]"
                    } hover:text-[#ff0c10]`}
                  >
                    {item.label}
                    <span
                      className={`mt-1 block h-[2px] w-full transition-all duration-300 ${
                        activeItem === item.slug
                          ? "bg-[#ED1F24] group-hover:bg-[#ff0c10]"
                          : "bg-transparent group-hover:bg-[#ff0c10]"
                      }`}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
