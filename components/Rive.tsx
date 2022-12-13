'use client';

import { useRive } from '@rive-app/react-canvas';

const Rive = () => {
  const { RiveComponent, rive } = useRive({
    src: '/GSS.riv',
    autoplay: true,
  });

  return (
    <div className="h-96 w-96">
      <RiveComponent />
    </div>
  );
};

export default Rive;
