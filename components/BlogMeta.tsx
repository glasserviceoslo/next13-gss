/**
 * All the shared stuff that goes into <head> on `(blog)` routes, can be be imported by `head.tsx` files in the /app dir or wrapped in a <Head> component in the /pages dir.
 */
import { Partytown } from '@builder.io/partytown/react';
// import riveWASMResource from '@rive-app/canvas/rive.wasm';

export default function BlogMeta() {
  return (
    <>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      {/* <link
        rel="preload"
        href={riveWASMResource}
        as="fetch"
        crossOrigin="anonymous"
      /> */}
      <link
        rel="preload"
        href="/mobile.riv"
        as="fetch"
        crossOrigin="anonymous"
      />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
    </>
  );
}
