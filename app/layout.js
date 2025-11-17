export const metadata = {
  title: 'big Christmas tree',
  description: 'A luxury black landing page with a grand Christmas tree',
};

import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
