'use client';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import DonationFormBioDetails from './donationFormBioDetails';
import { db } from '@/app/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { createDonationData } from '@/services/api';

export default function DonationFormTwo({ selectedStepCardAmount, resetForm, closeModal }) {

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
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isAgreed, setIsAgreed] = useState(false);
    const [donationDetails, setDonationDetails] = useState(false);
    const minimumDonation = 20.0;

    const { register, handleSubmit, setValue, setError, reset, formState: { errors } } = useForm();

    // useEffect(() => {
    //     // Reset form when `resetForm` prop changes
    //     if (resetForm) {
    //         setCustomAmount('Other amount');
    //         setSelectedOption(null);
    //         setIsFocused(false);
    //         setIsTooltipVisible(false);
    //         setIsDedicated(false);
    //         setIsFirstStepCompleted(false);
    //         reset();
    //         setResetForm(false);
    //     }
    // }, [resetForm, setResetForm]);

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
            //console.log(selectedOption)
            // setCustomAmount('$' + selectedOption);
            setCustomAmount(selectedOption);
            // setCustomAmount(`$${selectedOption}`);
            setValue('otherAmount', selectedOption);
        }
        setSelectedOption(null);
        //console.log('selected option', selectedOption)
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

    // const handleOtherAmountKeyDown = (e) => {
    //     const cursorPosition = e.target.selectionStart;
    //     if (cursorPosition <= 0 && (e.key === 'Backspace' || e.key === 'Delete' || e.key === 'ArrowLeft')) {
    //         e.preventDefault();
    //     }
    // };
    const handleOtherAmountKeyDown = (e) => {
        // Get the current input value and cursor position
        const inputValue = e.target.value;
        const cursorPosition = e.target.selectionStart;

        // Check if the entire input is selected and a delete key is pressed
        if (inputValue.length > 0 && cursorPosition === 0 && (e.key === 'Backspace' || e.key === 'Delete')) {
            // Set value to '0' or an empty string
            setCustomAmount('0');
            setValue('donation', '0');
            setValue('otherAmount', '0');
        }

        // Prevent deletion if the cursor is at the start and the key is Backspace
        if (cursorPosition <= 0 && (e.key === 'Backspace' || e.key === 'Delete')) {
            e.preventDefault();
        }
    };


    // const handleOtherAmountChange = (e) => {
    //     setIsTooltipVisible(false)
    //     //console.log('im there', e.target.value)

    //     const validNumberPattern = /^[0-9]*\.?[0-9]*$/;

    //     let value = e.target.value;
    //     if (!value.startsWith('$')) {
    //         value = '$' + value;
    //     }
    //     value = '$' + value.slice(1).replace(/^0+/, '');

    //     if (value === '$') {
    //         value = '$' + '0';
    //     }
    //     if (validNumberPattern.test(value.slice(1))) {
    //         setCustomAmount(value);
    //         setValue('donation', value);
    //         setValue('otherAmount', value);
    //     }
    //     // setCustomAmount(value);
    // };

    const handleOtherAmountChange = (e) => {
        setIsTooltipVisible(false);
        const inputValue = e.target.value;

        // Check if the input value is empty or just zero
        if (inputValue === '' || inputValue === '0') {
            setCustomAmount('0');
            setValue('donation', '0');
            setValue('otherAmount', '0');
            return;
        }

        // Remove any non-numeric characters except for the decimal point
        const validNumberPattern = /^[0-9]*\.?[0-9]*$/;
        if (validNumberPattern.test(inputValue)) {
            // Remove leading zeros if present
            let value = inputValue.replace(/^0+(?![0])/, '');

            // Ensure the value is not empty
            if (value === '') {
                value = '0';
            }

            // Update the state with the formatted value
            setCustomAmount(value);
            setValue('donation', value);
            setValue('otherAmount', value);
        }
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
    }



    // const handleClickedBack = () => {
    //     setIsFirstStepCompleted(false)
    //     // if (customAmount !== 'Other amount') {
    //     //     setSelectedOption(null);
    //     // }
    // }


    const onSubmit = async (data) => {
        const amount = parseFloat(data.donation);
        delete data.otherAmount;
        console.log("Amount in donationFormTwo: ", amount, data )

        if (amount < minimumDonation) {
            setError('otherAmount', true);
            //console.log('in minimum if')

            return;
        }
        //console.log(data, amount);
        //console.log('custom amount', customAmount);
        setDonationDetails(data);
        setIsFirstStepCompleted(true);
    };
    //console.log('selected option', selectedOption)
    //console.log('custom amount here', customAmount)
    //console.log('type of custom amount here', typeof customAmount)

    return (
        <div className='w-full h-full bg-white'>
            {
                isFirstStepCompleted ||
                <form onSubmit={handleSubmit(onSubmit)} className=" mx-auto md:px-2 px-0 rounded ">
                    <p className='text-xl font-semibold text-center mb-10 border-b pb-5 pt-1'>Secure donation</p>
                    <div className={`mb-4 ${warning ? 'shake' : ''}`} key={shakeKey}>
                        <ul tabIndex={0} className="  bg-white rounded-box  w-full shadow">

                            {
                                donationOptions.map(option =>
                                    <li key={option.id} className={`px-4 py-2  ${selectedOption === option.amount ? 'bg-blue-100 ' : ''} p-0 rounded border-b`}>
                                        <label className="flex items-center justify-between hover:cursor-pointer">
                                            <p className='font-semibold text-xl '>{`£${option.amount}`}</p>
                                            <p className="md:text-base text-xs"> {`- ${option.description}`}</p>
                                            <input
                                                type="radio"
                                                value={selectedOption ? option.amount : ''}
                                                {...register('donation')}
                                                className={`radio `}
                                                checked={selectedOption === option.amount ? true : false}  // Check the first option by default
                                                onChange={() =>
                                                    handleOptionChange(option.amount)
                                                }
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
                                        <p onClick={handleOtherAmountClicked} className='hover:cursor-pointer px-4 py-2'>Other amount</p> :

                                        <div className={`w-full  ${typeof DefaultValue !== 'string' && 'bg-blue-100'}
                                        ${isFocused ? 'border-2 border-blue-600 cursor-pointer bg-blue-100' : 'border-0'}
                                        ${customAmount !== 'Other amount' ? 'border-2 border-blue-600 cursor-pointer bg-blue-100' : 'border-0'} flex`}>
                                            <p className='pl-4 py-2'>£</p>
                                            <input
                                                type="text"
                                                className="borderless-input bg-blue-100 w-full pr-2 py-2"
                                                {...register('otherAmount', { required: true })}

                                                // defaultValue={typeof DefaultValue === 'string' ? DefaultValue : ''}

                                                value={customAmount}
                                                onClick={handleOtherAmountClicked} // when user will click Only amount
                                                onChange={handleOtherAmountChange}
                                                onKeyDown={handleOtherAmountKeyDown}
                                                onBlur={handleOtherAmountBlur}
                                            />
                                        </div>


                                }
                                {isTooltipVisible && (
                                    <div className=" w-fit mt-2 p-2 bg-red-500 text-white rounded">
                                        Minimum donation is £{minimumDonation}
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
                                {...register('HonoreeName')}
                                className={`input input-bordered w-full h-9 mt-2 border-2 focus:border-2 custom-placeholder`}
                                placeholder='Honoree name'
                            />
                        }
                    </div>

                    {/* <div className='mt-5 text-sm'>
                        <p className='underline'>Add comment</p>
                    </div> */}


                    <button className="w-full p-2 bg-blue-500 text-white rounded mt-6"
                        // onClick={isTooltipVisible ? setWarning(true) : setIsFirstStepCompleted(true)}
                        onClick={handleDonateButton}
                    >Donate</button>

                </form>
            }

            {
                isFirstStepCompleted &&
                <DonationFormBioDetails setIsFirstStepCompleted={setIsFirstStepCompleted} donationDetails={donationDetails}
                    closeModal={closeModal}></DonationFormBioDetails>
            }
        </div>
    )
}
