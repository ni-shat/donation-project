import React from 'react'
import image6 from '@/public/images/image6.png'
import Image from 'next/image'

export default function WhoWeAreSegment() {
    return (
        <div className='xl:px-14 lg:px-10 md:px-2 sm:px-4 px-0 xl:py-20 lg:py-10 md:py-9 sm:py-8 py-6 2xl:w-[80%] xl:w-[90%] mx-auto'>
            <div className='w-full md:flex-row flex-col flex gap-12 justify-between'>

                <div className='xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-full w-full'>
                    <Image src={image6} alt='image' placeholder='blur' className='' />
                </div>

                <div className='flex flex-col gap-4 text-start font-semibold xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-full w-full px-2'>
                    <h3 className='text-4xl font-semibold text-red-950'>
                        WHO WE ARE
                    </h3>
                    <hr className='bg-gray-800 text-gray-800 h-[1px]' />
                    {/* <div className="divider divider-neutral h-1"></div> */}

                    <p className='text-xl font-normal'>
                        Spotlight Humanity is a 100% donation policy charity, working hard to relieve poverty and suffering both locally and globally. We provide food aid, water aid, shelter, orphan sponsorships and more in destitute countries.
                    </p>
                    <p className='text-xl font-normal'>
                        We have been distributing relief and food, water and other essential packages – aiming to help as many people as we can. And we are prepared to continue to help these people, but we need your support to do this.
                    </p>
                    <p className='text-xl font-normal'>
                        We are currently on the ground helping refugees from all over the Middle East. Almost all have been displaced by war and are currently living in dire conditions. With your help, we plan to deliver vital life-saving aid such as food, clean water, widow and orphan sponsorships, schooling, and more.
                    </p>
                </div>
            </div>
        </div>
    )
}
