import React from 'react';

const DashboardCommonCard = ({ title, titleInfo, Icon }) => {
    return (
        <div className='w-full h-[200px] md:h-[150px] bg-slate-300 space-y-2 text-white bg-gradient-to-r from-black to-gray-900 p-6 rounded-lg shadow-lg'>
            <div className='w-full h-[80%] flex justify-center items-center gap-2'>
                <Icon className='w-[50px] h-auto' />
                <h2 className='text-xs md:text-3xl font-semibold italic'>{titleInfo}</h2>
            </div>
            <div className='text-center'>
                <p className='font-semibold italic'>{title}</p>
            </div>
        </div>
    );
};

export default DashboardCommonCard;