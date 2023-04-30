import React from 'react';

const CardDetails = ({place}) => {
    return (
        <div className='h-[40vh] '>
            <h1 className='text-4xl tracking-widest'>{place.name}</h1>
            <p>{place.description.slice(0, 150)} ....</p>
            <button className='bg-amber-600 px-2 py-1 text-black font-semibold text-lg rounded-md'>Book Now</button>
        </div>
    );
};

export default CardDetails;