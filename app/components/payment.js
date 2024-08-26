import { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import CheckoutForm_Card from './checkOutForm_Card';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PayWithCard from './payWithCard';
export const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);


// const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

export default function Payment({ combinedData, showPayment, setShowPayment, setIsFirstStepCompleted, closeModal }) {

    const [amount, setAmount] = useState(0.0); // default amount in cents ($50.00)
    const [showPayWithCard, setShowPayWithCard] = useState(false); // default amount in cents ($50.00)
    const [showGooglePay, setShowGooglePay] = useState(false); // default amount in cents ($50.00)

    // //console.log('combined data', combinedData)
    //console.log('checking true false data', showPayWithCard, showGooglePay)

    useEffect(() => {
        setAmount(parseFloat(combinedData.donation) * 100);
    }, [combinedData])




    // const handleCardCheckout = async () => {
    //     const stripe = await stripePromise;

    //     const response = await fetch('/api/create-checkout-session', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ amount }),
    //     });

    //     const session = await response.json();

    //     const result = await stripe.redirectToCheckout({
    //         sessionId: session.id,
    //     });

    //     if (result.error) {
    //         console.error(result.error.message);
    //     }
    // };


    // const handleGooglePay = async () => {
    //     const stripe = await stripePromise;

    //     const { error } = await stripe.confirmPayment({
    //         elements: paymentRequest.elements,
    //         confirmParams: {
    //             return_url: `${process.env.NEXT_PUBLIC_URL}/success`,
    //         },
    //     });

    //     if (error) {
    //         console.error(error.message);
    //     }
    // };

    const handleClickedBack = () => {
        setShowPayment(false);
    }


    return (
        <div className=' h-full'>
            {
                (!showPayWithCard && !showGooglePay) &&
                <div>
                    <div className='hover:bg-gray-100 w-fit p-2 hover:cursor-pointer rounded-full'>
                        <FaArrowLeft onClick={handleClickedBack} />
                    </div>
                    <div className='flex items-center mt-3 mb-6 pb-2'>
                        <div className='flex justify-center items-center border-b pb-2 flex-grow'>
                            <p className='text-xl font-normal text-center'>You donate</p>
                        </div>
                    </div>
                    <p className='text-3xl font-semibold text-center'>{`$${combinedData.donation}`}</p>

                    <div className=' mt-10 '>
                        <button className='flex justify-center bg-gray-900 py-2 text-white w-full' onClick={() => setShowPayWithCard(true)}>
                            Pay with Card
                        </button>
                    </div>

                    {/* <button className='flex justify-center mt-4 bg-blue-900 py-2 text-white w-full' onClick={() => setShowGooglePay(true)}>
                        Pay with Google Pay
                    </button> */}
                </div>

            }

            {
                showPayWithCard &&
                <PayWithCard 
                setShowPayWithCard={setShowPayWithCard} 
                showPayWithCard={showPayWithCard} 
                setShowGooglePay={setShowGooglePay} 
                amount={amount} 
                combinedData={combinedData}
                setShowPayment={setShowPayment} // passing oldest state to cut all from success payment page
                setIsFirstStepCompleted={setIsFirstStepCompleted} // passing oldest state to cut all from success payment page
                closeModal={closeModal} // passing oldest state to close the whole modal
                ></PayWithCard>
            }


            {showGooglePay &&
                <PayWithCard></PayWithCard>
            }

        </div>
    );
}
