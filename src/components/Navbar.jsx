import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";
//14 30
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  //for toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  //nav items array
  const navItems = [
    { link: "Home", path: "home" },
    { link: "Service", path: "service" },
    { link: "Product", path: "product" },
    { link: "Testimonial", path: "testimonial" },
    { link: "FAQ", path: "faq" },
  ];
  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <nav>
        <div>
          <a
            href=""
            className="text-2xl font-semibold flex items-center space-x-3"
          >
            <img src={logo} alt="" className="w-10 inline-block items-center" />
            <span className="text-[#263238]">Garahan Coffee</span>
          </a>

          {/* large ration */}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map((item, path) => (
              <Link
                to={item.path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                className="block text-base text-gray-900 hover:text-brandPrimary first:font-medium"
              >
                {item.link}
              </Link>
            ))}
          </ul>

          {/* btn at large ratio */}
          <div className="space-x-12 hidden lg:flex items-center">
            <a
              href="/"
              className="hidden lg:flex items-center text-brandPrimary"
            >
              Login
            </a>
            <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
