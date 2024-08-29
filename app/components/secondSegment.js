import React from 'react'
import image2 from '@/public/images/attackedByDog.jpg'
import Image from 'next/image'
import DonateNowButton from './donateNowButton'

export default function SecondSegment() {
    return (
        <div className='w-full mt-24 flex flex-col md:flex-row gap-12 justify-between '>

            <div className='xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-full w-full'>
                <Image src={image2} alt='image' placeholder='blur' className='' />
            </div>

            <div className='flex flex-col gap-4 text-start font-semibold xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-full w-full px-2'>
                <h3 className='text-3xl font-semibold'>
                    Elderly Palestinian woman recounts terrifying attack by Israeli
                    army dog in Gaza In Jabalia refugee camp,
                </h3>
                <h4 className='text-2xl font-semibold'>&apos;I screamed for help, I lay there bleeding, waiting for help until dawn, 70-year-old Dawlat al-Tanani tells Anadolu</h4>

                <p className='text-xl font-normal'>
                    In Northern Gaza, Aisha al-Tanani, an elderly Palestinian woman, endured a traumatic attack when Israeli forces deployed a trained dog against her while she slept alone. Despite suffering severe injuries, she was unable to seek im- mediate medical assistance due to ongoing bombardments. Throughout the night, she cried out for help, but her neighbors had evacuated, leaving her stranded until morning. Eventually, al-Tanani managed to walk for hours, de- spite her injuries, before a young man spotted her near al-Yemen al-Saeed Hospital in Jabalia and assisted her to receive medical treatment.
                </p>
                <p className='text-xl font-normal'>
                    The incident, captured in a video broadcast by Al Jazeera, quickly went viral and ignited widespread condemnation. The use of military dogs against civil- ians, a practice documented by organizations like Euro-Med Human Rights Monitor, has been described as part of a pattern of systemic violence targeting Palestinian communities. Advocates and social media activists have called for accountability and an end to such tactics, emphasizing the urgent need for humanitarian aid to alleviate the severe shortages of food and essentials in Gaza.
                </p>
                <p className='text-xl font-normal'>
                    Al-Tanani&apos;s ordeal has underscored the ongoing humanitarian crisis in Gaza amidst escalating tensions, prompting renewed international scrutiny of Is- raeli military actions and their humanitarian impact on Palestinian civilians.
                </p>
                {/*  <p className='text-xl font-normal'>
                    The time to act is now!
                </p>
                <p className='text-xl font-normal'>
                    By stepping up, we can provide crucial support to those who have endured tremendous loss.
                </p>
                <p className='text-xl font-normal'>
                    Join us in supporting the families of Syria, and help bring hope and sustenance to those in need.
                </p> */}
                <div className='mt-2'>
                    <DonateNowButton
                        width={"w-full"} lgWidth={"w-56"}
                        height={"h-[65px]"}
                        btnText={"Donate Now"}
                        textSize={"text-2xl"}
                        font={"font-semibold"}
                    ></DonateNowButton>
                </div>
            </div>
        </div>
    )
}
