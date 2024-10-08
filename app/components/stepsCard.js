'use client';
import Image from 'next/image';
import React, { useState } from 'react'
import heart from '@/public/images/heart.png'
import image2 from '@/public/images/stepsCard_pic.jpg'
import DonationForm from './donationForm';
import { useModal } from '../context/ModalContext';


export default function StepsCard() {

    const [selectedAmount, setSelectedAmount] = useState("250");
    const [selectedOtherAmount, setSelectedOtherAmount] = useState("Other amount");
    const [resetForm, setResetForm] = useState(false);
    const { openModal, closeModal } = useModal();

    const openModalFromStepsCard = () => {
        setSelectedOtherAmount(selectedAmount);
        openModal();
    };


    const data = [
        {
            "amount": "50",
            "monthsOfHotMeals": 1
        },
        {
            "amount": "100",
            "monthsOfHotMeals": 2
        },
        {
            "amount": "150",
            "monthsOfHotMeals": 3
        },
        {
            "amount": "200",
            "monthsOfHotMeals": 4
        },
        {
            "amount": "250",
            "monthsOfHotMeals": 5
        }
    ];

    return (
        <div className='mt-24 relative w-full h-52 '>


            <div className='absolute w-full '>
                <div className='relative flex items-center justify-center'>
                    <hr className='absolute w-[90%] bg-gray-300 h-1' />
                    <div className='relative flex justify-around w-[90%]'>
                        {
                            data.map(d => (
                                <div key={d.amount}
                                    className='relative flex flex-col items-center'
                                    onClick={() => setSelectedAmount(d.amount)}>
                                    <div
                                        className={`relative rounded-full bg-slate-400
                                         ${selectedAmount === d.amount ? 'border-[20px] border-gray-950' : 'border-[10px] top-3 border-white'}`} >
                                        <div
                                            className={`absolute left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full 
                                                    ${selectedAmount === d.amount ? '-bottom-1 bg-white' : '-top-1 bg-black'}`} >
                                        </div>
                                    </div>

                                    {/* tooltip */}
                                    {selectedAmount === d.amount && (
                                        <div
                                            className='absolute xl:-top-14 md:-top-16 -top-16 left-1/2 transform -translate-x-1/2 z-10 '
                                        >
                                            {/* Tooltip Container */}
                                            <div className={`relative right-0 `}>
                                                {/* Tooltip Arrow */}
                                                <div className='absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black'></div>
                                                {/* Tooltip Box */}
                                                <p className={`bg-white border flex justify-center items-center gap-[3px] border-black text-black text-sm rounded text-nowrap py-3.5 px-6 text-center relative
                                                       ${(d.amount === '250' ? 'right-8' : (d.amount === '50' ? 'left-8' : 'right-0'))}
                                                    `}>
                                                    Provide for<Image src={heart} alt='heart' placeholder='blur' className='xl:w-[12%] lg:w-[15%] md:w-[15%] sm:w-[10%] w-[10%] ' />
                                                    {d.monthsOfHotMeals} months
                                                </p>
                                            </div>
                                        </div>
                                    )} {/* end tooltip */}


                                </div>
                            ))
                        }
                    </div>
                </div>


                {/* amount */}
                <div className='relative flex items-center justify-center'>
                    <div className='relative flex justify-around w-[90%]'>
                        {
                            data.map(d => (
                                <div key={d.amount}
                                    className='relative flex flex-col items-center'>
                                    {/* amount */}
                                    <p className={`absolute left-1/2 transform -translate-x-1/2 top-4 `}>
                                        {d.amount}£
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {/* end amount */}

                {/* donation form */}
                <button
                    className=" bg-gray-800 text-white text-base font-semibold mx-auto w-40 h-12 rounded-sm relative flex items-center justify-center top-[78px] uppercase"
                    onClick={openModalFromStepsCard}
                >Donate Now</button>
                {/* modal */}
                {
                    <dialog id="my_modal_3" className="modal w-full ">
                        <div className="modal-box xl:w-[70%] w-full max-w-none bg-white">

                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button
                                    onClick={closeModal}
                                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 md:bg-white bg-gray-700 md:text-black text-white">✕</button>
                            </form>

                            {/* content */}
                            <div className='flex md:flex-row flex-col-reverse gap-0 w-full  md:mt-0 mt-2'>
                                <div className='space-y-4 xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-[90%] w-[90%] mx-auto h-full'>
                                    <div className='h-[50%]'>
                                        <Image src={image2} alt='image' placeholder='blur' className='w-full h-full  object-cover' />
                                    </div>
                                    {/* text content under image */}
                                    <div className='space-y-2  h-[45%]'>
                                        <h6 className='text-xl text-center font-semibold '>Hot Meals for Families in Crisis  </h6>
                                        <p>In Bangladesh and Gaza, families face severe hardships from floods and conflict. Your support can provide hot, nutritious meals to those in need. Each donation helps ease their struggles. Join us in offering essential aid and spreading hope.
                                        </p>
                                    </div>
                                </div>
                                <div className='divider lg:divider-horizontal'></div>
                                <div className='xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-full w-full'>

                                    <div>
                                        <DonationForm
                                            selectedStepCardAmount={selectedOtherAmount}
                                            resetForm={resetForm}
                                            closeModal={closeModal} // to close the model 
                                        ></DonationForm>    {/* donation form */}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </dialog>
                }
                {/* Donation form */}

            </div>

        </div>
    )
}

