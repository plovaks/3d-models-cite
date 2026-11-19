
import Image from 'next/image';
import printImg from '../public/printImage.png'
import logo from "../public/logo.png"
import desktopLogo from "../public/desktopLogo.svg"

import './globals.css'
export default function Home() {
  return (
    <div>
       <nav className='py-[0.6rem] text-[#606060] font-semibold flex justify-between items-center lg: px-[2.5rem]'>
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
          <li>3D MODELS</li>
          <li>ABOUT</li>
        </ul>
      </nav>
      <div className='lg:flex justify-center items-center gap-[6.25rem]'>
        <div className='py-[0.6rem] px-5 lg:px-[2.5rem]'>
       
          <main className='lg:max-w-[37rem]'>
            <div className="my-[2.5rem] flex flex-col gap-[2.5rem]" >
              <p className='hidden lg:block font-medium'>Your go-to platform for 3D printing files</p>
              <h1 className='text-4xl font-bold'>Discover what’s possible with 3D printing</h1>
              <p className='text-2xl font-normal'>Join our community of creators and explore a vast library of user-submitted models.</p>
              
            </div>
            <button
              className='font-semibold text-xl p-[0.75rem] border-2 mb-[2.5rem]'
            >BROWSE MODELS</button>
            
          </main>
        </div>
        <Image
            src={printImg}
            alt='Изображение продукции'
            className='w-[100%] object-cover rounded-none  self-center [mask-image:linear-gradient(to_bottom,transparent_0%,black_50%)] lg:mask-none lg:max-w-[37rem]  lg:rounded-[50%]'
          />
      </div>
      
    </div>
    
  );
}
