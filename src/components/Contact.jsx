import React from "react";
import msg_icon from "../assets/msg-icon.png";
import mail_icon from "../assets/mail-icon.png";
import phone_icon from "../assets/phone-icon.png";
import location_icon from "../assets/location-icon.png";
import white_arrow from "../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "00c86423-1245-46ea-85bd-7e1ac726cd88");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      setResult(res.message);
      event.target.reset();
    } else {
      setResult(res.message);
    }
  };

  return (
    <section className="w-[90%] max-w-7xl mx-auto my-20">
      <div className="flex flex-col lg:flex-row gap-12">
        
        <div className="w-full lg:w-1/2 text-gray-600">
          <h3 className="flex items-center text-[#000f38] text-2xl font-medium mb-5">
            Send us a message
            <img src={msg_icon} alt="" className="w-8 ml-3" />
          </h3>

          <p className="max-w-md leading-relaxed mb-6">
            Feel free to reach out through the contact form or find our contact
            information below. Your feedback, questions, and suggestions are
            important to us.
          </p>

          <ul className="space-y-5">
            <li className="flex items-center">
              <img src={mail_icon} alt="" className="w-6 mr-3" />
              Contact@SaifX.dev
            </li>
            <li className="flex items-center">
              <img src={phone_icon} alt="" className="w-6 mr-3" />
              +234-803-776-1303
            </li>
            <li className="flex items-start">
              <img src={location_icon} alt="" className="w-6 mr-3 mt-1" />
              <span>
                No 312, Kabuga line 1,
                <br />
                PO-Box, Kano State Nigeria
              </span>
            </li>
          </ul>
        </div>

        <div className="w-full lg:w-1/2">
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 text-sm text-gray-600">
                Your name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className="w-full bg-[#EBECFE] px-4 py-3 outline-none rounded-md" />

            </div>

            <div>
              <label className="block mb-1 text-sm text-gray-600">
                Phone number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your mobile number"
                required
                className="w-full bg-[#EBECFE] px-4 py-3 outline-none rounded-md" />

            </div>

            <div>
              <label className="block mb-1 text-sm text-gray-600">
                Write your message here
              </label>
              <textarea
                name="message"
                rows="6"
                placeholder="Enter your message"
                required
                className="w-full bg-[#EBECFE] px-4 py-3 outline-none rounded-md resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-[#212ea0] text-white px-6 py-3 rounded-full font-medium hover:bg-[#1a237e] transition" >
              Submit now
              <img src={white_arrow} alt="" className="w-4" />
            </button>
          </form>

          {result && (
            <span className="block mt-5 text-sm text-gray-600">
              {result}
            </span>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
