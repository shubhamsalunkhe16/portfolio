import React from "react";
import Hero from "../components/Hero";
import MyStory from "../components/MyStory";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Layout from "../components/Layout";
import Skills from "../components/Skills";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <MyStory />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default HomePage;
