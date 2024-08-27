import React from 'react'
import image3 from '@/public/images/image3.jpg'
import image4 from '@/public/images/image4.jpg'
import image5 from '@/public/images/image5.jpg'
import Image from 'next/image'
import DonateNowButton from './donateNowButton'

export default function ThirdSegment() {
    return (
        <div className='mx-auto mt-16 2xl:w-[77%] xl:w-[90%]
        
        '>
            <h3 className='md:text-[55px] text-4xl font-bold text-center mb-4'>Why You Need To Donate?</h3>

            {/* 1) */}
            <div className='w-full flex-col md:flex-row flex gap-12 justify-between border rounded p-10 shadow-lg mb-6'>

                <div className='xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-full w-full'>
                    <Image src={image3} alt='image' placeholder='blur' className='' />
                </div>

                <div className='flex flex-col gap-4 text-start font-semibold xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-full w-full'>
                    <h3 className='text-4xl font-semibold'>
                        1) Push Your Dua Forward With Charity
                    </h3>

                    <p className='text-xl font-normal'>
                        Have you ever found yourself silently praying for your most heartfelt Dua to be answered?
                    </p>
                    <p className='text-xl font-normal'>
                        Acts of kindness can hold the key to realizing One&apos;s Dua&apos;s potential.
                    </p>
                    <p className='text-xl font-normal'>
                        Envision that by extending a helping hand, you could be just one charitable act away from seeing your most cherished dreams fulfilled.
                    </p>
                    <p className='text-xl font-normal'>
                        Picture the smiles on the faces of needy families, and the warmth in the hearts of children who benefit from your charity.
                    </p>
                    <div>
                        {/* <button className="px-6 py-4 bg-primary text-white text-xl font-semibold mx-auto w-full h-auto rounded-sm mt-2">CLICK HERE TO GIVE GENEROUSLY TODAY!</button> */}
                        <DonateNowButton
                            width={"w-full"} lgWidth={"w-56"}
                            height={"h-[65px]"}
                            btnText={"CLICK HERE TO GIVE GENEROUSLY TODAY!"}
                            textSize={"text-xl"}
                            font={"font-semibold"}
                        ></DonateNowButton>
                    </div>
                </div>
            </div>

            {/* 2) */}
            <div className='w-full flex-col md:flex-row flex gap-12 justify-between border rounded p-10 shadow-lg mb-6'>

                <div className='xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-full w-full'>
                    <Image src={image4} alt='image' placeholder='blur' className='' />
                </div>

                <div className='flex flex-col gap-4 text-start font-semibold xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-full w-full'>
                    <h3 className='text-4xl font-semibold'>
                        2) Bridge of Hope
                    </h3>

                    <p className='text-xl font-normal'>
                        Have you ever found yourself silently praying for your most heartfelt Dua to be answered?
                    </p>
                    <p className='text-xl font-normal'>
                        Acts of kindness can hold the key to realizing One&apos;s Dua&apos;s potential.
                    </p>
                    <p className='text-xl font-normal'>
                        Envision that by extending a helping hand, you could be just one charitable act away from seeing your most cherished dreams fulfilled.
                    </p>
                    <p className='text-xl font-normal'>
                        Picture the smiles on the faces of needy families, and the warmth in the hearts of children who benefit from your charity.
                    </p>
                    <div>
                        {/* <button className="px-6 py-4 bg-primary text-white text-xl font-semibold mx-auto w-full h-auto rounded-sm mt-2">YES, I WANT TO ECHO THE ESSENCE OF THIS HADITH ON THE LESS-PRIVILEGED</button> */}
                        <DonateNowButton
                            width={"w-full"} lgWidth={"w-56"}
                            height={"h-[85px]"}
                            btnText={"YES, I WANT TO ECHO THE ESSENCE OF THIS HADITH ON THE LESS-PRIVILEGED"}
                            textSize={"text-xl"}
                            font={"font-semibold"}
                        ></DonateNowButton>
                    </div>
                </div>
            </div>

            {/* 3) */}
            <div className='w-full flex-col md:flex-row flex gap-12 justify-between border rounded p-10 shadow-lg mb-5'>

                <div className='xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-full w-full'>
                    <Image src={image5} alt='image' placeholder='blur' className='' />
                </div>

                <div className='flex flex-col gap-4 text-start font-semibold xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-full w-full'>
                    <h3 className='text-4xl font-semibold'>
                        3) Establishing a Legacy of Giving
                    </h3>

                    <p className='text-xl font-normal'>
                        Your kind act today goes beyond the moment, making a lasting legacy of giving that keeps bringing hope to people in need.
                    </p>
                    <p className='text-xl font-normal'>
                        As you help feed them, you&apos;re doing more than filling stomachs; You&apos;re engaging in a tradition of helping out that will inspire others and keep going for a long time.
                    </p>
                    <p className='text-xl font-normal'>
                        Start a journey of kindness with Spotlight Human
                    </p>
                    <p className='text-xl font-normal'>
                        Create a legacy filled with care and charity, just like the saying goes, &quot;The best of you are those who feed others&quot; - Musnad Ahmad 23926.
                    </p>
                    <div>
                        {/* <button className="px-6 py-4 bg-primary text-white text-xl font-semibold mx-auto w-full h-auto rounded-sm mt-2">YES, I WANT TO ESTABLISH THE LEGACY OF GIVING</button> */}
                        <DonateNowButton
                            width={"w-full"} lgWidth={"w-56"}
                            height={"h-[65px]"}
                            btnText={"YES, I WANT TO ESTABLISH THE LEGACY OF GIVING"}
                            textSize={"text-xl"}
                            font={"font-semibold"}
                        ></DonateNowButton>
                    </div>
                </div>
            </div>


        </div>
    )
}
