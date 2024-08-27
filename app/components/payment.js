import { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { loadStripe } from '@stripe/stripe-js';
import PayWithCard from './payWithCard';
export const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);


export default function Payment({ combinedData, showPayment, setShowPayment, setIsFirstStepCompleted, closeModal }) {

    const [amount, setAmount] = useState(0.0); // default amount in cents ($50.00)
    const [showPayWithCard, setShowPayWithCard] = useState(false); // default amount in cents ($50.00)
    const [showGooglePay, setShowGooglePay] = useState(false); // default amount in cents ($50.00)


    useEffect(() => {
        setAmount(parseFloat(combinedData.donation) * 100);
    }, [combinedData])




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
