import React from 'react';
import DonateNowButton from './donateNowButton';

export default function Progress() {

    return (
        <div className='xl:mt-12 md:mt-10 sm:mt-9 mt-8 flex flex-col items-center gap-4 px-2'>
            <p className='text-center font-semibold text-gray-900'>
                <span className='
                2xl:text-4xl xl:text-4xl lg:text-2xl md:text-2xl sm:text-2xl text-2xl
                '>£141,593</span>
                <span className='text-gray-600 
                 2xl:text-3xl xl:text-3xl lg:text-xl md:text-xl sm:text-xl text-xl
                font-light'> of £250,000 goal</span>
            </p>
            <progress className="progress progress-primary w-full 
            2xl:h-6 xl:h-6 lg:h-4 md:h-4 sm:h-3 h-3
            " value="70" max="100"></progress>

            <DonateNowButton
                width={"w-56"} lgWidth={"w-56"}
                height={"h-[70px]"}
                btnText={"Donate Now"}
                textSize={"text-2xl"}
                font={"font-normal"}
            ></DonateNowButton>
        </div>
    );
}

// TwoxlWidth xlWidth lgWidth={"lg:w-56"} mdWidth smWidth Width={"w-20"}