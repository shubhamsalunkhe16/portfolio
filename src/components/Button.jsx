import React from "react";

const Button = ({ children, className = "", ...restProps }) => {
  return (
    <button
      {...restProps}
      className={`text-sm md:text-base inline-block rounded-full bg-primary px-5 py-3 text-center font-bold text-black transition hover:border-black hover:bg-text-primary hover:text-bg-primary ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
