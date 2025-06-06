import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="w-full fixed top-0 z-20">
      <div
        className={`transition-all duration-700 ease-in-out ${
          scrolled
            ? "mt-4 mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-48"
            : "mt-0 mx-0"
        }`}
      >
        <div
          className={`${
            styles.paddingX
          } w-full flex items-center py-5 transition-all duration-700 ease-in-out ${
            scrolled
              ? "bg-primary/50 backdrop-blur-xl rounded-2xl shadow-2xl shadow-primary/30 ring-1 ring-purple-500/30"
              : "bg-primary/50"
          }`}
        >
          <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
            <Link
              to="/"
              className="flex items-center gap-3 group"
              onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}
            >
              <div className="relative">
                <img
                  src={logo}
                  alt="logo"
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md"></div>
              </div>
              <div className="flex flex-col">
                <p className="text-white text-[18px] sm:text-[20px] font-bold cursor-pointer transition-colors duration-300 group-hover:text-purple-400">
                  Tamim
                </p>
                <span className="text-secondary text-[12px] sm:text-[14px] font-medium sm:block hidden transition-colors duration-300 group-hover:text-cyan-400">
                  Software Developer
                </span>
              </div>
            </Link>

            <ul className="list-none hidden sm:flex flex-row gap-8">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className={`relative group ${
                    active === link.title ? "text-white" : "text-secondary"
                  } hover:text-white text-[16px] sm:text-[18px] font-medium cursor-pointer transition-all duration-300`}
                  onClick={() => setActive(link.title)}
                >
                  <a
                    href={`#${link.id}`}
                    className="relative z-10 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/5"
                  >
                    {link.title}
                  </a>
                  <div
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300 ${
                      active === link.title
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></div>
                </li>
              ))}
            </ul>

            <div className="sm:hidden flex flex-1 justify-end items-center">
              <div
                className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-purple-500/30 hover:to-cyan-500/30"
                onClick={() => setToggle(!toggle)}
              >
                <img
                  src={toggle ? close : menu}
                  alt="menu"
                  className="w-[20px] h-[20px] object-contain filter brightness-0 invert"
                />
              </div>

              <div
                className={`${
                  !toggle ? "hidden" : "flex"
                } p-6 bg-gradient-to-br from-primary via-primary to-secondary/20 backdrop-blur-md absolute top-20 right-0 mx-4 my-2 min-w-[160px] z-10 rounded-xl border border-purple-500/20 shadow-xl transition-all duration-300`}
              >
                <ul className="list-none flex justify-end items-center flex-col gap-4 w-full">
                  {navLinks.map((link, index) => (
                    <li
                      key={index}
                      className={`w-full text-center group ${
                        active === link.title ? "text-white" : "text-secondary"
                      } font-medium cursor-pointer text-[16px] transition-all duration-300 hover:text-white`}
                      onClick={() => {
                        setToggle(!toggle);
                        setActive(link.title);
                      }}
                    >
                      <a
                        href={`#${link.id}`}
                        className="block px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-cyan-500/20"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
