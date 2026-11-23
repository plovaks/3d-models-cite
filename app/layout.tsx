"use client"
import { Montserrat_Alternates } from 'next/font/google';
import './globals.css';
import Image from 'next/image';
import logo from "../public/logo.png"
import desktopLogo from "../public/desktopLogo.svg"
import { usePathname } from 'next/navigation';

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
}) 

  
{
  const pathName = usePathname();
  const isHomePage = pathName === '/';
  const isAboutPage = pathName.startsWith('/about');

  return (
    <html lang="ru" className={montserratAlternates.variable}>
      
      <body>
        <header>
        <nav className='py-[0.6rem] text-[#606060] font-semibold flex justify-between items-center lg: px-[2.5rem] lg:fixed lg:w-[100%] lg:top-0 lg:left-0 lg:bg-[#FFFFFF]'>
          <Image
            src={logo}
            alt='Логотип'
            className='lg:hidden'
          />
          <Image
            src={desktopLogo}
            alt='Логотип'
            className='hidden lg:inline w-[15rem]'
          />
          <ul className='flex gap-[2.5rem] '>
            <li >3D MODELS</li>
            <li className={`${isAboutPage ? "text-[#f7742e] underline underline-offset-8 decoration-inherit" : ""} `}>ABOUT</li>
          </ul>
          </nav>
      </header>
        {children}
        </body>
    </html>
  );
}



