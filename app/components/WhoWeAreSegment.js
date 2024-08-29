import React from 'react'
import image6 from '@/public/images/whoWeAre_pic1.jpg'
import image7 from '@/public/images/cvrf.jpg'
import Image from 'next/image'

export default function WhoWeAreSegment() {
    return (
        <div className='xl:px-14 lg:px-10 md:px-2 sm:px-4 px-0 xl:py-20 lg:py-10 md:py-9 sm:py-8 py-6 2xl:w-[80%] xl:w-[90%] mx-auto'>
            <div className='w-full md:flex-row flex-col flex gap-12 justify-between'>

                <div className='xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-full w-full flex flex-col justify-center gap-6'>
                    <Image src={image7} alt='image' placeholder='blur' className='' />
                    <Image src={image6} alt='image' placeholder='blur' className='' />
                </div>

                <div className='flex flex-col gap-4 text-start font-semibold xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-full w-full px-2'>
                    <h3 className='text-4xl font-semibold text-red-950'>
                        WHO WE ARE
                    </h3>
                    <hr className='bg-gray-800 text-gray-800 h-[1px]' />

                    <p className='text-xl font-normal'>
                        <span className='text-2xl'>One Path Project</span> is committed to a 100% donation policy, dedicated to alleviating poverty and suffering both locally and globally. We provide essential aid including food, clean water, shelter, orphan sponsorships, and more to those in need, especially in the world's most impoverished regions.
                    </p>
                    <p className='text-xl font-normal'>
                        Through your generous support, we’ve been delivering life-saving relief – distributing food, water, and other essentials to vulnerable communities. We are determined to continue this vital work, but we need your help to reach even more people in desperate need.
                    </p>
                    <p className='text-xl font-normal'>
                        Right now, One Path Project is actively assisting refugees across the Middle East, many of whom have been displaced by war and are living in extreme hardship. Together, we can provide critical aid such as food, clean water, sponsorships for widows and orphans, education, and much more.
                    </p>
                    <p className='text-xl font-normal'>
                        Your support makes a direct impact. Join us in changing lives today.
                    </p>
                </div>
            </div>
        </div>
    )
}
