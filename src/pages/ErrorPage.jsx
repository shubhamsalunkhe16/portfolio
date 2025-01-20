import React from "react";
import Layout from "../components/Layout";
import SectionHeader from "../components/SectionHeader";

const ErrorPage = () => {
  return (
    <Layout>
      <section className="min-w-full min-h-[calc(100vh-76px)] grid place-content-center">
        <SectionHeader title={"404 : Page Not Found"} />
      </section>
    </Layout>
  );
};

export default ErrorPage;
