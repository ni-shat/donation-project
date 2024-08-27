import { useState } from 'react';
import { useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';
import { FaArrowLeft } from 'react-icons/fa';
import PaymentSuccess from './paymentSuccess';
import { createDonationData } from '@/services/api';

const CheckoutForm_Card = ({ amount, setShowPayWithCard, setShowPayment, setIsFirstStepCompleted, closeModal, combinedData }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [serverError, setServerError] = useState(null);
    const [serverSuccess, setServerSuccess] = useState(null);
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setProcessing(true);
        setError(null);

        // Get references to the card elements
        const cardNumber = elements.getElement(CardNumberElement);
        const cardExpiry = elements.getElement(CardExpiryElement);
        const cardCvc = elements.getElement(CardCvcElement);

        if (!cardNumber || !cardExpiry || !cardCvc) {
            setError('Card details not found.');
            setProcessing(false);
            return;
        }

        // Create a PaymentMethod
        const { error: paymentMethodError, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardNumber,
            billing_details: {
                // Optional: include billing details if needed
            },
        });

        if (paymentMethodError) {
            setError(paymentMethodError.message);
            setProcessing(false);
            return;
        }

        // Call your API to create a payment intent
        const response = await fetch('https://charity-project-server.vercel.app/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount }),
        });

        const { clientSecret } = await response.json();

        if (!clientSecret) {
            setError('Failed to get client secret from server.');
            setProcessing(false);
            return;
        }

        // Confirm the payment with the client secret
        const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: paymentMethod.id,
        });

        setProcessing(false);

        if (confirmError) {
            setError(confirmError.message);
            setSuccess(null);
        }
        else if (paymentIntent.status === 'succeeded') {
            setError(null);
            setSuccess(true);
            setTransactionId(paymentIntent.id);
            const updatedCombinedData = { ...combinedData, paymentIntentId: paymentIntent.id };

            // Post data to your database
            try {
                const donationResponse = await createDonationData(updatedCombinedData);
                console.log('Donation data posted successfully:', donationResponse);
                setServerError(null);
                setServerSuccess(true);
            }
            catch (error) {
                let errorMessage = 'An unexpected error occurred';

                // Check for different types of errors
                if (error.response) {
                    // Server responded with a status other than 200 range
                    if (error.response.status === 400) {
                        errorMessage = 'Bad request. Please check your input and try again.';
                    } else if (error.response.status === 500) {
                        errorMessage = 'Server error. Please try again later.';
                    } else {
                        errorMessage = `Unexpected error: ${error.response.status}`;
                    }
                } else if (error.request) {
                    // Request was made but no response was received
                    errorMessage = 'No response from the server. Please check your internet connection and try again.';
                } else {
                    // Something happened in setting up the request
                    errorMessage = `Error in request setup: ${error.message}`;
                }
                console.log(error);
                console.log(errorMessage);
                setServerError(errorMessage);
                setServerSuccess(null);
            }

            // post total amount data in totalCollected collection
            try {
                const response = await fetch('https://charity-project-server.vercel.app/update-total-collected', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ amount }),
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                console.log('Response from server:', data.message);
            } catch (error) {
                console.error('Error posting total collected amount:', error);
            }  
            // end posting data in totalCollected collection
        }
        else {
            setError('Payment failed.');
        }
    };

    const handleClickedBack = () => {
        setShowPayWithCard(false);
        setShowPayment(false);
        setIsFirstStepCompleted(false);
    }

    return (
        <div className=' h-full'>
            {/* <div className='hover:bg-gray-100 w-fit p-2 hover:cursor-pointer rounded-full'>
                <FaArrowLeft onClick={handleClickedBack} />
            </div> */}

            {
                !success &&
                <div>
                    <div className='hover:bg-gray-100 w-fit p-2 hover:cursor-pointer rounded-full'>
                        <FaArrowLeft onClick={() => setShowPayWithCard(false)} />
                    </div>
                    <div className='flex items-center mt-0 mb-6 pb-2'>
                        <div className='flex justify-center items-center border-b pb-2 flex-grow'>
                            <p className='text-xl font-normal text-center'>Debit/Credit card</p>
                        </div>
                    </div>
                    <div className='mt-5 text-center mx-auto'>
                        <p>Please provide your card details to continue with your donation.</p>
                    </div>
                    <form onSubmit={handleSubmit} className='mt-10 flex flex-col gap-4'>
                        <div className='stripe-input'>
                            <label className='px-1'>Card number</label>
                            <CardNumberElement className='p-2 py-3 mt-1 border border-gray-300 rounded' />
                        </div>
                        <div className='stripe-input'>
                            <label className='px-1'>Expiration date</label>
                            <CardExpiryElement className='p-2 py-3 mt-1 border border-gray-300 rounded' />
                        </div>
                        <div className='stripe-input'>
                            <label className='px-1'>CVC</label>
                            <CardCvcElement className='p-2 py-3 mt-1 border border-gray-300 rounded' />
                        </div>
                        <button type="submit" disabled={!stripe || processing} className='px-2 py-3 bg-blue-600 text-white rounded font-semibold hover:cursor-pointer hover:bg-opacity-50'>
                            {processing ? 'Processing...' : `Donate $${amount / 100}`}
                        </button>
                    </form>
                    {error && <div className='text-red-500'>{error}</div>}
                </div>
            }

            {
                success &&
                <PaymentSuccess amount={amount} handleClickedBack={handleClickedBack} transactionId={transactionId}
                    closeModal={closeModal} //passing oldest state to close the whole modal
                ></PaymentSuccess>
            }
        </div>
    );
};

export default CheckoutForm_Card;
