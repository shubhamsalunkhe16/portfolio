import React from "react";
import SectionHeader from "./SectionHeader";
import ResourceCard from "./ResourceCard";

const Resources = ({ resources }) => {
  const handleClick = (event) => {
    if (event.target && event.target.classList.contains("readDocBtn")) {
      const resourceLink = event.target.getAttribute("data-link");
      window.open(resourceLink, "_blank");
    }
  };

  return (
    <div id="resources" data-aos="fade-up">
      <SectionHeader title="RESOURCES" className={"text-left"} />
      <div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        onClick={handleClick}
      >
        {resources?.map((resource) => (
          <ResourceCard {...resource} />
        ))}
      </div>
    </div>
  );
};

export default Resources;
