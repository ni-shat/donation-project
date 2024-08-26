import React from 'react'
import logo from '@/public/images/logo.png'
import Image from 'next/image'

export default function Header() {
    return (
        <div>
            <Image src={logo} alt='logo' placeholder='blur' className='xl:w-[18%] lg:w-[21%] md:w-[26%] sm:w-[29%] w-[31%] mx-auto xl:mb-10 md:mb-10 sm:mb-9 mb-8' />
            
            <p className='2xl:text-[42px] xl:text-[42px] lg:text-[42px] md:text-4xl sm:text-2xl text-xl font-semibold 2xl:w-[85%]  w-full mx-auto text-center 2xl:leading-[1.1] xl:leading-[1.1] lg:leading-[1.1] px-3'>Help us feed thousands of families who are struggling every day.</p>


            <div className="aspect-w-16 aspect-h-9 xl:mt-8 lg:mt-8 md:mt-6 mt-4">
                <iframe src="https://www.youtube.com/embed/S7ePoM98uf0?si=F4obWwFZKLOG7MZd" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen
                className="w-full h-full"
                ></iframe>
            </div>
        </div>
    )
}
