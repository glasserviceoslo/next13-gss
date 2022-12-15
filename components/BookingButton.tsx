'use client';

import { useVisibility } from 'hooks';

import { ButtonPrimary } from './shared';

const BookingButton = () => {
  const { toggle } = useVisibility();

  return (
    <ButtonPrimary ariaLabel="book-appointment-button" handleClick={toggle}>
      Gratis Befaring
    </ButtonPrimary>
  );
};

export default BookingButton;
