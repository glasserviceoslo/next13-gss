import { useState } from 'react';

const useVisibility = () => {
  const [isVisible, setIsVisible] = useState(false);

  return {
    isVisible,
    toggle: () => setIsVisible((prev) => !prev),
  };
};

export default useVisibility;
