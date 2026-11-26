"use client"
import { Montserrat_Alternates } from 'next/font/google';
import type { RootLayoutProps } from './types';
import './globals.css';
import Image from 'next/image';
import logo from "../public/logo.png"
import desktopLogo from "../public/desktopLogo.svg"
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const montserratAlternates = Montserrat_Alternates({
  subsets: ['cyrillic', 'latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-montserrat',
});

export default function RootLayout({ children}: RootLayoutProps) 
  
{
  const pathName = usePathname();
  const isHomePage = pathName === '/';
  const isAboutPage = pathName.startsWith('/about');

  return (
    <html lang="ru" className={montserratAlternates.variable}>
      
      <body>
        <header>
        <nav className='py-[0.6rem] text-[#606060] font-semibold flex justify-between items-center lg: px-[2.5rem]  lg:w-[100%] lg:top-0 lg:left-0 lg:bg-[#FFFFFF]'>
          <Link href="/">
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
          </Link>
          
          <ul className='flex gap-[2.5rem] '>
           <li ><Link href="/3d-models">3D MODELS</Link></li> 
            <li className={`${isAboutPage ? "text-[#f7742e] underline underline-offset-8 decoration-inherit" : ""} `}> <Link href='/about'>ABOUT</Link></li>
          </ul>
          </nav>
      </header>
        {children}
        </body>
    </html>
  );
}



