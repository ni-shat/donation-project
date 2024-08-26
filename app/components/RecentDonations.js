'use client';
import React, { useEffect, useState } from 'react';
import { collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { formatDistanceToNow } from 'date-fns';

export default function RecentDonations() {
    const [donations, setDonations] = useState([]);

    useEffect(() => {
        // Create a reference to the donations collection
        const donationsRef = collection(db, 'donations');
        
        // Create a query to order by timestamp and limit the results
        const donationsQuery = query(
            donationsRef,
            orderBy('timestamp', 'desc'),
            limit(10)
        );

        // Set up the real-time listener
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
                console.error('Error fetching donations: ', error);
            }
        );

        // Clean up the listener on unmount
        return () => unsubscribe();
    }, []);

    return (
        <div>
            <h2>Recent Donations</h2>
            <ul className='space-y-2'>
                {donations.map(donation => (
                    <li key={donation.id}>
                        <div>Amount: {donation.donation}</div>
                        <div>First Name: {donation.firstName}</div>
                        <div>Last Name: {donation.lastName}</div>
                        <div>Time Ago: {formatDistanceToNow(donation.timestamp.toDate(), { addSuffix: true })}</div>
                        {/* <div>Timestamp: {new Date(donation.timestamp.toDate()).toLocaleString()}</div> */}
                    </li>
                ))}
            </ul>
        </div>
    );
};
