'use client';

import { useTheme } from 'providers/ThemeProvider';

import { MoonIcon, SunIcon } from './svgs';

const ToggleThemeButton = () => {
  const { isDarkTheme, toggleDarkTheme } = useTheme();

  return (
    <button
      id="theme-toggle"
      type="button"
      className="ml-4 rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
      onClick={() => toggleDarkTheme()}
    >
      {isDarkTheme ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default ToggleThemeButton;
