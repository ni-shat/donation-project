'use client';
import React, { useEffect } from 'react'
import { useModal } from '../context/ModalContext';
import { FaHeart } from 'react-icons/fa';

export default function StickyButton() {

    const { openModal, setopeningModalFromOtherBtn } = useModal();

    useEffect(() => {
        setopeningModalFromOtherBtn(true);
    }, [setopeningModalFromOtherBtn])

    return (
        <div className='xl:block hidden'>
            <button
            className='bg-[#D05346]  text-white text-base font-semibold mx-auto 
             rounded-tl-md rounded-tr-md mt-1.5 hover:bg-opacity-50 px-6 py-2   
             transition-transform 
               transform rotate-90 
               fixed left-5
               top-1/2  
               translate-x-[-50%] translate-y-[-50%] 
                flex gap-2 items-center
               '
            onClick={openModal}
            >
               <span>Donate</span> <FaHeart className='animate-pulse ' />
            </button>
        </div>
    )
}
