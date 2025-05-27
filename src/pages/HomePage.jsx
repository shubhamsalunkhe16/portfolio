import Hero from "../components/Hero";
import MyStory from "../components/MyStory";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Layout from "../components/Layout";
import Skills from "../components/Skills";
import Resources from "../components/Resources";
import Articles from "../components/Articles";
import userMeta from "../constants/userMeta";
import resources from "../constants/resources";
import articles from "../constants/articles";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import navConstants from "../constants/navConstants";
import Testimonials from "../components/Testimonials";

const HomePage = () => {
  const { experiences, projects } = userMeta;
  const navigate = useNavigate();

  const handleSeeMoreClick = (e) => {
    console.log("e", e.target?.dataset);
    const section = e.target?.dataset?.section;
    if (!!section) {
      navigate(section);
    }
  };

  return (
    <Layout>
      <div className="grid grid-cols-1 gap-10 divide-y divide-text-primary pt-4 pb-8">
        <Hero />
        <MyStory />
        <Skills />
        <Testimonials />
        <section>
          <Experience experiences={experiences?.slice(0, 2)} />
          {experiences?.length > 2 && (
            <div className="w-full mx-auto mt-8 text-center">
              <Button
                data-section={navConstants.EXPERIENCE}
                onClick={handleSeeMoreClick}
              >
                See More
              </Button>
            </div>
          )}
        </section>
        <section>
          <Projects projects={projects?.slice(0, 2)} />
          {projects?.length > 2 && (
            <div className="w-full mx-auto mt-8 text-center">
              <Button
                data-section={navConstants.PROJECTS}
                onClick={handleSeeMoreClick}
              >
                See More
              </Button>
            </div>
          )}
        </section>
        <section>
          <Resources resources={resources?.slice(0, 6)} />
          {resources?.length > 6 && (
            <div className="w-full mx-auto mt-8 text-center">
              <Button
                data-section={navConstants.RESOURCES}
                onClick={handleSeeMoreClick}
              >
                See More
              </Button>
            </div>
          )}
        </section>
        <section>
          <Articles articles={articles?.slice(0, 2)} />
          <div className="w-full mx-auto mt-4 text-center">
            <Button
              data-section={navConstants.ARTICLES}
              onClick={handleSeeMoreClick}
            >
              See More
            </Button>
          </div>
        </section>
        <Contact />
      </div>
    </Layout>
  );
};

export default HomePage;
