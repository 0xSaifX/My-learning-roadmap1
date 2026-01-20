import React from "react";
import program_1 from "../assets/program-1.png";
import program_2 from "../assets/program-2.png";
import program_3 from "../assets/program-3.png";
import program_icon_1 from "../assets/program-icon-1.png";
import program_icon_2 from "../assets/program-icon-2.png";
import program_icon_3 from "../assets/program-icon-3.png";

const Programs = () => {
  return (
    <section className="w-[90%] max-w-7xl mx-auto my-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div className="relative group rounded-lg overflow-hidden">
          <img
            src={program_1}
            alt="Graduation Degree"
            className="w-full h-full object-cover rounded-lg" />

          <div className="absolute inset-0 bg-[rgba(0,15,152,0.3)] flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-400">
            <img src={program_icon_1} alt="" className="w-14 mb-2" />
            <p className="text-lg font-medium">Graduation Degree</p>
          </div>
        </div>

        <div className="relative group rounded-lg overflow-hidden">
          <img
            src={program_2}
            alt="Masters Degree"
            className="w-full h-full object-cover rounded-lg" />

          <div className="absolute inset-0 bg-[rgba(0,15,152,0.3)] flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-400">
            <img src={program_icon_2} alt="" className="w-14 mb-2" />
            <p className="text-lg font-medium">Masters Degree</p>
          </div>
        </div>

        <div className="relative group rounded-lg overflow-hidden">
          <img
            src={program_3}
            alt="Post Graduation"
            className="w-full h-full object-cover rounded-lg" />

          <div className="absolute inset-0 bg-[rgba(0,15,152,0.3)] flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-400">
            <img src={program_icon_3} alt="" className="w-14 mb-2" />
            <p className="text-lg font-medium">Post Graduation</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Programs;
