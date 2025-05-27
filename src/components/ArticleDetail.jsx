import { useContext } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  vscDarkPlus,
  gruvboxLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { ThemeContext } from "../context/ThemeContext";
import { BookOpenText, CalendarDays, Navigation2 } from "lucide-react";
import calculateReadingTime from "../utils/calculateReadingTime";

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

const ArticleDetail = ({ article }) => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";
  return (
    <div
      key={article.title}
      className="w-full sm:w-5/6 mx-auto first:pt-0 last:pb-0 py-8"
    >
      <h2 className="heading-4xl mb-2">{article.title}</h2>
      <p className="time mb-8 text-primary flex items-center gap-4">
        <p className="flex items-center gap-1">
          <CalendarDays className="w-4" />
          {article.date}
        </p>
        <p>●</p>
        <p className="flex items-center gap-1">
          <BookOpenText className="w-4" />
          {calculateReadingTime(JSON.stringify(article))} min read
        </p>
      </p>
      {article.sections.map((section, secIndex) => (
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
  );
};

export default ArticleDetail;
