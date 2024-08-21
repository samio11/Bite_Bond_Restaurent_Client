import React from 'react';

const ForHeadingAndSubHeading = ({title,subtitle}) => {
    return (
        <div className='my-8 space-y-2'>
            <h2 className='text-center text-3xl font-semibold italic'>{title}</h2>
            <hr className='w-[200px] h-[4px] bg-gray-400 mx-auto' />
            <p className='text-center text-xs text-blue-400 italic'>{subtitle}</p>
        </div>
    );
};

export default ForHeadingAndSubHeading;