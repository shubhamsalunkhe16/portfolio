import { createContext, useState, useEffect } from "react";
import themeConfig from "../assets/theme/theme.json";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    const root = document.documentElement;
    const selectedTheme = themeConfig[theme];
    Object.keys(selectedTheme).forEach((key) => {
      root.style.setProperty(key, selectedTheme[key]);
    });
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      let newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
