import React from "react";
import CodeSnippet from "./CodeSnippet";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="flex justify-between items-center gap-16 max-[950px]:gap-10 flex-wrap flex-col min-[950px]:flex-row">
      <div className="flex-1 text-text-primary flex flex-col gap-2 justify-center items-center min-[950px]:items-start">
        <h1 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold">
          Hi, I'm
        </h1>
        <h1 className="xl:text-7xl lg:text-6xl md:text-5xl text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E]">
          Shubham
        </h1>
        <p className="text-sm md:text-base my-4 text-center min-[950px]:text-left">
          Full Stack Developer with 3+ years of experience in creating and
          developing innovative web applications. My background includes
          building AI-driven content platforms, contributing to music streaming
          services, and leading teams in high-impact projects.
        </p>
        <Button className="mt-2">Download CV</Button>
      </div>
      <div className="flex-[1.25] overflow-x-auto w-full">
        <CodeSnippet />
      </div>
    </div>
  );
};

export default Hero;
