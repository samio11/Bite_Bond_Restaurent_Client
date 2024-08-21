import React from 'react';

const CommonBox = ({pic,title,subTitle}) => {
    return (
        <div className="relative h-[400px] bg-cover bg-center flex items-center justify-center rounded-lg"  style={{ backgroundImage: `url(${pic})` }}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            {/* Content */}
            <div className="relative z-10 text-center text-white p-6 max-w-lg mx-auto bg-black bg-opacity-50 rounded-md">
                <h1 className="text-4xl font-semibold mb-4">{title}</h1>
                <p className="text-xs italic">{subTitle}</p>
            </div>
        </div>
    );
};

export default CommonBox;