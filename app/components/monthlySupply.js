import Image from 'next/image'
import React from 'react'
import image7 from '@/public/images/monthlySupply_pic1.jpg'
import image8 from '@/public/images/BD _flood.jpg'
import image9 from '@/public/images/BD_flood1.jpg'
import StepsCard from './stepsCard'

export default function MonthlySupply() {
      
    return (
        <div className=' border-white border-t-2 pb-32 bg-slate-300 h-fit overflow-x-hidden'>


            <div className='xl:px-10 lg:px-10 md:px-2 sm:px-4 px-0 xl:py-20 lg:py-10 md:py-9 sm:py-8 py-6 2xl:w-[80%] xl:w-[90%] mx-auto'>
                <div className='w-full md:flex-row flex-col flex gap-12 justify-between'>

                    {/* <div className='flex flex-col gap-4 text-start font-semibold xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-full w-full px-2'>
                        <h3 className='text-4xl font-semibold text-red-950'>
                            A MONTH’S SUPPLY OF HOT MEALS = $56
                        </h3>
                        <hr className='bg-gray-800 text-gray-800 h-[2px]' />

                        <p className='text-xl font-normal'>
                            Given the crisis, Spotlight Humanity makes an URGENT appeal to donate to the best of your ability.
                        </p>
                        <p className='text-xl font-normal'>
                            Allah will reward you for the role you play in alleviating the situation of even ONE brother or sister in these camps.
                        </p>
                        <p className='text-xl font-normal'>
                            The Messenger of Allah (saw) said, ‘(O people!) Save yourselves from the [Hell] Fire even if it is with half a date [given in charity], and if you cannot find that, then [save yourselves by saying] a good word’. [Al-Bukhari & Muslim]
                        </p>
                        <p className='text-xl font-normal'>
                            May Allah ACCEPT your donations, save us from being held to account for the severe trials of our brothers and sisters in the Ummah, and help alleviate this crisis from them.
                        </p>
                        <p className='text-xl font-normal'>
                            Invest in your Hereafter. Donate generously.
                        </p>
                    </div> */}

                    <div className='xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-full w-full'>
                        <Image src={image7} alt='image' placeholder='blur' className='w-full h-full object-cover' />
                    </div>
                    <div className='xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-full w-full'>
                        <Image src={image8} alt='image' placeholder='blur' className='w-full h-full object-cover' />
                    </div>
                    <div className='xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-full w-full'>
                        <Image src={image9} alt='image' placeholder='blur' className='w-full h-full object-cover' />
                    </div>


                </div>
            </div>


            <div className='xl:w-2/5 lg:w-[65%] md:w-[70%] w-[95%] mx-auto bg-white '>
                <p className='text-xl xl:mb-8 xl:pt-14 xl:px-8 lg:px-6 px-6 md:pt-8 pt-8 pb-3'>How many months of hot meals can you provide?</p>
                <StepsCard></StepsCard>
            </div>

        </div>
    )
}
