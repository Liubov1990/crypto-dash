import React, { createContext, useCallback, useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import theme from "../styles/Theme";

enum ThemeEnum {
  DARK = "dark",
  LIGHT = "light",
}

export type ThemeContextType = {
  currentTheme: keyof DefaultTheme;
  switchTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  currentTheme: ThemeEnum.DARK,
  switchTheme: () => null,
});

export default function ThemeContextProvider({
  children,
}: React.PropsWithChildren): React.ReactElement {
  const [currentTheme, setCurrentTheme] = useState<keyof DefaultTheme>(
    ThemeEnum.DARK
  );
  const isDarkTheme = currentTheme === ThemeEnum.DARK;

  const switchTheme = useCallback((): void => {
    setCurrentTheme(isDarkTheme ? ThemeEnum.LIGHT : ThemeEnum.DARK);
  }, [setCurrentTheme, isDarkTheme]);

  const contextValue = {
    theme,
    currentTheme,
    switchTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme[currentTheme]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
