'use client';
import React, { useEffect, useState } from 'react'
import { formatDistanceToNow } from 'date-fns';
import DonateNowButton from './donateNowButton';


export default function RecentDonationSegment() {

    const [donations, setDonations] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch recent donations from the backend
        const fetchDonations = async () => {
            try {
                const response = await fetch('https://charity-project-server.vercel.app/recent-donations');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setDonations(data);
            } catch (error) {
                setError(error.message);
            } 
        };

        fetchDonations();
    }, []);

    // const data = [
    //     {
    //         "name": "Mehd M.",
    //         "id": 1,
    //         "amount": "$18.85",
    //         "location": "Paris, France",
    //         "timeAgo": "2 minutes ago"
    //     },
    //     {
    //         "name": "Jerren L.",
    //         "id": 2,
    //         "amount": "$14.74",
    //         "location": "Hong Kong",
    //         "timeAgo": "2 minutes ago"
    //     },
    //     {
    //         "name": "Abdou S.",
    //         "id": 3,
    //         "amount": "$5.45",
    //         "location": "Tudela, Spain",
    //         "timeAgo": "2 minutes ago"
    //     }
    // ]

    console.log('checking donations :',donations)
      // Function to convert Firestore Timestamp to Date
      const convertTimestampToDate = (timestamp) => {
        return new Date(timestamp._seconds * 1000); // Convert seconds to milliseconds
    };


    return (
        <div className='w-full mt-28 flex gap-10 justify-between'>
            <div className='flex flex-col gap-4 items-center  justify-center text-center font-semibold w-2/4'>
                <h3 className='text-3xl font-semibold'>
                    With No Food, No Water...
                </h3>
                <h2 className='text-5xl leading-snug'>
                    Families Rely on Aid for Survival
                </h2>
                <p className='text-xl font-normal'>
                    Help us gift families in Syria with Hot Nutritious Meals for a Whole month for just £56

                </p>
            </div>

            <div className="card bg-white w-96 shadow-xl mr-14">
                <div className="card-body border rounded-2xl">
                    <h2 className="card-title mx-auto">Recent Donations</h2>
                    {/* recent donation list */}
                    <div className='overflow-y-auto h-60'>
                        {
                            donations.length > 0 && donations.map(d => <div key={d.id}>
                                <div className='flex gap-4 text-base mt-5'>
                                    <span className='w-fit  font-semibold capitalize'>{d.firstName} {d.lastName}</span>
                                    <span className='w-fit  text-primary'>£{d.donation}</span>
                                </div>
                                <p className='font-normal'>{d.location}</p>
                                {/* <p className='text-gray-400'>{d.timestamp}</p> */}
                                <p className='text-gray-400'>
                                        {formatDistanceToNow(convertTimestampToDate(d.timestamp), { addSuffix: true })}
                                </p>
                                    {/* <div>Time Ago: {formatDistanceToNow(d.timestamp.toDate(), { addSuffix: true })}</div> */}
                            </div>)
                        }
                    </div>
                    <div className="card-actions mt-5">
                        {/* <button className="btn btn-primary w-full">Donate</button> */}
                        <DonateNowButton width={"w-56"} height={"h-[3rem]"} btnText={"Donate"}></DonateNowButton>
                    </div>
                </div>
            </div>
        </div>
    )
}
