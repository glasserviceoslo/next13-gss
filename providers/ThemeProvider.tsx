'use client';

import { getLocalState, saveToLocalState } from 'lib/localStorage';
import React from 'react';

interface ThemeProps {
  isDarkTheme: boolean;
  toggleDarkTheme: () => void;
}

const ThemeContext = React.createContext<ThemeProps>({
  isDarkTheme: getLocalState(),
  toggleDarkTheme: () => {},
});

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(getLocalState());

  const toggleDarkTheme = React.useCallback(() => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    saveToLocalState(newTheme);
  }, [isDarkTheme]);

  const contextValue = React.useMemo(
    () => ({
      isDarkTheme,
      toggleDarkTheme,
    }),
    [isDarkTheme, toggleDarkTheme],
  );

  const themeClass = isDarkTheme ? 'dark' : 'light';

  return (
    <ThemeContext.Provider value={contextValue}>
      <html lang="nb" className={themeClass}>
        {children}
      </html>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => React.useContext(ThemeContext);
