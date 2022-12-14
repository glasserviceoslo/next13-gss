'use client';

import riveWASMResource from '@rive-app/canvas/rive.wasm';
import { RuntimeLoader, useRive } from '@rive-app/react-canvas';

RuntimeLoader.setWasmUrl(riveWASMResource);

const Rive = () => {
  const { RiveComponent, rive } = useRive({
    src: '/mobile.riv',
    autoplay: true,
  });

  return (
    <div className="h-96 w-96">
      <RiveComponent />
    </div>
  );
};

export default Rive;
