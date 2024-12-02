import React, { useContext } from "react";
import { Moon, Sun } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeBtn = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const isDark = theme === "dark";

  return (
    <div
      onClick={toggleTheme}
      className={`flex items-center cursor-pointer transition-transform duration-500 ${
        isDark ? "rotate-0" : "rotate-180"
      }`}
    >
      {isDark ? (
        <Moon className="h-6 w-6 text-primary rotate-0 transition-all" />
      ) : (
        <Sun className="h-6 w-6 text-primary rotate-0 transition-all" />
      )}
    </div>
  );
};

export default ThemeBtn;
