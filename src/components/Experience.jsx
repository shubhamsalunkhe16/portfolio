import Chip from "./Chip";
import SectionHeader from "./SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Gem } from "lucide-react";

const Experience = ({ experiences }) => {
  return (
    <section
      section
      id="experience"
      className="overflow-hidden"
      data-aos="fade-up"
    >
      <SectionHeader title={"EXPERIENCE"} />
      <div className="mx-auto w-full">
        {experiences?.map(
          ({ title, subtitle, description, imageArr, tools, date }) => (
            <div
              key={title}
              data-aos="fade-up"
              className="w-full first:pt-0 last:pb-0 py-b pt-6"
            >
              <h2 className="heading-4xl">{title}</h2>
              <p className="text-base font-semibold text-primary mt-2">
                {subtitle}&nbsp; ● &nbsp;{date}
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
              <div className="my-5 flex gap-3 items-center flex-wrap">
                <span className="text-base font-bold">Tools :</span>
                {tools?.map((tool) => (
                  <Chip title={tool} key={tool} />
                ))}
              </div>
              <div className="w-[calc(100%-100px)] min-w-64 overflow-y-auto mx-auto">
                <Swiper navigation={true} modules={[Navigation]}>
                  {imageArr?.map((image) => (
                    <SwiperSlide>
                      <img
                        src={image}
                        alt="Product screenshot"
                        className="w-full rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 object-cover"
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
