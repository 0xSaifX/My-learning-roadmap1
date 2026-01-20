import React, { useRef } from "react";
import next_icon from "../assets/next-icon.png";
import back_icon from "../assets/back-icon.png";
import user_1 from "../assets/user-1.png";
import user_2 from "../assets/user-2.png";
import user_3 from "../assets/user-3.png";
import user_4 from "../assets/user-4.png";

const Testimonial = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) tx -= 25;
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) tx += 25;
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <section className="relative w-[90%] max-w-7xl mx-auto my-20 px-4 sm:px-10">
      
      <button
        onClick={slideBackward}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#212ea0] p-3 rounded-full z-10 hover:bg-[#1a237e] transition" >

        <img src={back_icon} alt="Back" className="w-5" />
      </button>

      <button
        onClick={slideForward}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#212ea0] p-3 rounded-full z-10 hover:bg-[#1a237e] transition" >

        <img src={next_icon} alt="Next" className="w-5" />
      </button>

      <div className="overflow-hidden">
        <ul
          ref={slider}
          className="flex w-[200%] transition-transform duration-500"
        >
          {[user_1, user_2, user_3, user_4].map((user, index) => (
            <li
              key={index}
              className="w-full sm:w-1/2 p-4 list-none" >

              <div className="bg-white shadow-xl p-6 sm:p-10 rounded-xl text-gray-600 leading-relaxed">
                
                <div className="flex items-center mb-5 text-sm">
                  <img
                    src={user}
                    alt="User"
                    className="w-16 h-16 rounded-full border-4 border-[#212ea0] mr-3" />

                  <div>
                    <h3 className="text-[#212ea0] font-semibold">
                      Williams Jackson {index + 1}
                    </h3>
                    <span className="text-gray-500">Edusity, USA</span>
                  </div>
                </div>

                <p>
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-art facilities, and commitment to academic excellence
                  have truly exceeded my expectations.
                </p>

              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonial;
