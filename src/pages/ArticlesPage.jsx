import { useMemo } from "react";
import Layout from "../components/Layout";
import articles from "../constants/articles";
import SectionHeader from "../components/SectionHeader";
import { useNavigate, useSearchParams } from "react-router-dom";
import navConstants from "../constants/navConstants";
import ArticleCard from "../components/ArticleCard";
import Button from "../components/Button";

const ArticlesPage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const titleFilter = searchParams.get("title")?.toLowerCase() || "";

  const filteredArticles = useMemo(() => {
    return articles?.filter((item) => {
      const matchesTitle = titleFilter
        ? item?.title?.toLowerCase()?.includes(titleFilter)
        : true;

      return matchesTitle;
    });
  }, [titleFilter, articles]);

  const handleTitleFilterChange = (value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("title", value);
    } else {
      params.delete("title");
    }
    setSearchParams(params);
  };

  const handleClick = (event) => {
    if (event.target && event.target.classList.contains("readMoreLink")) {
      const articleId = event.target.getAttribute("data-id");
      navigate(`${navConstants.ARTICLES}/${articleId}`);
    }
  };

  const resetFilters = () => {
    setSearchParams({});
  };

  return (
    <Layout>
      <section className="pb-8">
        <div id="articles" data-aos="fade-up">
          <SectionHeader title="ARTICLES" className={"text-left"} />

          <div className="mb-6 flex flex-col md:flex-row gap-6">
            {/* Title Filter */}
            <input
              type="text"
              placeholder="Filter by title"
              className={`border ${
                !!titleFilter ? "border-primary" : "border-text-primary"
              } rounded p-2 flex-1 bg-bg-primary text-text-primary focus-visible:border-primary focus-visible:outline-none`}
              value={titleFilter || ""}
              onChange={(e) => handleTitleFilterChange(e.target.value)}
            />

            <Button className="max-w-fit" onClick={resetFilters}>
              Reset Filters
            </Button>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
            onClick={handleClick}
          >
            {filteredArticles.length ? (
              filteredArticles.map((article) => <ArticleCard {...article} />)
            ) : (
              <p className="para-md mt-3">No matching results found.</p>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ArticlesPage;
