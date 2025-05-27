import SectionHeader from "./SectionHeader";
import userMeta from "../constants/userMeta";
import calculateYearsFrom from "../utils/calculateYearsFrom";

const MyStory = () => {
  const { myStory, journeyStartDate } = userMeta;
  return (
    <section id="my_story" data-aos="fade-up">
      <SectionHeader title="MY STORY" className={"text-left"} />
      <div className="flex gap-8 md:gap-16 flex-col items-center lg:flex-row">
        <div className="flex-[2.5] ">
          <img
            src="images/shubham1.jpg"
            alt="shubham salunkhe"
            className="rounded-md max-w-lg w-full"
          />
        </div>
        <div className="flex-[3]">
          <p className="text-sm md:text-base my-4 text-center min-[950px]:text-left">
            {myStory?.replace(
              "[experienceYears]",
              Math.round(calculateYearsFrom(journeyStartDate))
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MyStory;
