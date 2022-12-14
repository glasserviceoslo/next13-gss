import 'styles/global.css';

import Calendar from 'components/Calendar';
import Navbar from 'components/Navbar';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="nb">
      <head />
      <body className="bg-white text-black">
        <header>
          <Navbar />
        </header>
        <Calendar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
