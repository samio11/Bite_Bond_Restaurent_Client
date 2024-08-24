import React, { useContext, useState } from 'react';
import { FaBowlFood } from "react-icons/fa6";
import { BsCashCoin } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import MenuDetailsModal from './MenuDetailsModal';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { ContextProvider } from '../../AllContext/ContextApi';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import toast from 'react-hot-toast';

const MenuSingleCard = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false)
    const { user } = useContext(ContextProvider)
    const closeModal = () => {
        setIsOpen(false)
    }
    // Post data to DataBase
    const { mutateAsync: saveRequestedData } = useMutation({
        mutationFn: async (ordered_food) => {
            const { data } = await axios.post(`${import.meta.env.VITE_SERVER_URL}/ordering-food`, ordered_food)
            return data;
        },
        onSuccess: (data) => {
            console.log(data)
            toast.success("Successfully! Ordered")
        },
        onError: (error) => {
            console.log(error)
            toast.error("Failed to order")
        }
    })
    const handleCart = async () => {
        const orderingInfo = {
            ...data, "host": {
                "name": user?.displayName,
                "email": user?.email,
                "photo": user?.photoURL
            }
        }
        delete orderingInfo._id
        console.log('inside function:- ', orderingInfo)
        Swal.fire({
            title: "Are you sure?",
            text: "Please Confirm the Order",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await saveRequestedData(orderingInfo)
                }
                catch (error) {
                    toast.error("Order Request Failed!")
                }
            }
        });
    }
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
                    <button onClick={() => setIsOpen(true)} className='btn btn-outline'>View Details</button>
                    <button onClick={handleCart} className='btn btn-outline'>Add Cart</button>
                </div>

                <MenuDetailsModal isOpen={isOpen} closeModal={closeModal} totalData={data}></MenuDetailsModal>


            </div>
        </div>
    );
};

export default MenuSingleCard;