import React from 'react'
import logo from '@/public/images/Logo_png.png'
// import backgroundVideo from '@/public/videos/header_background_video.mp4'
import Image from 'next/image'

export default function Header() {
    return (
        <div>
            {/* <div className='xl:px-6 lg:px-10 md:px-2 sm:px-4 px-0 xl:pt-10 lg:pt-10 md:pt-9 sm:pt-8 pt-6 2xl:w-[76%] xl:w-[95%] mx-auto'> */}
                {/* <Image src={logo} alt='logo' placeholder='blur' className='xl:w-[9%] lg:w-[21%] md:w-[26%] sm:w-[29%] w-[31%] mx-auto xl:mb-10 md:mb-10 sm:mb-9 mb-8' /> */}
                <Image src={logo} alt='logo' placeholder='blur' className='xl:w-[8%] lg:w-[11%] md:w-[15%] sm:w-[19%] w-[16%] mx-auto xl:mb-5 md:mb-5 sm:mb-8 mb-3' />


                <p className='2xl:text-[42px] xl:text-[42px] lg:text-[42px] md:text-4xl sm:text-2xl text-xl font-semibold 2xl:w-[85%]  w-full mx-auto text-center 2xl:leading-[1.1] xl:leading-[1.1] lg:leading-[1.1] leading-[1.2] px-3'>Help us feed thousands of families who are struggling every day.</p>
            {/* </div> */}

            <div className="relative w-[100%] lg:mt-2 mx-auto md:h-[600px] h-[365px]">
                <video
                    className="absolute md:top-6 top-3 left-0 w-full h-full object-cover"
                    src="/videos/header_background_video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                />
            </div>


            {/*  <div className="aspect-w-16 aspect-h-9 xl:mt-8 lg:mt-8 md:mt-6 mt-4">
                <iframe src="https://www.youtube.com/embed/S7ePoM98uf0?si=F4obWwFZKLOG7MZd" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen
                className="w-full h-full"
                ></iframe> 
            </div> */}
        </div>
    )
}
