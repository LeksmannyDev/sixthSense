import { useState, useEffect } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { assets } from "../../assets/asset";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
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
    { label: "our faculty", slug: "our-faculty" },
    { label: "blog", slug: "blog" },
    // { label: "events", slug: "events" },
    { label: "contact us", slug: "contact-us" },
  ];

  const pages = [
    {
      name: "Transformational Leadership Masterclass (TLM)",
      path: "/transformational-leadership",
    },
    {
      name: "MP3 Masterclass",
      path: "/mp3-masterclass",
    },
    {
      name: "Leadership Mastery Circle",
      path: "/leadership-circle",
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white h-15">
      <nav className="max-w-8xl mx-auto flex items-center justify-between h-full px-4 sm:px-6 md:px-8 relative">
        {/* Continuous red underline across entire navigation */}
        <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#ff0c10] hidden xl:block"></div>

        <div className="flex items-center mr-30 h-full">
          <a href="/">
            <img src={assets.Logo} alt="Logo" className="h-10 w-auto" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center h-full">
          <ul className="flex space-x-2 ml-auto h-full">
            {navItems.map((item) => (
              <li
                key={item.slug}
                className="relative h-full flex items-center group"
              >
                {item.slug === "events" ? (
                  <>
                    <span
                      className={`relative flex flex-col justify-center h-full px-4 text-[15px] font-semibold uppercase cursor-pointer ${
                        activeItem === item.slug
                          ? "text-[#003366] bg-[#ED1F241A] px-9"
                          : "text-[#003366]"
                      } group-hover:text-[#ff0c10] group-hover:-translate-x-1 transition-transform duration-300 ease-in-out`}
                    >
                      <div className="flex items-center space-x-2">
                        <span>{item.label}</span>
                        <img
                          src={assets.arrow}
                          alt="arrow"
                          className="w-2 h-2 mt-[0px]"
                        />
                      </div>

                      {/* White overlay to hide red underline under active item */}
                      {activeItem === item.slug && (
                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white z-10"></span>
                      )}
                    </span>

                    <ul className="absolute top-full left-0 shadow-lg w-72 text-black opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 invisible z-50 transform -translate-x-4 group-hover:translate-x-0">
                      {pages.map((subitem) => (
                        <li key={subitem.path}>
                          <Link
                            to={subitem.path}
                            className="block px-4 py-3 bg-white text-sm hover:text-white hover:border-[#ff0c10] hover:border-b-2 hover:bg-[#000000] transition-colors duration-300"
                            onClick={() => handleNavClick("events")}
                          >
                            {subitem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    to={item.slug === "home" ? "/" : `/${item.slug}`}
                    onClick={() => handleNavClick(item.slug)}
                    className={`group relative flex flex-col justify-center h-full px-4 text-[15px] font-semibold uppercase ${
                      activeItem === item.slug
                        ? "text-[#003366] bg-[#ED1F241A] px-9"
                        : "text-[#003366]"
                    } hover:text-[#ff0c10]`}
                  >
                    {item.label}

                    {/* White overlay to hide red underline under active item */}
                    {activeItem === item.slug && (
                      <span className="absolute bottom-0 left-0 w-full h-[4px] bg-white z-10"></span>
                    )}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile menu button */}
        <div className="xl:hidden flex items-center h-full">
          <FaBars
            className="text-3xl text-[#003366] cursor-pointer"
            onClick={toggleMenu}
          />
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed top-0 right-0 w-full h-screen bg-black z-60 transition-transform duration-300 ease-in-out xl:hidden ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end px-8 pt-5">
            <FaTimes
              className="text-4xl text-[#003366] cursor-pointer"
              onClick={toggleMenu}
            />
          </div>

          <div className="flex flex-col justify-center items-center h-full px-4 pb-8 overflow-hidden ">
            <ul className="flex flex-col items-center space-y-8">
              {navItems.map((item) => (
                <li key={item.slug} className="w-full text-center">
                  {item.slug === "events" ? (
                    <>
                      <span
                        className={`group text-xl uppercase transition text-center ${
                          activeItem === item.slug
                            ? "text-[#ED1F24]"
                            : "text-[#f5f5f5]"
                        } hover:text-[#ff0c10] cursor-pointer`}
                        onClick={() => setEventsOpen(!eventsOpen)}
                      >
                        {item.label}
                        <span className="ml-2">{eventsOpen ? "▲" : "▼"}</span>
                      </span>

                      {eventsOpen && (
                        <ul className="mt-2 max-w-50 mx-auto space-y-4">
                          {pages.map((subitem) => (
                            <li key={subitem.path}>
                              <Link
                                to={subitem.path}
                                className="group text-sm text-[#f5f5f5] hover:text-[#ff0c10] transition"
                                onClick={() => {
                                  handleNavClick("events");
                                  setEventsOpen(false);
                                }}
                              >
                                {subitem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
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
                  )}
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
