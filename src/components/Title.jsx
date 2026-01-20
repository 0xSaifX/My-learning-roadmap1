import React from "react";

const Title = ({ subTitle, title }) => {
  return (
    <div className="text-center my-16 sm:my-20">
      <p className="text-[#212ea0] text-xs sm:text-sm font-semibold uppercase tracking-wider">
        {subTitle}
      </p>

      <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold text-[#000f38]">
        {title}
      </h2>
    </div>
  );
};

export default Title;
