import userMeta from "../constants/userMeta";
import Button from "./Button";
import Chip from "./Chip";
import SectionHeader from "./SectionHeader";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { Gem } from "lucide-react";

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
          ({ title, subtitle, description, imageArr, tools, date }) => (
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
                  <p className="text-base font-semibold leading-7 text-primary mt-2 flex justify-between">
                    {/* <span>{subtitle}</span>
                    <span>{date}</span> */}
                    {subtitle}&nbsp; ● &nbsp;{date}
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
              </div>
              <div className="w-[calc(100%-100px)] min-w-64 overflow-y-auto mx-auto">
                <Swiper navigation={true} modules={[Navigation]}>
                  {imageArr?.map((image) => (
                    <SwiperSlide>
                      <img
                        src={image}
                        alt="Product screenshot"
                        className="rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Experience;
