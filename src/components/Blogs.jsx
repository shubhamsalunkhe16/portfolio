import React, { useState, useContext } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  vscDarkPlus,
  gruvboxLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { ThemeContext } from "../context/ThemeContext";
import SectionHeader from "./SectionHeader";
import { Navigation2 } from "lucide-react";
import Button from "./Button";
import blogs from "../constants/blogs";

const RenderContentList = ({ content }) => {
  return (
    <div className="step-by-step-explanation">
      {content?.map((step, index) => (
        <dl key={index} className="step">
          <dt className="flex gap-2 items-center pt-3 pb-1">
            <Navigation2 className="h-5 w-5 fill-primary text-primary rotate-90" />
            <p className="heading-md">{step?.point}:</p>
          </dt>
          <dd className="para-md mb-4">{step?.details}</dd>
        </dl>
      ))}
    </div>
  );
};

const Blogs = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";
  const BLOGS_TO_LOAD = 2;
  const [visiblePosts, setVisiblePosts] = useState(BLOGS_TO_LOAD);

  const loadMorePosts = () => {
    setVisiblePosts((prev) => prev + BLOGS_TO_LOAD);
  };

  return (
    <div id="blogs" data-aos="fade-up">
      <SectionHeader title="BLOGS" borderTop className={"text-left"} />
      <div class="grid grid-cols-1 divide-y">
        {blogs.slice(0, visiblePosts).map((blog) => (
          <div
            key={blog.title}
            className="w-full sm:w-5/6 mx-auto [&:not(:first-child)]:py-4 sm:py-8"
          >
            <h2 className="heading-4xl mb-2">{blog.title}</h2>
            <p className="time mb-8 text-primary">{blog.date}</p>
            {blog.sections.map((section, secIndex) => (
              <div key={secIndex} className="mb-4">
                {section.heading && (
                  <h3 className="heading-xl mt-8">{section.heading}</h3>
                )}
                {Array.isArray(section.content) ? (
                  <RenderContentList content={section.content} />
                ) : (
                  <p className="para-md my-2">{section.content}</p>
                )}

                {section.code && (
                  <SyntaxHighlighter
                    language="javascript"
                    style={isDark ? vscDarkPlus : gruvboxLight}
                  >
                    {section.code}
                  </SyntaxHighlighter>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      {visiblePosts < blogs.length && (
        <div className="w-full mx-auto mb-8 text-center">
          <Button onClick={loadMorePosts}>Load More</Button>
        </div>
      )}
    </div>
  );
};

export default Blogs;
