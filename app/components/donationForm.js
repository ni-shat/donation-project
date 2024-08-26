'use client';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import DonationFormBioDetails from './donationFormBioDetails';
import { db } from '@/app/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { createDonationData } from '@/services/api';

export default function DonationForm({ selectedStepCardAmount }) {

    const donationOptions = [
        {
            id: 1,
            type: 'Give once',
            amount: "20",
            description: "Feed 1 needy person for a month (Syria)"
        },
        {
            id: 2,
            type: 'Give once',
            amount: "50",
            description: "Feed 3 needy people for a month (Syria)"
        },
        {
            id: 3,
            type: 'Give once',
            amount: "100",
            description: "Feed 7 needy people for a month (Syria)"
        }
    ];
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedOtherAmount, setSelectedOtherAmount] = useState(false);
    const [DefaultValue, setDefaultValue] = useState('Other ');
    const [isFocused, setIsFocused] = useState(false);
    const [customAmount, setCustomAmount] = useState('Other amount');
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);
    const [isDedicated, setIsDedicated] = useState(false);
    const [warning, setWarning] = useState(false);
    const [isFirstStepCompleted, setIsFirstStepCompleted] = useState(false);
    const [shakeKey, setShakeKey] = useState(0); // Key to force re-render
    const minimumDonation = 20.0;

    const { register, handleSubmit, setValue, setError, formState: { errors } } = useForm();

    useEffect(() => {
        // other amount na thakle null oitho te os na kne kobis
        if (customAmount !== 'Other amount') {
            setSelectedOption(null)
        }
        //console.log('i wanna know the value of other amount in useeffect', customAmount)
    }, [customAmount])

    //console.log('i wanna know the value of other amount under useeffect', customAmount)

    useEffect(() => {
        setCustomAmount(selectedStepCardAmount || 'Other amount');
        setValue('donation', selectedStepCardAmount || 'Other amount');
        setSelectedOption(null);
        setIsFocused(false);
        setIsTooltipVisible(false);
        setIsFirstStepCompleted(false);
    }, [selectedStepCardAmount, setValue])


    const handleOptionChange = (amount) => {
        setSelectedOption(amount);
        setValue('donation', amount);
        setCustomAmount('Other amount'); //I CHANGED THIS NOW. CHECK IT
        setIsFocused(false);
        // setDefaultValue('Other amount');
        setIsTooltipVisible(false)
    };
    const handleOptionClicked = () => {
        setCustomAmount('Other amount');
    };
    // const handleOtherAmount = (id) => {
    //     setSelectedOtherAmount(id);
    // };
    const handleOtherAmountClicked = () => {
        setIsFocused(true);
        // setSelectedOption(null)
        if (selectedOption !== null) {
            setCustomAmount('$' + selectedOption);
            setValue('otherAmount', selectedOption);
        }
        setSelectedOption(null);
    };

    const handleOtherAmountBlur = () => {
        //console.log("in handler blur")
        const amount = parseFloat(customAmount.replace('$', ''), 10);
        if (amount < minimumDonation) {
            setIsTooltipVisible(true);
        } else {
            setIsTooltipVisible(false);
        }
    };

    const handleOtherAmountKeyDown = (e) => {
        const cursorPosition = e.target.selectionStart;
        if (cursorPosition <= 1 && (e.key === 'Backspace' || e.key === 'Delete' || e.key === 'ArrowLeft')) {
            e.preventDefault();
        }
    };

    const handleOtherAmountChange = (e) => {
        setIsTooltipVisible(false)
        //console.log('im there', e.target.value)

        const validNumberPattern = /^[0-9]*\.?[0-9]*$/;

        let value = e.target.value;
        if (!value.startsWith('$')) {
            value = '$' + value;
        }
        value = '$' + value.slice(1).replace(/^0+/, '');

        if (value === '$') {
            value = '$' + '0';
        }
        if (validNumberPattern.test(value.slice(1))) {
            setCustomAmount(value);
            setValue('donation', value);
            setValue('otherAmount', value);
        }
        // setCustomAmount(value);
    };
    const handleDonateButton = () => {
        //console.log('in handle donate function', customAmount, "custom amount")
        // isTooltipVisible ? setWarning(true) : setIsFirstStepCompleted(true)
        if (isTooltipVisible) {
            setWarning(true);
            //console.log('warning')
            setShakeKey(prevKey => prevKey + 1);
            setIsFirstStepCompleted(false)
            //console.log('in shaking if')
        }
        //  else {
        //     setIsFirstStepCompleted(true);
        // }
    }


    const onSubmit = async (data) => {
        const amount = parseFloat(data.donation.replace('$', ''));

        if (amount < minimumDonation) {
            setError('otherAmount', true);
            //console.log('in minimum if')

            return;
        }
        //console.log(data, amount);
        //console.log('custom amount', customAmount);
        setIsFirstStepCompleted(true);


        //post data to database
        // try {
        //     const response = await createDonationData(data);
        //     // alert('Data created successfully');
        //     //console.log('Response:', response);
        // } catch (error) {
        //     alert('Error creating data');
        //     console.error('Error creating data:', error);
        // }
    };

    return (
        <div className='w-full'>
            {
                isFirstStepCompleted ||
                
                <form onSubmit={handleSubmit(onSubmit)} className=" mx-auto p-4 border rounded ">
                    <div className={`mb-4 ${warning ? 'shake' : ''}`} key={shakeKey}>
                        <ul tabIndex={0} className=" menu bg-base-100 rounded-box  w-full shadow">

                            {
                                donationOptions.map(option =>
                                    <li key={option.id} className={`${selectedOption === option.amount ? 'bg-blue-100 ' : ''} p-0 rounded border-b`}>
                                        <label className="flex items-center justify-between">
                                            <p className='font-semibold text-xl'>{`$${option.amount}`}</p>
                                            <p className=""> {`- ${option.description}`}</p>
                                            <input
                                                type="radio"
                                                value={option.amount}
                                                {...register('donation')}
                                                className={`radio`}
                                                checked={selectedOption === option.amount}  // Check the first option by default
                                                onChange={() => {
                                                    handleOptionChange(option.amount);
                                                }}
                                                onClick={handleOptionClicked}
                                            />
                                        </label>
                                    </li>
                                )
                            }
                            {/* <li >
                                
                            </li> */}
                            <li >
                                {
                                    customAmount === 'Other amount' ?
                                        <p onClick={handleOtherAmountClicked}  className='bg-purple-500'>Other amount</p> :
                                        <input
                                            type="text"
                                            {...register('otherAmount', { required: true })}
                                            className={`w-full  ${typeof DefaultValue !== 'string' && 'bg-blue-100'}
                                            ${isFocused ? 'border-2 border-blue-600 cursor-pointer bg-blue-100' : 'border-0'}
                                            ${customAmount !== 'Other amount' ? 'border-2 border-blue-600 cursor-pointer bg-blue-100' : 'border-0'}
                                `}
                                            // defaultValue={typeof DefaultValue === 'string' ? DefaultValue : ''}
                                            // value={customAmount}
                                            value={(!customAmount.startsWith('$') && customAmount !== 'Other amount') ? '$' + customAmount : customAmount}
                                            onClick={handleOtherAmountClicked} // when user will click Only amount
                                            onChange={handleOtherAmountChange}
                                            onKeyDown={handleOtherAmountKeyDown}
                                            onBlur={handleOtherAmountBlur}
                                            placeholder='Other amount'
                                        />

                                }
                                {isTooltipVisible && (
                                    <div className="absolute top-full mt-2 p-2 bg-red-500 text-white rounded">
                                        Minimum donation is ${minimumDonation}
                                    </div>
                                )}
                            </li>

                        </ul>

                    </div>

                    <div className="mt-5">
                        <label className="flex items-center gap-3">
                            <input type="checkbox" defaultChecked={isDedicated} className="disabled w-4 h-4 border"
                                onChange={(e) => setIsDedicated(e.target.checked)} />
                            <span className="label-text">Dedicate this donation</span>
                        </label>
                        {
                            isDedicated &&
                            <input
                                type="text"
                                {...register('dedicatedName')}
                                className={`input input-bordered w-full h-9 mt-2 border-2 focus:border-2 custom-placeholder`}
                                placeholder='Honoree name'
                            />
                        }
                    </div>

                    <div className='mt-5 text-sm'>
                        <p className='underline'>Add comment</p>
                    </div>


                    <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded mt-6"
                        // onClick={isTooltipVisible ? setWarning(true) : setIsFirstStepCompleted(true)}
                        onClick={handleDonateButton}
                    >Donate</button>

                </form>
            }

            {
                isFirstStepCompleted &&
                <DonationFormBioDetails setIsFirstStepCompleted={setIsFirstStepCompleted}></DonationFormBioDetails>
            }
        </div>
    )
}
