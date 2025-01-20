import React from "react";
import Layout from "../components/Layout";
import Resources from "../components/Resources";
import resources from "../constants/resources";

const ResourcesPage = () => {
  return (
    <Layout>
      <section className="pb-8">
        <Resources resources={resources} />
      </section>
    </Layout>
  );
};

export default ResourcesPage;
