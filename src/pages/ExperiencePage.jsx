import React from "react";
import Layout from "../components/Layout";
import Experience from "../components/Experience";
import userMeta from "../constants/userMeta";

const ExperiencePage = () => {
  const { experiences } = userMeta;
  return (
    <Layout>
      <section className="pb-8">
        <Experience experiences={experiences} />
      </section>
    </Layout>
  );
};

export default ExperiencePage;
