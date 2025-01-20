import React from "react";
import SectionHeader from "./SectionHeader";
import { ChevronRight } from "lucide-react";

const Resources = ({ resources }) => {
  const openResourceLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div id="resources" data-aos="fade-up">
      <SectionHeader title="RESOURCES" className={"text-left"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {resources?.map((resource) => (
          <div
            key={resource.title}
            className="border border-text-primary rounded-md p-4"
          >
            <h3 className="heading-xl mb-2">{resource.title}</h3>
            <p className="para-sm">{resource.description}</p>
            <p
              onClick={() => openResourceLink(resource.link)}
              class="inline-flex items-center mt-2 text-primary para-md cursor-pointer"
            >
              Read the doc
              <ChevronRight className="text-primary" />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
