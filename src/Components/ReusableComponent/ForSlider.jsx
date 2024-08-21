import React from 'react';

const ForSlider = ({heading,content,images}) => {
    return (
        <div className='w-full h-[500px] md:h-[600px] flex flex-col-reverse md:flex-row justify-center items-center'>
            <div className='flex-1 flex justify-center items-center'>
                <div className='space-y-5'>
                    <h2 className='text-3xl text-center font-semibold italic'>{heading}</h2>
                    <p className='text-xs text-gray-400 text-center'>{content}</p>
                </div>
            </div>
            <div className='flex-1'>
                <img className='w-full h-[300px] md:h-[500px] rounded-xl' src={images} alt="" />
            </div>
        </div>
    );
};

export default ForSlider;