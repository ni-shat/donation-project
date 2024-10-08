'use client';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import DonationFormBioDetails from './donationFormBioDetails';
import { useModal } from '../context/ModalContext';

export default function DonationForm({ selectedStepCardAmount, resetForm, closeModal }) {

    const { openingModalFromOtherBtn } = useModal();

    const donationOptions = [
        {
            id: 1,
            type: 'Give once',
            amount: "5",
            description: "Feed 1 needy person for a month (Syria)"
        },
        {
            id: 2,
            type: 'Give once',
            amount: "20",
            description: "Feed 3 needy people for a month (Syria)"
        },
        {
            id: 3,
            type: 'Give once',
            amount: "50",
            description: "Feed 7 needy people for a month (Syria)"
        },
        {
            id: 4,
            type: 'Give once',
            amount: "100",
            description: "Feed 7 needy people for a month (Syria)"
        }
    ];
    const [selectedOption, setSelectedOption] = useState(null);
    const [DefaultValue, setDefaultValue] = useState('Other ');
    const [isFocused, setIsFocused] = useState(false);
    const [customAmount, setCustomAmount] = useState('Other amount');
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);
    const [isDedicated, setIsDedicated] = useState(false);
    const [warning, setWarning] = useState(false);
    const [isFirstStepCompleted, setIsFirstStepCompleted] = useState(false);
    const [shakeKey, setShakeKey] = useState(0); // Key to force re-render
    const [donationDetails, setDonationDetails] = useState(false);
    const minimumDonation = 1.0;

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
        if (openingModalFromOtherBtn) {
            setSelectedOption("5"); 
            setValue('donation', '5');
        } else {
            setSelectedOption(null); 
        }
    }, [openingModalFromOtherBtn, setValue]);

    useEffect(() => {
        if (customAmount !== 'Other amount') {
            setSelectedOption(null)
        }
    }, [customAmount])

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
    
    const handleOtherAmountClicked = () => {
        setIsFocused(true);
        if (selectedOption !== null) {
            
            setCustomAmount(selectedOption);
            setValue('otherAmount', selectedOption);
        }
        setSelectedOption(null);
    };

    const handleOtherAmountBlur = () => {
        const amount = parseFloat(customAmount.replace('$', ''), 10);
        if (amount < minimumDonation) {
            setIsTooltipVisible(true);
        } else {
            setIsTooltipVisible(false);
        }
    };

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
        if (isTooltipVisible) {
            setWarning(true);
            setShakeKey(prevKey => prevKey + 1);
            setIsFirstStepCompleted(false)
        }
    }


    const onSubmit = async (data) => {
        const amount = parseFloat(data.donation);
        delete data.otherAmount;
        console.log("Amount in donationFormTwo: ", amount, data)

        if (amount < minimumDonation) {
            setError('otherAmount', true);
            return;
        }
        setDonationDetails(data);
        setIsFirstStepCompleted(true);
    };


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
                                            <div className='flex items-center justify-between gap-1 '>
                                                <div className=' flex-grow md:w-fit w-[17%]'>
                                                    <p className='font-semibold text-xl '>{`£${option.amount}`}</p>
                                                </div>
                                                <div className='flex items-center gap-1'>
                                                    <p>- </p>
                                                    <p className="md:text-base text-[11px]"> {`${option.description}`}</p>
                                                </div>
                                            </div>
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


                            <li >
                                {
                                    customAmount === 'Other amount' ?
                                        <p onClick={handleOtherAmountClicked} className='hover:cursor-pointer px-4 py-2 mt-2 border border-black bg-gray-100'>Other amount</p> :

                                        <div className={`w-full mt-2 ${typeof DefaultValue !== 'string' && 'bg-blue-100'}
                                        ${isFocused ? 'border-2 border-[#387084] cursor-pointer bg-blue-100' : 'border-0'}
                                        ${customAmount !== 'Other amount' ? 'border-2 border-[#387084] cursor-pointer bg-blue-100' : 'border-0'} flex`}>
                                            <p className='pl-4 py-2'>£</p>
                                            <input
                                                type="text"
                                                className="borderless-input bg-blue-100 w-full pr-2 py-2"
                                                {...register('otherAmount', { required: true })}
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
                            <input
                                type="checkbox"
                                defaultChecked={isDedicated}
                                className="disabled w-[14px] h-[14px] border appearance-none checked:bg-[#387084] checked:border-transparent focus:outline-none focus:ring-1 focus:ring-[#387084] relative"
                                onChange={(e) => setIsDedicated(e.target.checked)}
                            />
                            <span className="label-text">Dedicate this donation</span>
                            {/* Adding checkmark when checkbox is checked */}
                            <style jsx>{`
                                input:checked::after {
                                    content: "✔";
                                    font-size: 0.70rem;
                                    color: white;
                                    position: absolute;
                                    top: 50%;
                                    left: 50%;
                                    transform: translate(-50%, -50%);
                                    text-align: center;
                                }
                            `}</style>
                        </label>
                        {isDedicated && (
                            <input
                                type="text"
                                {...register('HonoreeName')}
                                className="input input-bordered w-full h-9 mt-2 border-2 focus:border-2 custom-placeholder bg-white"
                                placeholder="Honoree name"
                            />
                        )}
                    </div>




                    <button className="w-full p-2 bg-[#387084] text-white rounded mt-6"
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
