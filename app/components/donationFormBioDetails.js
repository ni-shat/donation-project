import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { FaArrowLeft } from "react-icons/fa";
import { db } from '@/app/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { createDonationData } from '@/services/api';
import Link from 'next/link';
import Payment from './payment';


export default function DonationFormBioDetails({ setIsFirstStepCompleted, donationDetails , closeModal }) {

    const [isSubscribed, setIsSubscribed] = useState(false);
    const [showPayment, setShowPayment] = useState(false);
    const [combinedData, setCombinedData] = useState({});


    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        console.log("data and donationDetails is donationFormBioDetails",data, donationDetails);
        const combinedData = { ...data, ...donationDetails };
        //console.log(combinedData);
        setCombinedData(combinedData)

        // go to payment component
        setShowPayment(true);

        //post data to database
        // try {
        //     const response = await createDonationData(combinedData);
        //     //console.log('Response:', response);
        // } catch (error) {
        //     alert('Error creating data');
        //     console.error('Error creating data:', error);
        // }
    };

    const handleClickedBack = () => {
        setIsFirstStepCompleted(false)
        // if (customAmount !== 'Other amount') {
        //     setSelectedOption(null);
        // }
    }


    return (
        <div className=' h-full'>
            {
                !showPayment ?
                    <form onSubmit={handleSubmit(onSubmit)} className=" mx-auto p-3  rounded ">
                        <div className='hover:bg-gray-100 w-fit p-2 hover:cursor-pointer rounded-full'>
                            <FaArrowLeft onClick={handleClickedBack} />
                        </div>
                        <div className='flex items-center mt-3 mb-6 pb-2'>

                            <div className='flex justify-center items-center  flex-grow'>
                                <p className='text-xl font-semibold text-center'>Enter your details</p>
                            </div>
                        </div>
                        <div>
                            <div className="mb-1">
                                {/* <label htmlFor="firstName" className="block text-sm font-bold mb-1">First Name</label> */}
                                <input
                                    type="text"
                                    id="firstName"
                                    {...register('firstName', { required: true })}
                                    placeholder='First name'
                                    className="w-full px-3 py-2 border border-gray-300 shadow-md rounded custom-placeholder"
                                />
                                {errors.firstName && <span className="text-red-500">required</span>}
                            </div>
                            <div className="mb-1">
                                {/* <label htmlFor="lastName" className="block text-sm font-bold mb-1">Last Name</label> */}
                                <input
                                    type="text"
                                    id="lastName"
                                    {...register('lastName', { required: true })}
                                    placeholder='Last name'
                                    className="w-full px-3 py-2 border border-gray-300 shadow-md rounded custom-placeholder"
                                />
                                {errors.lastName && <span className="text-red-500">required</span>}
                            </div>
                        </div>

                        <div className="mb-1 mt-0">
                            {/* <label htmlFor="email" className="block text-sm font-bold mb-1">Email</label> */}
                            <input
                                type="email"
                                id="email"
                                // {...register('email', { required: true, pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/ })}
                                {...register('email', {
                                    required: 'required',
                                    pattern: {
                                        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                        message: 'enter a valid email'
                                    }
                                })}
                                placeholder='Email'
                                className="w-full px-3 py-2 border border-gray-300 shadow-md rounded custom-placeholder"
                            />
                            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                        </div>
                        <div className="mb-1">
                            {/* <label htmlFor="phone" className="block text-sm font-bold mb-1">Email</label> */}
                            <input
                                type="text"
                                id="phone"
                                // {...register('phone', { required: true, pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/ })}
                                {...register('phone', {
                                    required: 'required',
                                    pattern: {
                                        // value: /^\+?[1-9]\d{1,14}$/, //pattern according to the phone number format you expect
                                        message: 'enter a valid phone number'
                                    }
                                })}
                                placeholder='Phone'
                                className="w-full px-3 py-2 border border-gray-300 shadow-md rounded custom-placeholder"
                            />
                            {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
                        </div>

                        {/* <div className="mt-5">
                            <label className="flex items-center gap-3">
                                <input type="checkbox"
                                    defaultChecked={isSubscribed}
                                    className="w-4 h-4 border"
                                    onChange={(e) => setIsSubscribed(e.target.checked)}
                                    {...register('isSubscribed')}
                                />
                                <span className="label-text">Subscribe to our mailing list</span>
                            </label>
                        </div> */}
                        <div className="mt-5">
                            <label className="flex items-center gap-3">
                                <input type="checkbox"
                                    {...register('terms', { required: 'You must agree to the terms and privacy policy' })}
                                    className="w-4 h-4 border" />
                                <span className="label-text">I agree to <Link target="_blank" href="/terms-and-conditions" className='underline'>Terms and Privacy Policy</Link></span>
                            </label>
                            {errors.terms && <span className="text-red-500">{errors.terms.message}</span>}
                        </div>

                        <button type="submit"
                            className="w-full px-3 py-2 bg-blue-500 te border-gray-300 shadow-md-rounded text-white rounded mt-6"
                        // onClick={isTooltipVisible ? setWarning(true) : setIsFirstStepCompleted(true)}
                        // onClick={handleDonateButton}
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
