import { ChevronRight } from "lucide-react";

const ArticleCard = ({ id, title, description }) => {
  return (
    <div key={id} className="border border-text-primary rounded-md p-4">
      <h3
        className="heading-xl mb-2 hover:text-primary hover:underline cursor-pointer readMoreLink"
        data-id={id}
      >
        {title}
      </h3>
      <p className="para-sm">{description}</p>
      <button
        data-id={id}
        className="readMoreLink inline-flex items-center mt-2 text-primary para-md cursor-pointer"
      >
        Read More
        <ChevronRight className="text-primary" />
      </button>
    </div>
  );
};

export default ArticleCard;
