import { Montserrat_Alternates } from 'next/font/google';
import './globals.css';

const montserratAlternates = Montserrat_Alternates({
  subsets: ['cyrillic', 'latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-montserrat',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={montserratAlternates.variable}>
      <body>{children}</body>
    </html>
  );
}
