import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        sticky ? "bg-[#212ea0] shadow-lg" : "bg-transparent"
      }`} >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">

        <img src={logo} alt="Logo" className="w-36 md:w-44" />

        <ul className="hidden md:flex items-center gap-8 text-white text-sm">
          <a className="cursor-pointer hover:text-gray-200">Home</a>
          <a className="cursor-pointer hover:text-gray-200">Program</a>
          <a className="cursor-pointer hover:text-gray-200">About Us</a>
          <a className="cursor-pointer hover:text-gray-200">Campus</a>
          <a className="cursor-pointer hover:text-gray-200">Testimonials</a>
          <a>
            <button className="bg-white text-[#212ea0] px-5 py-2 rounded-full font-medium hover:bg-gray-100 transition">
              Contact Us
            </button>
          </a>
        </ul>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(true)} >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-black/40 z-40 md:hidden">
          
          <div
            ref={menuRef}
            className="absolute top-0 right-0 w-72 h-full bg-[#212ea0] text-white p-6 space-y-5 shadow-lg" >

            <button
              onClick={() => setMenuOpen(false)}
              className="text-2xl absolute top-4 right-4" >
              X
            </button>

            <p className="cursor-pointer">Home</p>
            <p className="cursor-pointer">Program</p>
            <p className="cursor-pointer">About Us</p>
            <p className="cursor-pointer">Campus</p>
            <p className="cursor-pointer">Testimonials</p>

            <button className="w-full bg-white text-[#212ea0] py-2 rounded-full font-medium mt-4">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
