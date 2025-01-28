import { ChevronRight } from "lucide-react";
import React from "react";
import Chip from "./Chip";

const ResourceCard = ({ title, description, tags, link }) => {
  return (
    <div key={title} className="border border-text-primary rounded-md p-4">
      <h3 className="heading-xl mb-2">{title}</h3>
      <p className="para-sm">{description}</p>
      <div className="flex gap-2 my-3 flex-wrap">
        {tags?.map((tag) => (
          <Chip title={tag} key={tag} />
        ))}
      </div>
      <button
        data-link={link}
        className="inline-flex items-center text-primary para-md cursor-pointer readDocBtn"
      >
        Read the doc
        <ChevronRight className="text-primary" />
      </button>
    </div>
  );
};

export default ResourceCard;
