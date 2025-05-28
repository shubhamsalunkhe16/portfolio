import { useContext } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  vscDarkPlus,
  gruvboxLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import calculateYearsFrom from "../utils/calculateYearsFrom";
import { ThemeContext } from "../context/ThemeContext";
import userMeta from "../constants/userMeta";

const CodeSnippet = () => {
  const { theme } = useContext(ThemeContext);
  const { journeyStartDate } = userMeta;

  const isDark = theme === "dark";

  const codeExample = `import "./App.css";

const App = () => {
  const userMeta = {
    fullName: "Shubham Bhagwan Salunkhe",
    designation: "Full Stack Developer",
    experienceYears: ${Math.round(calculateYearsFrom(journeyStartDate))},
    isEngineer: true,
    salary: undefined,
    skills: ["React", "Redux", "Next.js", "Express.js", "Tailwind CSS" , "Responsive UI", "Scalable Architecture", "Mentorship"]
    experience: [
      "Led development of AI-Based Content Creation Platform for global brands.",
      "Built full-stack RAG-based Social Media Scraper & Analyzer.",
      "Developed Web-Based Music Streaming Platform with advanced features.",
      "Contributed to React Native educational mobile app."
    ],
  };

  return (
    <div className="App">
      <MyProfile {...data} />
    </div>
  );
};

export default App;`;

  return (
    <SyntaxHighlighter
      language="javascript"
      style={isDark ? vscDarkPlus : gruvboxLight}
      className="rounded-xl p-6 overflow-x-auto"
    >
      {codeExample}
    </SyntaxHighlighter>
  );
};

export default CodeSnippet;
