import SectionHeader from "./SectionHeader";
import "swiper/css";
import "swiper/css/navigation";
import ExperienceProjectCard from "./ExperienceProjectCard";

const Experience = ({ experiences }) => {
  return (
    <section
      section
      id="experience"
      className="overflow-hidden"
      data-aos="fade-up"
    >
      <SectionHeader title={"WORK EXPERIENCE"} />
      <div className="mx-auto w-full">
        {experiences?.map(({ title, subtitle, date, projects }) => (
          <div className="last:border-b-0 border-b-2 border-text-primary">
            <h2 className="heading-4xl">{title}</h2>
            <p className="text-base font-semibold text-primary mt-2">
              {subtitle}&nbsp; ● &nbsp;{date}
            </p>
            {projects?.map((project) => (
              <ExperienceProjectCard {...project} key={project?.projectTitle} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
