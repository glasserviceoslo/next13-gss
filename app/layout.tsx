import 'tailwindcss/tailwind.css';

import Navbar from 'components/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-white text-black">
        <header>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
