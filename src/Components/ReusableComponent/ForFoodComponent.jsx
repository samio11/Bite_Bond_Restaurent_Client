import React from 'react';

const ForFoodComponent = ({ pic, text }) => {
    return (
        <div className="w-full h-[200px] md:h-[300px] relative rounded-lg overflow-hidden">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-black opacity-70"></div>

            {/* Background Image with dynamic URL */}
            <div
                className="w-full h-full bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${pic})` }}
            ></div>

            {/* Text Overlay */}
            <p className="text-center absolute inset-0 flex items-end justify-center text-white font-semibold italic mb-3">
                {text}
            </p>
        </div>
    );
};

export default ForFoodComponent;