import React from "react";
import Hero from "../components/Hero";
import MyStory from "../components/MyStory";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Layout from "../components/Layout";
import Skills from "../components/Skills";
import Resources from "../components/Resources";
import Blogs from "../components/Blogs";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <MyStory />
      <Skills />
      <Experience />
      <Projects />
      <Resources />
      <Blogs />
      <Contact />
    </Layout>
  );
};

export default HomePage;
