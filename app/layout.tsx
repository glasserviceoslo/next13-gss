'use client';

import 'styles/global.css';

import Navbar from 'components/Navbar';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="nb">
      <head />
      <body className="bg-white text-black">
        <header>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
