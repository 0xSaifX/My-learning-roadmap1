import React from "react";
import darkArrow from "../assets/dark-arrow.png";
import heroImg from "../assets/hero.png";

const Hero = () => {
  return (
    <section
      className="w-full min-h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(8,0,58,0.7), rgba(8,0,58,0.7)), url(${heroImg})`,
      }}>
      <div className="max-w-4xl text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
          We Ensure better education for a better world
        </h1>

        <p className="mt-4 mb-6 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed text-gray-200">
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamic field
          of education
        </p>

        <button className="inline-flex items-center gap-2 bg-white text-[#212ea0] px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition">
          Explore more
          <img src={darkArrow} alt="arrow" className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
