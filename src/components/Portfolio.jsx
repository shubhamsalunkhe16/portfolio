import React from "react";
import Header from "./Header";
import Experience from "./Experience";
import Skills from "./Skills";
import Achievements from "./Achievements";
import Education from "./Education";
import Projects from "./Projects";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import GetInTouch from "./GetInTouch";
import ScrollToTopButton from "./ScrollToTopButton";

function Portfolio() {
  return (
    <div className="bg-bg-primary text-text-primary">
      <div className="max-w-screen-2xl mx-auto">
        <Navbar />
        <div className="pt-[100px] pb-4 w-[80%] mx-auto">
          <Hero />
          {/* <Header /> */}
          {/* <ProfessionalSummary />
        <Experience />
        <Skills />
        <Achievements />
        <Education /> */}
          <Projects />
          <GetInTouch />
          <Footer />
          <ScrollToTopButton />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
