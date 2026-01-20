import React from "react";

const Footer = () => {
  return (
    <footer className="w-[90%] max-w-7xl mx-auto mt-10 border-t border-gray-400 py-4">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        
        <p className="text-center sm:text-left">
          © 2025 Edusity. All rights reserved.
        </p>

        <ul className="flex gap-5">
          <a href="" className="cursor-pointer hover:text-gray-800 transition">
            Terms of Services
          </a>
          <a href="" className="cursor-pointer hover:text-gray-800 transition">
            Privacy Policy
          </a>
        </ul>

      </div>
    </footer>
  );
};

export default Footer;
