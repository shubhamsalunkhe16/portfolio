import React from "react";

const Chip = ({ title, className = "" }) => {
  return (
    <span
      className={`text-xs md:text-xs inline-block rounded-full bg-primary px-3 py-[5px] text-center font-bold text-black transition hover:border-black hover:bg-text-primary hover:text-bg-primary ${className}`}
    >
      {title}
    </span>
  );
};

export default Chip;