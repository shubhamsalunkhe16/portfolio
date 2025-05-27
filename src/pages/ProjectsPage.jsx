import Layout from "../components/Layout";
import Projects from "../components/Projects";
import userMeta from "../constants/userMeta";

const ProjectsPage = () => {
  const { projects } = userMeta;
  return (
    <Layout>
      <section className="pb-8">
        <Projects projects={projects} />
      </section>
    </Layout>
  );
};

export default ProjectsPage;
