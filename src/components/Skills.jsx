import userMeta from "../constants/userMeta";
import SectionHeader from "./SectionHeader";

const Skills = () => {
  const { skillMeta } = userMeta;
  return (
    <section
      id="skills"
      data-aos="fade-up"
      className="py-4 pb-0 mx-auto w-full"
    >
      <SectionHeader title="Key Skills and Tools" borderTop />
      <p className="text-sm md:text-base my-8 mb-12 text-center max-w-screen-lg mx-auto">
        Versatile in web development with expertise in frontend and Capable of
        designing and implementing efficient backend architectures, database
        management, and collaborative tools. Proficient in creating responsive
        designs, implementing secure authentication, and optimizing user
        experiences.
      </p>
      <div className="grid w-full gap-8 md:gap-14 grid-cols-2 sm:grid-cols-3">
        {skillMeta.map(({ title, description, skills }) => (
          <div className="flex flex-col sm:flex-row">
            <div>
              <h6 className="mb-1 font-semibold leading-5 text-base lg:text-lg text-primary">
                {title}
              </h6>
              <p className="mb-3 text-xs md:text-sm text-text-secondary">
                {description}
              </p>
              <ul className="mb-4 ml-1 space-y-2">
                {skills.map((skill) => (
                  <li className="flex items-center text-sm">
                    <span className="mr-1">
                      <svg
                        className="w-5 h-5 mt-px text-primary"
                        stroke="currentColor"
                        viewBox="0 0 52 52"
                      >
                        <polygon
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                          points="29 13 14 29 25 29 23 39 38 23 27 23"
                        />
                      </svg>
                    </span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
