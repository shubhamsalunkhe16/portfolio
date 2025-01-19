import userMeta from "../constants/userMeta";
import Button from "./Button";
import Chip from "./Chip";
import SectionHeader from "./SectionHeader";
import { Gem } from "lucide-react";

const Projects = () => {
  const { projects } = userMeta;
  const openLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section className="overflow-hidden py-8" id="projects" data-aos="fade-up">
      <SectionHeader title={"PROJECTS"} borderTop />
      <div className="mx-auto w-full">
        {projects?.map(
          ({
            title,
            subtitle,
            description,
            link,
            githubLink,
            image,
            tools,
          }) => (
            <div
              key={title}
              data-aos="fade-up"
              className="mx-auto grid w-full grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-1"
            >
              <div className="pt-4">
                <div className="w-full">
                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
                    {title}
                  </h2>
                  <p className="text-base font-semibold text-primary mt-2">
                    {subtitle}
                  </p>
                  <ul className="mt-5 w-full space-y-3 text-sm md:text-base text-text-secondary lg:max-w-none">
                    {description?.map((desc, index) => (
                      <li
                        className="relative flex gap-3 items-start"
                        key={`project_${index}`}
                      >
                        <Gem className="h-6 w-6 text-primary pt-1" />
                        <p className="para-md flex-1">{desc}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-5 flex gap-3 items-center flex-wrap">
                  <span className="text-base font-bold">Tools :</span>
                  {tools?.map((tool) => (
                    <Chip title={tool} key={tool} />
                  ))}
                </div>
                {(!!link || !!githubLink) && (
                  <div className="mt-5 flex items-center gap-3 flex-col min-[450px]:flex-row min-[450px]:gap-6">
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
              </div>
              <img
                src={image}
                alt="Product screenshot"
                className="w-full rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 "
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
