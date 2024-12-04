import userMeta from "../constants/userMeta";
import Button from "./Button";
import Chip from "./Chip";
import SectionHeader from "./SectionHeader";

const Experience = () => {
  const { experiences } = userMeta;
  const openLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section
      section
      id="experience"
      className="overflow-hidden py-8"
      data-aos="fade-up"
    >
      <SectionHeader title={"EXPERIENCE"} borderTop />
      <div className="mx-auto w-full">
        {experiences?.map(
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
              data-aos="fade-up"
              className="mx-auto grid w-full grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-1"
            >
              <div className="pt-4">
                <div className="w-full">
                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
                    {title}
                  </h2>
                  <p className="text-base font-semibold leading-7 text-primary mt-2">
                    {subtitle}
                  </p>
                  <dl className="mt-5 w-full space-y-3 text-sm md:text-base leading-7 text-text-secondary lg:max-w-none">
                    {description?.map((desc) => (
                      <div className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="absolute left-1 top-1 h-5 w-5 text-primary"
                          >
                            <path d="M3.196 12.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 12.87z"></path>
                            <path d="M3.196 8.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 8.87z"></path>
                            <path d="M10.38 1.103a.75.75 0 00-.76 0l-7.25 4.25a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.76 0l7.25-4.25a.75.75 0 000-1.294l-7.25-4.25z"></path>
                          </svg>
                        </dt>
                        <dd className="inline">{desc}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div className="mt-5 flex gap-3 items-center flex-wrap">
                  <span className="text-base font-bold">Tools :</span>
                  {tools?.map((tool) => (
                    <Chip title={tool} key={tool} />
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3 flex-col min-[450px]:flex-row min-[450px]:gap-6">
                  {!!githubLink && (
                    <Button onClick={() => openLink(githubLink)}>
                      View Source Code
                    </Button>
                  )}
                  <Button onClick={() => openLink(link)}>Live Demo</Button>
                </div>
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

export default Experience;
