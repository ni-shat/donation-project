import React from 'react'
import { FaArrowLeft, FaCheck } from 'react-icons/fa'

export default function PaymentSuccess({ amount, handleClickedBack, transactionId, closeModal }) {

    return (
        <div>
            <div className='hover:bg-gray-100 w-fit p-2 hover:cursor-pointer rounded-full'>
                <FaArrowLeft onClick={handleClickedBack} />
            </div>
            <div className='flex flex-col mt-8 justify-center items-center gap-3'>
                <div className='flex items-center pb-0'>
                    <div className='flex justify-center items-center flex-grow'>
                        <p className='text-2xl text-center text-green-600 font-semibold'>Thank You For Your Donation!</p>
                    </div>
                </div>
                <div className=' text-green-600 text-4xl border-[3px] border-green-600 w-fit p-7 mt-2 mx-auto rounded-full'>
                    <FaCheck />
                </div>
                <div>
                    <p className='text-2xl font-extra-extra-bold mt-6'>{`£${amount / 100}`}</p>
                </div>

                <div>
                </div>
                <div className='text-center space-y-2  py-3 border-y'>
                    <p className='text-xl font-semibold '>Thank you for making a difference!</p>
                    <p className='text-sm font-semibold '>Your generous support is greatly appreciated!</p>
                    <p className='text-sm font-normal mt-2'>Transaction ID: {transactionId}</p>
                </div>

                <div className='mt-4 flex justify-between gap-2'>
                    <button onClick={handleClickedBack} className='px-4 py-2 w-48 bg-[#387084] text-white rounded font-semibold hover:cursor-pointer hover:bg-opacity-50'>
                        Donate Again
                    </button>
                    <button onClick={closeModal} className='px-4 py-2 w-48 bg-gray-600 text-white rounded font-semibold hover:cursor-pointer hover:bg-opacity-50'>
                        Back to Home Page
                    </button>
                </div>
            </div>

        </div>
    )
}
