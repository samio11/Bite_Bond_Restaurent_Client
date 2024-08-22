import React from 'react';

const OurHistory = () => {
    return (
        <div className='max-w-screen-xl mx-auto my-4 flex flex-col-reverse md:flex-row justify-center items-center gap-3'>
            {/* Left Part */}
            <div className='flex-1 mt-10 md:mt-0 flex justify-center items-center'>
                <div className='space-y-4'>
                    <h2 className='text-3xl font-semibold italic text-center'>Our <span className='text-blue-500'>H</span>istory</h2>
                    <p className='text-sm text-gray-400 italic'><span className='text-blue-500'>Bite Bond</span> was born out of a love for flavorful food and a passion for bringing people together. What started as a small kitchen experiment turned into a full-fledged restaurant when we realized how food could create unforgettable bonds. Since our humble beginnings, we've focused on delivering dishes that blend tradition with creativity, making every bite a memorable experience. Today, Bite Bond stands as a symbol of culinary innovation and heartfelt hospitality, serving our community with pride.</p>
                </div>
            </div>
            {/* Right Part */}
            <div className='flex-1 flex h-[700px] md:h-auto justify-center items-center gap-3 relative'>
                <img className='w-[300px] h-[300px] rounded-lg' src="https://t4.ftcdn.net/jpg/03/57/91/11/360_F_357911175_lUNZj0iZx0B6UEj3JyJwhKnJQv1jT1i4.jpg" alt="" />
                <img className='w-[200px] h-[200px] rounded-lg absolute top-36 right-1 z-10 border-r-4-2' src="https://natashaskitchen.com/wp-content/uploads/2020/03/Pan-Seared-Steak-4-500x375.jpg" alt="" />
            </div>

        </div>

    );
};

export default OurHistory;