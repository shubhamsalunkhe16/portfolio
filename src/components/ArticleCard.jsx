import React from "react";
import { ChevronRight } from "lucide-react";

const ArticleCard = ({ id, title, description }) => {
  return (
    <div key={id} className="border border-text-primary rounded-md p-4">
      <h3 className="heading-xl mb-2">{title}</h3>
      <p className="para-sm">{description}</p>
      <button
        data-id={id}
        className="readMoreBtn inline-flex items-center mt-2 text-primary para-md cursor-pointer"
      >
        Read More
        <ChevronRight className="text-primary" />
      </button>
    </div>
  );
};

export default ArticleCard;
