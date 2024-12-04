import React from "react";
import SectionHeader from "./SectionHeader";

const MyStory = () => {
  return (
    <section id="my_story" data-aos="fade-up">
      <SectionHeader title="Test" className={"text-left"} borderTop />
      <div className="flex gap-16 flex-col items-center lg:flex-row mt-4">
        <div className="flex-[2] ">
          <img
            src="/images/test.jpg"
            alt="shubham salunkhe"
            className="rounded-sm max-w-lg w-full"
          />
        </div>
        <div className="flex-[3]">
          <p className="text-sm md:text-base my-4 text-center min-[950px]:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            dignissimos, nostrum accusamus eveniet illum expedita necessitatibus
            sunt at magni nulla, cumque temporibus nihil dolor reprehenderit
            non! Deleniti laborum assumenda delectus, beatae ratione nemo
            incidunt debitis, sequi molestias nulla porro, est labore esse!
            Nesciunt sequi temporibus, porro dignissimos eius nostrum dolorem
            amet unde voluptatum soluta exercitationem harum neque deserunt
            tempora ex non aspernatur. Deleniti aliquid nam cupiditate fuga
            consequuntur possimus cum ducimus ea, qui vero officia laborum vitae
            dicta quis, repellendus nesciunt. Error illum facere asperiores
            maiores odio consequatur dolorem ipsum. Eum exercitationem illum
            quas voluptatibus ex quasi recusandae incidunt sint, totam veniam
            excepturi libero sequi sit! Quibusdam accusantium inventore
          </p>
        </div>
      </div>
    </section>
  );
};

export default MyStory;
