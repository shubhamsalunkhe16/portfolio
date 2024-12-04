import React from "react";
import CodeSnippet from "./CodeSnippet";
import Button from "./Button";
import userMeta from "../constants/userMeta";
import DownloadPDF from "../utils/DownloadPDF";

const Hero = () => {
  const { name, summary } = userMeta;

  return (
    <section
      className="flex justify-between items-center gap-16 max-[950px]:gap-10 flex-wrap flex-col min-[950px]:flex-row mb-8"
      data-aos="fade-up"
    >
      <div className="flex-1 text-text-primary flex flex-col gap-2 justify-center items-center min-[950px]:items-start">
        <h1 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold">
          Hi, I'm
        </h1>
        <h1 className="xl:text-7xl lg:text-6xl md:text-5xl text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E]">
          {name}
        </h1>
        <p className="text-sm md:text-base my-4 text-center min-[950px]:text-left">
          {summary}
        </p>
        <Button
          className="mt-2"
          onClick={() =>
            DownloadPDF("/shubham_resume.pdf", "shubham_resume.pdf")
          }
        >
          Download CV
        </Button>
      </div>
      <div className="flex-[1.25] overflow-x-auto w-full">
        <CodeSnippet />
      </div>
    </section>
  );
};

export default Hero;
