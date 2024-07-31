import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

export default function DonationFormBioDetails({ setIsFirstStepCompleted }) {

    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isAgreed, setIsAgreed] = useState(false);

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    const handleClickedBack = () => {
        setIsFirstStepCompleted(false)
        // if (customAmount !== 'Other amount') {
        //     setSelectedOption(null);
        // }
    }


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className=" mx-auto p-4  rounded ">
                <p className='text-xl mt-3 mb-6 font-semibold text-center border-  pb-2'>Enter your details</p>

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
                        {errors.firstName && <span className="text-red-500">This field is required</span>}
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
                        {errors.lastName && <span className="text-red-500">This field is required</span>}
                    </div>
                </div>

                <div className="mb-1 mt-0">
                    {/* <label htmlFor="email" className="block text-sm font-bold mb-1">Email</label> */}
                    <input
                        type="email"
                        id="email"
                        {...register('email', { required: true, pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/ })}
                        placeholder='Email'
                        className="w-full px-3 py-2 border border-gray-300 shadow-md rounded custom-placeholder"
                    />
                    {errors.email && <span className="text-red-500">Enter a valid email</span>}
                </div>
                <div className="mb-1">
                    {/* <label htmlFor="phone" className="block text-sm font-bold mb-1">Email</label> */}
                    <input
                        type="text"
                        id="phone"
                        {...register('phone', { required: true, pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/ })}
                        placeholder='Phone'
                        className="w-full px-3 py-2 border border-gray-300 shadow-md rounded custom-placeholder"
                    />
                    {errors.phone && <span className="text-red-500">Enter a valid phone number</span>}
                </div>

                <div className="mt-5">
                    <label className="flex items-center gap-3">
                        <input type="checkbox"
                            defaultChecked={isSubscribed}
                            className="disabled w-4 h-4 border"
                            onChange={(e) => setIsSubscribed(e.target.checked)} />
                        <span className="label-text">Subscribe to our mailing list</span>
                    </label>
                </div>
                <div className="mt-3">
                    <label className="flex items-center gap-3">
                        <input type="checkbox"
                            defaultChecked={isAgreed}
                            className="disabled w-4 h-4 border"
                            onChange={(e) => setIsAgreed(e.target.checked)} />
                        <span className="label-text">I agree to <span className='underline'>Terms and Privacy Policy</span></span>
                    </label>
                </div>

                <button type="submit" 
                className="w-full px-3 py-2 bg-blue-500 te border-gray-300 shadow-md-rounded custom-placeholderxt-white rounded mt-6"
                // onClick={isTooltipVisible ? setWarning(true) : setIsFirstStepCompleted(true)}
                // onClick={handleDonateButton}
                >Donate</button>

                
            </form>
        </div>
    )
}
