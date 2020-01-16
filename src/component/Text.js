import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import AppTheme from "../theme/Colors";

const Text = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  return <h1 style={{ color: currentTheme.textColor }}>{theme}</h1>;
};

export default Text;
