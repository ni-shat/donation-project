import React from 'react'

export default function Progress() {
    return (
        <div className='xl:mt-12 md:mt-10 sm:mt-9 mt-8 flex flex-col items-center gap-4'>
            <p className='text-center font-semibold text-gray-900'><span className='text-4xl'>$141,593</span> <span className='text-gray-600 text-3xl font-light'> of $250,000 goal</span> </p>
            <progress className="progress progress-primary w-full h-6" value="70" max="100"></progress>
            <button className=" bg-primary text-white text-2xl font-normal mx-auto w-56 h-[70px] rounded-sm mt-1.5">Donate Now</button>
        </div>
    )
}

//  xl:mt-6 md:mt-6 sm:mt-4 mt-4
