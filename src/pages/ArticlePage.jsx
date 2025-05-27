import Layout from "../components/Layout";
import { useNavigate, useParams } from "react-router-dom";
import articles from "../constants/articles";
import SectionHeader from "../components/SectionHeader";
import Button from "../components/Button";
import ArticleDetail from "../components/ArticleDetail";

const ArticlePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const article = articles?.find((article) => +article.id === +id);

  console.log("article", [article]);

  const handleBackClick = () => navigate(-1);

  return (
    <Layout>
      {!article ? (
        <section className="min-w-full min-h-[calc(100vh-76px)] grid place-content-center">
          <SectionHeader title={"Article not found!"} />
        </section>
      ) : (
        <section className="pt-12">
          <ArticleDetail article={article} />
          <div className="w-full mx-auto mb-8 text-center">
            <Button onClick={handleBackClick}>Back</Button>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ArticlePage;
