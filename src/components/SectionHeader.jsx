import React from "react";

const SectionHeader = ({
  className = "",
  title,
  borderTop = false,
  borderBottom = false,
}) => {
  return (
    <h2
      className={`text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-text-primary text-center underline pb-4 pt-8 ${className} ${
        borderTop ? "border-t-2 border-text-secondary" : ""
      } ${borderBottom ? "border-b-2 border-text-secondary" : ""}`}
    >
      {title}
    </h2>
  );
};

export default SectionHeader;
