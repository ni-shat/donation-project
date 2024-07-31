import React from 'react'
import image2 from '@/public/images/image2.jpg'
import Image from 'next/image'
import DonateNowButton from './donateNowButton'

export default function SecondSegment() {
    return (
    <div className='w-full mt-24 flex gap-12 justify-between '>

            <div className='xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-[50%] w-[50%]'>
                <Image src={image2} alt='image' placeholder='blur' className='' />
            </div>

            <div className='flex flex-col gap-4 text-start font-semibold w-2/4'>
                <h3 className='text-4xl font-semibold'>
                    Families in Syria on The Brink of Survival:
                </h3>

                <p className='text-xl font-normal'>
                    In the midst of Syria's prolonged crisis, countless families face daily struggles for essential needs like food, water, and shelter – necessities often overlooked by many.
                </p>
                <p className='text-xl font-normal'>
                    The heart-wrenching images we see reflect their enduring resilience and bravery in these challenging times.
                </p>
                <p className='text-xl font-normal'>
                    These powerful scenes have moved us, kindling a call to action within our hearts. It's a reminder of the impact our support can have, urging us to contribute and make a tangible difference.
                </p>
                <p className='text-xl font-normal'>
                    The time to act is now!
                </p>
                <p className='text-xl font-normal'>
                    By stepping up, we can provide crucial support to those who have endured tremendous loss.
                </p>
                <p className='text-xl font-normal'>
                    Join us in supporting the families of Syria, and help bring hope and sustenance to those in need.
                </p>
                <div>
                    <button className=" bg-primary text-white text-2xl font-semibold mx-auto w-full h-[75px] rounded-sm mt-2">Donate Now</button>
                </div>
            </div>
        </div>
    )
}
