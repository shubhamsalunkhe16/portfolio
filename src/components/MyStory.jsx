import React from "react";
import SectionHeader from "./SectionHeader";

const MyStory = () => {
  return (
    <section id="my_story" data-aos="fade-up">
      <SectionHeader title="My Story" className={"text-left"} borderTop />
      <div className="flex gap-8 md:gap-16 flex-col items-center lg:flex-row my-8 md:my-16">
        <div className="flex-[2.5] ">
          <img
            src="images/shubham1.jpg"
            alt="shubham salunkhe"
            className="rounded-md max-w-lg w-full"
          />
        </div>
        <div className="flex-[3]">
          <p className="text-sm md:text-base my-4 text-center min-[950px]:text-left">
            I’m Shubham Bhagwan Salunkhe, a dedicated Frontend Developer with
            over 3+ years of experience in building innovative, scalable, and
            user-centered web applications. After graduating in 2019, I’ve honed
            my skills in both frontend and backend technologies, working on
            projects that integrate AI, optimize performance, and enhance user
            experience. At GoPhygital, I’ve contributed significantly to the
            development of AI-driven platforms for global brands like Mastercard
            and Vodafone, with a focus on cutting-edge features like
            text-to-speech functionality and real-time content creation tools.
            My passion for coding is matched by my commitment to team
            collaboration, having successfully mentored colleagues and
            streamlined development processes. Whether developing custom
            ECommerce solutions or creating dynamic, interactive user
            interfaces, I am always driven by the goal to build seamless,
            efficient, and impactful digital experiences. I believe in
            continuous learning and strive to deliver high-quality solutions
            that address real-world challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MyStory;
