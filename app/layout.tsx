import 'styles/global.css';

import Calendar from 'components/Calendar';
import Navbar from 'components/Navbar';
import { Suspense } from 'react';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="nb">
      <head />
      <body className="bg-white pt-16 text-black">
        <header>
          <Navbar />
        </header>
        <Suspense>
          <Calendar />
        </Suspense>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
