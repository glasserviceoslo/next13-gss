import { useMediaQuery } from 'hooks';
import { getLocalState, saveToLocalState } from 'lib/localStorage';
import { useEffect, useState } from 'react';

const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)';

interface UseDarkModeOutput {
  isDarkMode: boolean;
  toggle: () => void;
  enable: () => void;
  disable: () => void;
}

const useDarkMode = (): UseDarkModeOutput => {
  const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY);
  const [isDarkMode, setDarkMode] = useState<boolean>(
    getLocalState() ?? isDarkOS ?? false,
  );

  // Update darkMode if os prefers changes
  useEffect(() => {
    setDarkMode(isDarkOS);
  }, [isDarkOS]);

  useEffect(() => {
    isDarkMode
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  }, [isDarkMode]);

  const toggle = () => {
    setDarkMode((prev) => !prev);
    saveToLocalState(isDarkMode);
  };

  const enable = () => {
    setDarkMode(true);
    saveToLocalState(true);
  };

  const disable = () => {
    setDarkMode(false);
    saveToLocalState(false);
  };
  return {
    isDarkMode,
    toggle,
    enable,
    disable,
  };
};

export default useDarkMode;
