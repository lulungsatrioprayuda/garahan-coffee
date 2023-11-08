import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";

//react icons
import { FaXmark, FaBars } from "react-icons/fa6";
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
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b bg-white duration-300"
            : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
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

          {/* menu at mobile ration */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-neutralDGrey focus:outline-none focus:text-gray-500"
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6 focus:text-gray-500" />
              )}
            </button>
          </div>
        </div>

        {/* nav item at mobile ratio */}
        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${
            isMenuOpen ? "block fixed top-0 right-0 left-0 " : "hidden"
          }`}
        >
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
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
