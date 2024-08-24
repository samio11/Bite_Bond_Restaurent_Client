import React from 'react';
import { FaBowlFood } from "react-icons/fa6";
import { BsCashCoin } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { IoTime } from "react-icons/io5";

const MenuSingleCard = ({ data }) => {
    console.log(data)
    return (
        <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <img className="object-cover object-center w-full h-56" src={data?.food_image} alt="avatar" />

            <div className="flex items-center px-6 py-3 bg-gray-900">

                <FaBowlFood className='w-[20px] h-auto text-white' />
                <h1 className={`mx-3 text-lg font-semibold 
                        ${data?.food_category === 'Salad' && 'text-green-600'}
                        ${data?.food_category === 'Pizza' && 'text-violet-600'}
                        ${data?.food_category === 'Soup' && 'text-orange-600'}
                        ${data?.food_category === 'Dessert' && 'text-white'}
                        ${data?.food_category === 'Drink' && 'text-yellow-600'}
                        `}>{data?.food_category}</h1>
            </div>

            <div className="px-6 py-4">
                <h1 className="text-xl font-semibold text-gray-800 dark:text-white">{data?.food_name}</h1>

                <p className="py-2 text-gray-700 dark:text-gray-400">{data?.food_description}</p>

                <div className="flex justify-start items-center mt-4 text-gray-700 dark:text-gray-200">
                    <FaStar className='w-[20px] h-auto' />
                    <h1 className="px-2 text-sm">{data?.food_rating}</h1>
                </div>

                <div className="flex justify-start items-center mt-4 text-gray-700 dark:text-gray-200">
                    <BsCashCoin className='w-[20px] h-auto' />
                    <h1 className="px-2 text-sm">{data?.food_price} $</h1>
                </div>
                <div className="flex justify-start items-center mt-4 text-gray-700 dark:text-gray-200">
                    <IoTime className='w-[20px] h-auto' />
                    <h1 className="px-2 text-sm">{data?.food_cook_time} $</h1>
                </div>

                <div className='flex justify-around items-center my-4'>
                   <button className='btn btn-outline'>View Details</button>
                   <button className='btn btn-outline'>Add Cart</button>
                </div>


            </div>
        </div>
    );
};

export default MenuSingleCard;