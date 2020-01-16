import React, { useEffect, useState } from "react";
import "./styles.css";
import Text from "./component/Text";
import ThemeToggler from "./component/ThemeToggler";
import ThemeButton from "./component/ThemeButton";
import ThemeContext from "./context/ThemeContext";
import AppTheme from "./theme/Colors";

const App = () => {
  const themeHook = useState("light");
  const currentTheme = AppTheme[themeHook[0]];
  useEffect(() => {
    console.log(themeHook, currentTheme);
  }, [themeHook, currentTheme]);

  return (
    <ThemeContext.Provider value={themeHook}>
      <div style={{ backgroundColor: currentTheme.backgroundColor }}>
        <ThemeToggler />
        <Text />
        <ThemeButton />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
