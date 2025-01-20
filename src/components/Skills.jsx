import { Sparkle } from "lucide-react";
import userMeta from "../constants/userMeta";
import SectionHeader from "./SectionHeader";

const Skills = () => {
  const { skillMeta } = userMeta;
  return (
    <section id="skills" data-aos="fade-up" className=" mx-auto w-full">
      <SectionHeader title="SKILLS AND TOOLS" />
      <p className="text-sm md:text-base  mb-12 text-center max-w-screen-lg mx-auto">
        Versatile in web development with expertise in frontend development and
        a good understanding of backend architectures and database management.
        Skilled in creating responsive designs, implementing secure
        authentication, and optimizing user experiences.
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
              <ul
                className={`mb-4 ml-1 space-y-2 ${
                  title === "Frontend" ? "grid grid-cols-1 lg:grid-cols-2" : ""
                }`}
              >
                {skills.map((skill) => (
                  <li className="flex items-center text-sm">
                    <span className="mr-1">
                      <Sparkle className="w-4 text-primary" />
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
