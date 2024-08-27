'use client';
import React, { useEffect } from 'react'
import { useModal } from '../context/ModalContext'; // Import the custom hook

export default function DonateNowButton({ width, height, btnText, textSize, font, lgWidth }) {
    const { openModal, setopeningModalFromOtherBtn } = useModal();

    useEffect(() => {
        setopeningModalFromOtherBtn(true);
        //console.log('i wanna know the value of other amount in useeffect', customAmount)
    }, [])

    return (

        <button
            className={`bg-primary text-white ${textSize} ${font} mx-auto 
            ${width} 
            ${height} rounded-sm mt-1.5 hover:bg-opacity-50`}
            onClick={openModal} // Use the context function
        >
            {btnText}
        </button>
    )
}
