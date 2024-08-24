import React from 'react';
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { CiStar } from "react-icons/ci";
import { BsCash } from "react-icons/bs";
import { CiTimer } from "react-icons/ci";
import { FaEarthAmericas } from "react-icons/fa6";
import { IoMan } from "react-icons/io5";
import { FaBowlFood } from "react-icons/fa6";

const MenuDetailsModal = ({ isOpen, closeModal, totalData }) => {
    console.log(totalData)
    return (
        <div>
            <Dialog open={isOpen} as="div" className="relative z-50 focus:outline-none" onClose={closeModal}>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel
                            transition
                            className="w-full max-w-md rounded-xl bg-black p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                        >
                            <DialogTitle as="h3" className="text-base/7 font-medium text-white">
                                {totalData?.food_name}
                            </DialogTitle>
                            <p className="mt-2 text-sm/6 text-white/50">
                                {totalData?.food_description}
                            </p>
                            <img className='w-full h-[250px] rounded-xl my-3' src={totalData?.food_image} alt="" />
                            <div className='flex justify-start items-center gap-2 my-2'>
                                <CiStar className='text-yellow-500' size={24} />
                                <p className='text-white text-xs font-semibold'>{totalData?.food_rating}</p>
                            </div>
                            <div className='flex justify-start items-center gap-2 my-2'>
                                <FaBowlFood className='text-yellow-500' size={24} />
                                <p className={`text-xs font-semibold 
                        ${totalData?.food_category === 'Salad' && 'text-green-600 bg-green-100 p-2 rounded-xl'}
                        ${totalData?.food_category === 'Pizza' && 'text-violet-600 bg-violet-100 p-2 rounded-xl'}
                        ${totalData?.food_category === 'Soup' && 'text-orange-600 bg-orange-100 p-2 rounded-xl'}
                        ${totalData?.food_category === 'Dessert' && 'text-black bg-gray-200 p-2 rounded-xl'}
                        ${totalData?.food_category === 'Drink' && 'text-yellow-600 bg-yellow-100 p-2 rounded-xl'}
                        `}>{totalData?.food_category}</p>
                            </div>
                            <div className='flex justify-start items-center gap-2 my-2'>
                                <BsCash className='text-yellow-500' size={24} />
                                <p className='text-white text-xs font-semibold'>{totalData?.food_price} $</p>
                            </div>
                            <div className='flex justify-start items-center gap-2 my-2'>
                                <CiTimer className='text-yellow-500' size={24} />
                                <p className='text-white text-xs font-semibold'>{totalData?.food_cook_time}</p>
                            </div>
                            <div className='flex justify-start items-center gap-2 my-2'>
                                <FaEarthAmericas className='text-yellow-500' size={24} />
                                <p className='text-white text-xs font-semibold'>{totalData?.cusine_type}</p>
                            </div>
                            <div className='flex justify-start items-center gap-2 my-2'>
                                <IoMan className='text-yellow-500' size={24} />
                                <p className='text-white text-xs font-semibold'>{totalData?.food_calories} Kcal</p>
                            </div>
                            <div className='flex justify-start items-center gap-2 my-2'>
                                <p className='text-white text-xs font-semibold'>Spice Level:- {totalData?.food_spicy_level} Kcal</p>
                            </div>
                            <div className="mt-4">
                                <Button
                                    className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                                    onClick={closeModal}
                                >
                                    Close
                                </Button>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </div>
    );
};

export default MenuDetailsModal;