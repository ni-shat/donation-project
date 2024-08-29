import React from 'react'
import image3 from '@/public/images/AhmedSearch.jpg'
import image4 from '@/public/images/echoes_of_resilience.jpg'
import image5 from '@/public/images/ali_childf.jpg'
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
                        1) Echoes Amidst Ruins: Ahmad&apos;s Search in Gaza
                    </h3>

                    <p className='text-xl font-normal'>
                        Ahmad, fourteen, wandered through the shattered streets of Gaza City, scavenging remnants of his past.
                    </p>
                    <p className='text-xl font-normal'>
                        Among the debris of once-familiar buildings, he sought fragments a photo, a toy-relics of a life now scattered by conflict.
                    </p>
                    <p className='text-xl font-normal'>
                        Each discovery, a poignant link to memories of laughter and dreams now buried beneath rubble. De- spite danger, Ahmad persisted, a symbol of resilience amidst devastation.
                    </p>

                    <div>
                        {/* <button className="px-6 py-4 bg-primary text-white text-xl font-semibold mx-auto w-full h-auto rounded-sm mt-2">CLICK HERE TO GIVE GENEROUSLY TODAY!</button> */}
                        <DonateNowButton
                            width={"w-full"} lgWidth={"w-56"}
                            height={"h-[65px]"}
                            btnText={"Help Restore Hope!"}
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
                        2) Aya al-Masri: Echoes of Resilience
                    </h3>

                    <p className='text-xl font-normal'>
                        In the twilight of her years, Aya al-Masri sat by the window of her modest home in Gaza, her weathered hands clasped in her lap. Through the glass, she could see the fa- miliar skyline, scarred by decades of conflict. Memories flooded her mind, each etched with the pain and resilience of her people.
                    </p>
                    <p className='text-xl font-normal'>
                        She remembered the joy of her youth, when laughter echoed through bustling markets and children played freely in the streets. Yet, those memories were overshadowed by the relentless waves of violence that swept through her homeland. She had seen homes crumble, lives shattered, and dreams reduced to rubble.
                    </p>
                    <p className='text-xl font-normal'>
                        Aya al-Masri, in her twilight, remained a beacon of hope and resilience, her spirit unbroken despite the trials that had defined her life. And as she closed her eyes, she prayed for a future where peace would finally reign over the land she had called home for so long.
                    </p>

                    <div>
                        <DonateNowButton
                            width={"w-full"} lgWidth={"w-56"}
                            height={"h-[85px]"}
                            btnText={"YES, I WANT TO BE A BEACON OF HOPE FOR GAZA'S RESILIENT SOULS"}
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
                        3) Ali&apos;s Courageous Path:
                        A Child&apos;s Journey Through War
                    </h3>

                    <p className='text-xl font-normal'>
                        Ali, an eleven-year-old boy in Gaza, was injured when bombs hit his neighborhood. The explosion left him with wounds that hurt deeply, both physically and emotionally. In the hospital, sur- rounded by white walls and worried faces of family, Ali thought of his friends and the games they used to play.
                    </p>
                    <p className='text-xl font-normal'>
                        His days were filled with surgeries and painful treatments, but Ali never lost his courage. He found comfort in the kindness of strangers—doctors, nurses, and volunteers who brought him toys and stories. They helped him believe in a future beyond the pain.
                    </p>
                    <p className='text-xl font-normal'>
                        Slowly, Ali regained his strength. He dreamed of returning to school, playing soccer with his friends again, and living in a place without fear. His journey showed how children like him can be strong in tough times, holding onto hope even when everything seems hard.
                    </p>
                    <p className='text-xl font-normal'>
                        As Ali looked forward, he wished for a world where no child would suffer like he did. He hoped for peace, where laughter could drown out the echoes of bombs, and dreams could come true without fear.
                    </p>
                    <div>
                        <DonateNowButton
                            width={"w-full"} lgWidth={"w-56"}
                            height={"h-[65px]"}
                            btnText={"Help Restore Childhood Joy"}
                            textSize={"text-xl"}
                            font={"font-semibold"}
                        ></DonateNowButton>
                    </div>
                </div>
            </div>


        </div>
    )
}
