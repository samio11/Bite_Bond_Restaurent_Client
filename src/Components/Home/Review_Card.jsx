import React from 'react';
import { CiStar } from "react-icons/ci";

const Review_Card = ({ data }) => {
    console.log(data)
    return (
        <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                <img
                    className="object-cover w-full h-56 md:h-64 xl:h-80"
                    src={data?.rating_given_image}
                    alt="Person"
                />
                <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                    <p className="mb-1 text-lg font-bold text-gray-100">
                        {data?.rating_given_name}
                    </p>
                    <p className="mb-4 text-xs text-gray-100">{data?.rating_given_email}</p>
                    <p className="mb-4 text-xs tracking-wide text-gray-400">
                        {data?.rating_given_desc}
                    </p>
                    <div className="flex items-center justify-center space-x-3">
                      <CiStar className='w-[15px] h-auto text-yellow-500'/>
                      <p className='text-yellow-200 text-xs'>{data?.rating}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review_Card;