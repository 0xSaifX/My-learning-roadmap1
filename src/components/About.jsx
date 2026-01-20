import React from "react";
import about_img from "../assets/about.png";
import play_icon from "../assets/play-icon.png";

const About = () => {
  return (
    <section className="w-[90%] max-w-7xl mx-auto my-24">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        
        <div className="relative w-full lg:w-[40%]">
          <img
            src={about_img}
            alt="About University"
            className="w-full rounded-lg"
          />
          <img
            src={play_icon}
            alt="Play"
            className="w-14 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          />
        </div>

        <div className="w-full lg:w-[56%]">
          <h3 className="text-[#212ea0] text-sm font-semibold tracking-wide">
            ABOUT UNIVERSITY
          </h3>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#000f38] my-4 max-w-md">
            Nurturing Tomorrow&apos;s Leaders Today
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed">
            Embark on a transformative educational journey with our university's
            comprehensive education programs. Our cutting-edge curriculum is
            designed to empower students with the knowledge, skills, and
            experiences needed to excel in the dynamic field of education.
          </p>

          <p className="text-gray-600 mb-4 leading-relaxed">
            With a focus on innovation, hands-on learning, and personalised
            mentorship, our programs prepare aspiring educators to make a
            meaningful impacts in classrooms, schools, and communities.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Whether you aspire to become a teacher, administrator, counselor, or
            educational leader, our diverse range of programs offers the perfect
            pathway to achieve your goals and unlock your full potential in
            shaping the future of education.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
