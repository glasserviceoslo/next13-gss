export const getLocalState = (): boolean => {
  if (typeof window === 'undefined') {
    return false;
  }

  try {
    const saved = localStorage.getItem('theme');

    if (!saved) {
      return false;
    }

    return saved === 'dark';
  } catch (err) {
    return false;
  }
};

export const saveToLocalState = (isDarkMode: boolean) => {
  try {
    const theme = isDarkMode ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
  } catch (err) {
    console.error(err);
  }
};
