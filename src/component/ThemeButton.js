import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const ThemeButton = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  const onClickHandler = () => {
    console.log();
    setThemeMode(themeMode === "light" ? "dark" : "light");
  };
  return <button onClick={onClickHandler}>Change theme</button>;
};

export default ThemeButton;
