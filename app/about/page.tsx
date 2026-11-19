import logo from "../../public/logo.png"
import desktopLogo from "../../public/desktopLogo.svg"
import printImg from "../../public/printImage.png"
import stackLogo from "../../public/Stack.svg"
import globeLogo from "../../public/GlobeSimple.svg"
import flagLogo from "../../public/Flag.svg"
import watermark from "../../public/watermark.svg"
import Image from "next/image"

export default function About(){
    return (
        <>
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
                <li>3D MODELS</li>
                <li className="text-[#f7742e] underline underline-offset-8 decoration-inherit ">ABOUT</li>
                </ul>
            </nav>

            <main className="px-[1.25rem] pb-[1.25rem]">
                <div className="lg:flex lg:pt-[5rem] lg:items-center lg: gap-[6.25rem] lg:justify-center">
                    <Image
                    src={printImg}
                    alt="Изображение продукции"
                    className="w-[100%] self-center lg:max-w-[38rem]"
                    />
                    <div className="flex flex-col gap-[1.25rem] lg:max-w-[38rem]">
                        <p className="uppercase font-medium">About printforge</p>
                        <h2 className="font-bold text-[2.5rem] leading-[100%]">Empowering makers worldwide</h2>
                        <p className="font-normal text-2xl">Founded in 2023, PrintForge has quickly become the go-to platform for 3D printing enthusiasts, makers, and professional designers to share and discover amazing STL files for 3D printing.</p>
                        <p className="font-normal text-2xl">Our mission is to foster a vibrant community where creativity meets technology, enabling anyone to bring their ideas to life through 3D printing.</p>
                    </div>
                </div>
                

                <hr className="my-[1.25rem] border-[#DDDDDD] -mx-[1.25rem]"/>

                <div className="flex gap-[3rem] flex-col lg:flex-row lg:justify-center">
                    <div className="lg:max-w-[21rem]">
                        <div className="flex items-center gap-[0.4rem] mb-[1.2rem]" >
                            <Image
                                src={stackLogo}
                                alt=""
                                width={32}
                            />
                            <h2 className="font-bold">100K+ Models</h2>
                        </div>
                        <p>Access our vast library of community-created 3D models, from practical tools to artistic creations.</p>
                    </div>
                        
                    <div className="lg:max-w-[21rem]">
                        <div className="flex items-center gap-[0.4rem] mb-[1.2rem]">
                            <Image
                                src={globeLogo}
                                alt=""
                            />
                            <h2 className="font-bold">Active Community</h2>
                        </div>
                        <p>Join thousands of makers who share tips, provide feedback, and collaborate on projects.</p>
                    </div>
                       
                    <div className="lg:max-w-[21rem]">
                        <div className="flex items-center gap-[0.4rem] mb-[1.2rem]">
                            <Image
                                src={flagLogo}
                                alt=""
                            />
                            <h2 className="font-bold">Free to Use</h2>
                        </div>
                        <p>Most models are free to download, with optional premium features for power users.</p>
                    </div>
                    
                </div>

                 <hr className="my-[1.25rem] border-[#DDDDDD] -mx-[1.25rem]"/>

                <div className="flex flex-col gap-[1.25rem] lg:max-w-[50rem] lg:justify-self-center">
                    <h2 className="font-bold text-[2.5rem]">Our vision</h2>
                    <p className="font-normal text-2xl">At PrintForge, we believe that 3D printing is revolutionizing the way we create, prototype, and manufacture. Our platform serves as a bridge between designers and makers, enabling the sharing of knowledge and creativity that pushes the boundaries of what's possible with 3D printing.</p>
                    <hr className="my-[1.25rem] w-[15rem] self-center"/>
                    <p className="font-normal text-2xl">Whether you're a hobbyist looking for your next weekend project, an educator seeking teaching materials, or a professional designer wanting to share your creations, PrintForge provides the tools and community to support your journey in 3D printing.</p>
                </div>
                <Image
                    src={watermark}
                    alt=""
                    className="hidden lg:block lg:justify-self-center lg:w-[8rem] lg:py-[5.6rem]"
                />
            </main>
        </>
    )
}