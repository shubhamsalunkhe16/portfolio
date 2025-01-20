import React from "react";
import SectionHeader from "./SectionHeader";
import ArticleCard from "./ArticleCard";

const Articles = ({ articles }) => {
  return (
    <div id="articles" data-aos="fade-up">
      <SectionHeader title="ARTICLES" className={"text-left"} />
      <div class="grid grid-cols-1 divide-y divide-text-primary">
        {articles?.map((article) => (
          <ArticleCard article={article} />
        ))}
      </div>
    </div>
  );
};

export default Articles;
