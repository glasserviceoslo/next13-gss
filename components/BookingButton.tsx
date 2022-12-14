'use client';

import { useVisibility } from 'hooks';

const BookingButton = () => {
  const { toggle } = useVisibility();
  return (
    <button
      type="button"
      className="btn-primary hidden md:block"
      onClick={toggle}
    >
      Gratis Befaring
    </button>
  );
};

export default BookingButton;
