import { ChevronRight } from "lucide-react";
import Chip from "./Chip";

const ResourceCard = ({ title, description, tags, link }) => {
  return (
    <div key={title} className="border border-text-primary rounded-md p-4">
      <h3
        className="heading-xl mb-2 hover:text-primary hover:underline cursor-pointer readDocLink w-fit"
        data-link={link}
      >
        {title}
      </h3>
      <p className="para-sm">{description}</p>
      <div className="flex gap-2 my-3 flex-wrap">
        {tags?.map((tag) => (
          <Chip title={tag} key={tag} />
        ))}
      </div>
      <button
        data-link={link}
        className="inline-flex items-center text-primary para-md cursor-pointer readDocLink"
      >
        Read the doc
        <ChevronRight className="text-primary" />
      </button>
    </div>
  );
};

export default ResourceCard;
