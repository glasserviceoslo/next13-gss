'use client';

import 'styles/global.css';

import Navbar from 'components/Navbar';
import ThemeProvider from 'providers/ThemeProvider';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <html lang="nb">
        <head />
        <body className="bg-white text-black">
          <header>
            <Navbar />
          </header>
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
};

export default RootLayout;
