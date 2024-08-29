'use client';
import React, { useEffect } from 'react'
import { useModal } from '../context/ModalContext'; // Import the custom hook

export default function DonateNowButton({ width, height, btnText, textSize, font, lgWidth }) {
    const { openModal, setopeningModalFromOtherBtn } = useModal();

    useEffect(() => {
        setopeningModalFromOtherBtn(true);
    }, [])

    return (

        <button
            className={`bg-[#387084] text-white ${textSize} ${font} mx-auto 
            ${width} 
            ${height} rounded-sm mt-1.5 hover:bg-opacity-50`}
            onClick={openModal} // Use the context function
        >
            {btnText}
        </button>
    )
}
