import React, { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm_Card from './checkOutForm_Card';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function PayWithCard({ setShowPayWithCard, showPayWithCard, amount, setShowPayment, setIsFirstStepCompleted, closeModal, combinedData }) {

    return (
        <div className=' h-full'>

            {
                showPayWithCard &&
                <Elements stripe={stripePromise}>
                    <CheckoutForm_Card
                        amount={amount}
                        combinedData={combinedData}
                        setShowPayWithCard={setShowPayWithCard}
                        setShowPayment={setShowPayment} // passing oldest state
                        setIsFirstStepCompleted={setIsFirstStepCompleted} //passing oldest state
                        closeModal={closeModal} //passing oldest state to close the whole modal
                    ></CheckoutForm_Card>
                </Elements>
            }

        </div >
    )
}
