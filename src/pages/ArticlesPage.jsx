import React from "react";
import Layout from "../components/Layout";
import articles from "../constants/articles";
import { ChevronRight } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import { useNavigate } from "react-router-dom";
import navConstants from "../constants/navConstants";

const ArticlesPage = () => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    if (event.target && event.target.classList.contains("readMoreBtn")) {
      const articleId = event.target.getAttribute("data-id");
      navigate(`${navConstants.ARTICLES}/${articleId}`);
    }
  };

  return (
    <Layout>
      <section className="pb-8">
        <div id="articles" data-aos="fade-up">
          <SectionHeader title="ARTICLES" className={"text-left"} />
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
            onClick={handleClick}
          >
            {articles?.map((article) => (
              <div
                key={article.id}
                className="border border-text-primary rounded-md p-4"
              >
                <h3 className="heading-xl mb-2">{article.title}</h3>
                <p className="para-sm">{article.description}</p>
                <p
                  data-id={article?.id}
                  className="readMoreBtn inline-flex items-center mt-2 text-primary para-md cursor-pointer"
                >
                  Read More
                  <ChevronRight className="text-primary" />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ArticlesPage;
