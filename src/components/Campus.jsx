import React from "react";
import gallery_1 from "../assets/gallery-1.png";
import gallery_2 from "../assets/gallery-2.png";
import gallery_3 from "../assets/gallery-3.png";
import gallery_4 from "../assets/gallery-4.png";
import white_arrow from "../assets/white-arrow.png";

const Campus = () => {
  return (
    <section className="w-[90%] max-w-7xl mx-auto my-20 text-center">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
        <img
          src={gallery_1}
          alt="Campus 1"
          className="w-full rounded-xl object-cover"
        />
        <img
          src={gallery_2}
          alt="Campus 2"
          className="w-full rounded-xl object-cover"
        />
        <img
          src={gallery_3}
          alt="Campus 3"
          className="w-full rounded-xl object-cover"
        />
        <img
          src={gallery_4}
          alt="Campus 4"
          className="w-full rounded-xl object-cover"
        />
      </div>

      <button className="inline-flex items-center gap-2 bg-[#212ea0] text-white px-6 py-3 rounded-full font-medium hover:bg-[#1a237e] transition">
        See more here
        <img src={white_arrow} alt="Arrow" className="w-4 h-4" />
      </button>
    </section>
  );
};

export default Campus;
