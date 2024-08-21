import React from 'react';
import { MdOutlineAttachMoney } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";
import { FaStar } from "react-icons/fa";

const MenuFood = ({ itemFood }) => {
    console.log(itemFood)
    return (
        <div className="p-8 sm:flex sm:space-x-6 dark:bg-gray-50 dark:text-gray-800 shadow-lg">
            <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                <img src={itemFood?.food_image} alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
            </div>
            <div className="flex flex-col space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold">{itemFood?.food_name}</h2>
                    <div className='flex justify-start items-center gap-2'>
                        <MdOutlineAttachMoney className='w-[20px] h-auto' />
                        <p className='text-sm font-semibold'>{itemFood?.food_price}</p>
                    </div>

                </div>
                <div className="space-y-1">
                    <div className='flex justify-start items-center gap-2'>
                        <MdAccessTime className='w-[20px] h-auto' />
                        <p className='text-xs font-bold'>{itemFood?.food_cook_time}</p>
                    </div>
                    <div className='flex justify-start items-center gap-2'>
                        <FaStar className='w-[20px] h-auto' />
                        <p className='text-xs font-bold'>{itemFood?.food_rating}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MenuFood;