import React, { useContext } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  vscDarkPlus,
  gruvboxLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import calculateYearsFrom from "../utils/calculateYearsFrom";
import { ThemeContext } from "../context/ThemeContext";

const CodeSnippet = () => {
  const { theme } = useContext(ThemeContext);

  const isDark = theme === "dark";

  const codeExample = `import "./App.css";

const App = () => {
  const userMeta = {
    fullName: "Shubham Bhagwan Salunkhe",
    title: "Full Stack Developer",
    experienceYears: ${calculateYearsFrom("2021-09-13")},
    isEngineer: true,
    salary: undefined,
    skills: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React", "Git"]
    experience: [
      "Senior Frontend Developer at GoPhygital Private Limited.",
      "AI-Based Content Creation Platform for top-tier clients.",
      "Developed Music Streaming Platform."
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