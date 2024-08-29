'use client';
import React, { useState, useEffect } from 'react';
import { useModal } from '../context/ModalContext';
import { FaHeart } from 'react-icons/fa';

export default function StickyButton() {
  const { openModal, setopeningModalFromOtherBtn } = useModal();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setopeningModalFromOtherBtn(true);
  }, [setopeningModalFromOtherBtn]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      // Show button if scrolled down more than 700px and not at the bottom
      if (scrollTop > 700 && scrollTop + clientHeight < scrollHeight - 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <button
        className={`bg-[#D05346] text-white text-base font-semibold mx-auto 
                   rounded-tl-md rounded-tr-md mt-1.5 hover:bg-opacity-50 px-6 py-2
                   transform rotate-90 fixed left-5 top-1/2 
                   translate-x-[-50%] translate-y-[-50%] flex gap-2 items-center 
                   transition-opacity duration-300 ${showButton ? 'opacity-100' : 'opacity-0'}`}
        onClick={openModal}
      >
        <span>Donate</span> <FaHeart className='animate-pulse' />
      </button>
    </div>
  );
}
