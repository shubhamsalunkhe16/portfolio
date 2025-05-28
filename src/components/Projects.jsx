import Button from "./Button";
import Chip from "./Chip";
import SectionHeader from "./SectionHeader";
import { Gem } from "lucide-react";

const Projects = ({ projects }) => {
  const openLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section className="overflow-hidden" id="projects" data-aos="fade-up">
      <SectionHeader title={"PERSONAL PROJECTS"} />
      <div className="w-full divide-y divide-text-primary">
        {projects?.map(
          ({
            title,
            subtitle,
            date,
            description,
            link,
            githubLink,
            image,
            tools,
          }) => (
            <div
              key={title}
              data-aos="fade-up"
              className="w-full first:pt-0 last:pb-0 pb-8 pt-6"
            >
              <h2
                className="heading-4xl hover:text-primary hover:underline cursor-pointer w-fit"
                onClick={() => openLink(link)}
              >
                {title}
              </h2>
              <p className="text-base font-semibold text-primary mt-2">
                {subtitle} ● &nbsp;{date}
              </p>
              <ul className="mt-5 w-full space-y-3 text-sm md:text-base text-text-secondary lg:max-w-none">
                {description?.map((desc, index) => (
                  <li
                    className="relative flex gap-3 items-start"
                    key={`project_${index}`}
                  >
                    <Gem className="h-4 w-4 text-primary relative top-1" />
                    <p className="para-md flex-1">{desc}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex gap-3 items-center flex-wrap">
                <span className="text-base font-bold">Tools :</span>
                {tools?.map((tool) => (
                  <Chip title={tool} key={tool} />
                ))}
              </div>
              {(!!link || !!githubLink) && (
                <div className="my-5 flex items-center gap-3 flex-col min-[450px]:flex-row min-[450px]:gap-6">
                  {!!githubLink && (
                    <Button onClick={() => openLink(githubLink)}>
                      View Source Code
                    </Button>
                  )}
                  {!!link && (
                    <Button onClick={() => openLink(link)}>Live Demo</Button>
                  )}
                </div>
              )}
              <img
                src={image}
                alt="Product screenshot"
                className="w-full rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 object-cover"
                width="2432"
                height="1442"
              />
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Projects;
