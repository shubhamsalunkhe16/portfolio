import Chip from "./Chip";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Gem } from "lucide-react";

const ExperienceProjectCard = ({
  projectTitle,
  imageArr,
  description,
  keywords,
}) => {
  return (
    <div
      data-aos="fade-up"
      className="mx-auto pt-6 pb-8 last:pb-0 flex flex-col gap-5 last:border-b-0 border-b-[1px] border-text-primary"
    >
      <h2 className="heading-xl">{projectTitle}</h2>
      <ul className="w-full space-y-3 text-sm md:text-base text-text-secondary lg:max-w-none">
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
      <div className="flex gap-3 items-center flex-wrap">
        <span className="text-base font-bold">keywords :</span>
        {keywords?.map((tool) => (
          <Chip title={tool} key={tool} />
        ))}
      </div>
      {imageArr?.length > 0 && (
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
      )}
    </div>
  );
};

export default ExperienceProjectCard;
