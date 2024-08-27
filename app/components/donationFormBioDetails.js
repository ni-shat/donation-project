import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { FaArrowLeft } from "react-icons/fa";
import Link from 'next/link';
import Payment from './payment';


export default function DonationFormBioDetails({ setIsFirstStepCompleted, donationDetails, closeModal }) {

    const [showPayment, setShowPayment] = useState(false);
    const [combinedData, setCombinedData] = useState({});


    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        console.log("data and donationDetails is donationFormBioDetails", data, donationDetails);
        const combinedData = { ...data, ...donationDetails };
        setCombinedData(combinedData)

        // go to payment component
        setShowPayment(true);
    };

    const handleClickedBack = () => {
        setIsFirstStepCompleted(false)
    }


    return (
        <div className='bg-white h-full'>
            {
                !showPayment ?
                    <form onSubmit={handleSubmit(onSubmit)} className=" mx-auto p-3 rounded bg-white">
                        <div className='hover:bg-gray-100 w-fit p-2 hover:cursor-pointer rounded-full'>
                            <FaArrowLeft onClick={handleClickedBack} />
                        </div>
                        <div className='flex items-center mt-3 mb-6 pb-2'>

                            <div className='flex justify-center items-center  flex-grow'>
                                <p className='text-xl font-semibold text-center'>Enter your details</p>
                            </div>
                        </div>
                        <div>
                            <div className="mb-1 bg-white">
                                <input
                                    type="text"
                                    id="firstName"
                                    {...register('firstName', { required: true })}
                                    placeholder='First name'
                                    className="w-full px-3 py-2 bg-white border border-gray-300 shadow-md rounded custom-placeholder"
                                />
                                {errors.firstName && <span className="text-red-500">required</span>}
                            </div>
                            <div className="mb-1 bg-white">
                                <input
                                    type="text"
                                    id="lastName"
                                    {...register('lastName', { required: true })}
                                    placeholder='Last name'
                                    className="w-full px-3 py-2 bg-white border border-gray-300 shadow-md rounded custom-placeholder"
                                />
                                {errors.lastName && <span className="text-red-500">required</span>}
                            </div>
                        </div>

                        <div className="mb-1 bg-white mt-0">
                            <input
                                type="email"
                                id="email"
                                {...register('email', {
                                    required: 'required',
                                    pattern: {
                                        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                        message: 'enter a valid email'
                                    }
                                })}
                                placeholder='Email'
                                className="w-full px-3 py-2 bg-white border border-gray-300 shadow-md rounded custom-placeholder"
                            />
                            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                        </div>
                        {/* <div className="mb-1 bg-white">
                            <input
                                type="text"
                                id="phone"
                                {...register('phone', {
                                    required: 'required',
                                    pattern: {
                                        message: 'enter a valid phone number'
                                    }
                                })}
                                placeholder='Phone'
                                className="w-full px-3 py-2 bg-white border border-gray-300 shadow-md rounded custom-placeholder"
                            />
                            {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
                        </div> */}

                        <div className="mt-5 bg-white">
                            <label className="flex items-center gap-3 bg-white">
                                <input
                                    type="checkbox"
                                    {...register('terms', { required: 'You must agree to the terms and privacy policy' })}
                                    className="w-4 h-4 border border-gray-300 bg-white appearance-none checked:bg-blue-500 checked:border-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 relative"
                                />
                                <span className="label-text bg-white">I agree to <Link target="_blank" href="/terms-and-conditions" className='underline'>Terms and Privacy Policy</Link></span>
                            </label>
                            {errors.terms && <span className="text-red-500">{errors.terms.message}</span>}
                        </div>

                        <style jsx>{`
                            input[type="checkbox"]:checked::before {
                                content: '✔'; /* Unicode checkmark or any symbol you want */
                                display: block;
                                color: white;
                                position: absolute;
                                top: 50%;
                                left: 50%;
                                transform: translate(-50%, -50%);
                            }
                        `}</style>


                        <button type="submit"
                            className="w-full px-3 py-2 bg-blue-500 te border-gray-300 shadow-md-rounded text-white rounded mt-6"
                        >Donate</button>


                    </form> :

                    <Payment combinedData={combinedData} showPayment={showPayment} setShowPayment={setShowPayment}
                        setIsFirstStepCompleted={setIsFirstStepCompleted} // passing oldest state to go back from success payment page
                        closeModal={closeModal} // passing oldest state to close the whole modal
                    ></Payment>
            }
        </div>
    )
}
