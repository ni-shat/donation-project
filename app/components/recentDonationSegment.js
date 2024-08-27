'use client';
import React, { useEffect, useState } from 'react'
import { collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { formatDistanceToNow } from 'date-fns';
import DonateNowButton from './donateNowButton';


export default function RecentDonationSegment() {

    const [donations, setDonations] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const donationsRef = collection(db, 'donations');

        const donationsQuery = query(
            donationsRef,
            orderBy('timestamp', 'desc'),
            limit(10)
        );

        const unsubscribe = onSnapshot(
            donationsQuery,
            (snapshot) => {
                const newDonations = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setDonations(newDonations);
            },
            (error) => {
                setError('Error fetching donations: ', error);
            }
        );

        return () => unsubscribe();
    }, []);

    console.log('checking donations :', donations)

    return (
        <div className='w-full lg:mt-28 mt-14 flex gap-10 justify-between flex-col md:flex-row'>
            <div className='flex flex-col lg:gap-4 gap-1 items-center  justify-center text-center font-semibold md:w-2/4 w-full'>
                <h3 className='lg:text-3xl text-2xl font-semibold'>
                    With No Food, No Water...
                </h3>
                <h2 className='lg:text-5xl text-3xl lg:leading-snug leading-normal'>
                    Families Rely on Aid for Survival
                </h2>
                <p className='text-xl font-normal'>
                    Help us gift families in Syria with Hot Nutritious Meals for a Whole month for just £56

                </p>
            </div>

            <div className="card bg-white md:w-96 w-full shadow-xl md:mr-14 mr-0">
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
                                <p className='text-gray-400'>
                                    {formatDistanceToNow(d.timestamp.toDate(), { addSuffix: true })}
                                </p>
                            </div>)
                        }
                    </div>
                    <div className="card-actions mt-5">
                        <DonateNowButton width={"w-56"} height={"h-[3rem]"} btnText={"Donate"}></DonateNowButton>
                    </div>
                </div>
            </div>
        </div>
    )
}
