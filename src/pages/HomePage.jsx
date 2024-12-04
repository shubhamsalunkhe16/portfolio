import React from "react";
import Hero from "../components/Hero";
import MyStory from "../components/MyStory";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Layout from "../components/Layout";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      {/* <MyStory /> */}
      <Experience />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default HomePage;
