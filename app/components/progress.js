'use client';
import React, { useEffect, useState } from 'react';
import DonateNowButton from './donateNowButton';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

export default function Progress() {
    const [totalAmount, setTotalAmount] = useState(0);
    const [error, setError] = useState(null);
    const goalAmount = 100000;
    console.log('in progress.js')

    useEffect(() => {
        console.log('im in useeffect in progress.js')
        const totalAmountRef = doc(db, 'totalCollected', 'amount');

        const unsubscribe = onSnapshot(
            totalAmountRef,
            (docSnapshot) => {
                if (docSnapshot.exists()) {
                    console.log("Checking data in progress.js", docSnapshot.data().totalAmount)
                    setTotalAmount(docSnapshot.data().totalAmount || 0);
                } else {
                    setTotalAmount(0);
                }
            },
            (error) => {
                setError('Error fetching total amount: ' + error.message);
            }
        );

        return () => unsubscribe();
    }, []);

    // Calculate the percentage of the goal achieved
    const progressPercentage = totalAmount > 0 ? (totalAmount / goalAmount) * 100 : 0;

    // Make sure the progressPercentage is within 0 to 100
    const progressValue = Math.min(progressPercentage, 100);

    return (
        <div className='xl:mt-12 md:mt-10 sm:mt-9 mt-8 flex flex-col items-center gap-4 px-2'>
            <p className='text-center font-semibold text-gray-900'>
                <span className='
                2xl:text-4xl xl:text-4xl lg:text-2xl md:text-2xl sm:text-2xl text-2xl
                '>£{Math.floor(totalAmount)}</span>
                <span className='text-gray-600 
                 2xl:text-3xl xl:text-3xl lg:text-xl md:text-xl sm:text-xl text-xl
                font-light'> of £{goalAmount}</span>
            </p>
            {/* <progress className="progress progress-primary w-full 
            2xl:h-6 xl:h-6 lg:h-4 md:h-4 sm:h-3 h-3
            " value={progressValue} max="100"></progress> */}

            <style jsx>{`
                .progress-primary {
                    background-color: #e5e7eb; /* Background color of the progress bar */
                }
                .progress-primary::-webkit-progress-value {
                    background-color: #387084; /* Change the fill color for WebKit browsers */
                }
                .progress-primary::-moz-progress-bar {
                    background-color: #387084; /* Change the fill color for Firefox */
                }
                `}</style>

            <progress
                className="progress progress-primary w-full 
            2xl:h-6 xl:h-6 lg:h-4 md:h-4 sm:h-3 h-3"
                value={progressValue}
                max="100"
            ></progress>


            <DonateNowButton
                width={"w-56"} lgWidth={"w-56"}
                height={"h-[70px]"}
                btnText={"Donate Now"}
                textSize={"text-2xl"}
                font={"font-normal"}
            ></DonateNowButton>
        </div>
    );
}
