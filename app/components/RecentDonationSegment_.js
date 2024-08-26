

export async function getStaticProps() {
    let donations = [];
    let error = null;

    // try {
    //     const response = await fetch('http://localhost:4000/recent-donations');
    //     if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //     }
    //     donations = await response.json();
    // } catch (err) {
    //     error = err.message;
    //     console.error('Error fetching donations:', error);
    // }
    // hi
    // const fetchDonations = async () => {
    //     try {
    //         const response = await fetch('http://localhost:4000/recent-donations');
    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }
    //         donations = await response.json();
    //     } catch (error) {
    //         error = error.message;
    //     } 
    // };
    // fetchDonations();
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        donations = await response.json();
        console.log(await response.json());
    } catch (err) {
        error = err.message;
    }
    //  hi
    console.log('checking donations in get static props. :', donations);
    return {
        props: {
            donations,
            error // Pass error to props if needed
        },
        revalidate: 60 // Revalidate every 60 seconds
    };
}


export default function RecentDonationSegment_({ donations }) {
    console.log("RECENT DONATIONS RECENT DONATIONS RECENT DONATIONS: ", donations);

    // Function to convert Firestore Timestamp to Date
    const convertTimestampToDate = (timestamp) => {
        return new Date(timestamp._seconds * 1000); // Convert seconds to milliseconds
    };

    return (
        <div className='w-full mt-28 flex gap-10 justify-between '>
            <div className='flex flex-col gap-4 items-center justify-center text-center font-semibold w-2/4'>
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

            <div className="card bg-base-100 w-96 shadow-xl mr-14">
                <div className="card-body border rounded-2xl">
                    <h2 className="card-title mx-auto">Recent Donations</h2>
                    <div>
                        {donations.length > 0 ? (
                            donations.map(d => (
                                <div key={d.id}>
                                    <div className='flex gap-4 text-base mt-5'>
                                        <span className='w-fit font-semibold capitalize'>{d.name}</span>
                                        <span className='w-fit text-primary'>£{d.id}</span>
                                    </div>
                                    {/* <div className='flex gap-4 text-base mt-5'>
                                        <span className='w-fit font-semibold capitalize'>{d.firstName} {d.lastName}</span>
                                        <span className='w-fit text-primary'>£{d.donation}</span>
                                    </div>
                                    <p className='font-normal'>{d.location}</p>
                                    <p className='text-gray-400'>
                                        {formatDistanceToNow(convertTimestampToDate(d.timestamp), { addSuffix: true })}
                                    </p> */}
                                </div>
                            ))
                        ) : (
                            <p>No recent donations available.</p>
                        )}
                    </div>
                    <div className="card-actions mt-5">
                        <button className="btn btn-primary w-full">Donate</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
