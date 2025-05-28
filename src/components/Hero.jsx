import CodeSnippet from "./CodeSnippet";
import Button from "./Button";
import userMeta from "../constants/userMeta";
import DownloadPDF from "../utils/DownloadPDF";
import calculateYearsFrom from "../utils/calculateYearsFrom";

const Hero = () => {
  const { name, summary, journeyStartDate } = userMeta;

  return (
    <section
      id="hero_section"
      className="flex justify-between items-center gap-16 max-[950px]:gap-2 flex-wrap flex-col min-[950px]:flex-row"
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
          {summary?.replace(
            "[experienceYears]",
            Math.round(calculateYearsFrom(journeyStartDate))
          )}
        </p>
        <div className="flex gap-1 flex-col [@media(min-width:350px)]:flex-row [@media(min-width:350px)]:gap-4">
          <Button className="mt-2">
            <a
              href="https://drive.google.com/file/d/1G01m8NMaT0Qe16ROhbcZMWBW5BZVTKAP/view?usp=drive_link"
              target="_blank"
            >
              Preview CV
            </a>
          </Button>
          <Button
            className="mt-2"
            onClick={() =>
              DownloadPDF("/shubham_salunkhe.pdf", "shubham_salunkhe.pdf")
            }
          >
            Download CV
          </Button>
        </div>
      </div>
      <div className="flex-[1.25] overflow-x-auto w-full">
        <CodeSnippet />
      </div>
    </section>
  );
};

export default Hero;
