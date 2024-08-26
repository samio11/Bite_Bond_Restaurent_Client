import React, { useContext } from 'react';
import { ContextProvider } from '../../AllContext/ContextApi';
import useRole from '../CustomHooks/useRole';
import MenuItemSideBar from './MenuItemSideBar';
import { FaDashcube } from "react-icons/fa6";
import { IoFastFoodSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";
import { BsCashCoin } from "react-icons/bs";
import { IoArrowBackCircle } from "react-icons/io5";

const SideBar = () => {
    const { user } = useContext(ContextProvider)
    const [role] = useRole()
    return (
        <div>
            <aside className="flex flex-col w-full h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
                <a href="#" className="mx-auto">
                    <img className="w-[100px] h-[100px]" src="https://marketplace.canva.com/EAF1XAgJrCg/1/0/1600w/canva-white-brown-simple-restaurant-logo-koIA1HEug0Q.jpg" alt="" />
                </a>

                <div className="flex flex-col items-center mt-6 -mx-2">
                    <img referrerPolicy='no-referrer' className="object-cover w-24 h-24 mx-2 rounded-full" src={user?.photoURL} alt="avatar" />
                    <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">{user?.displayName}</h4>
                    <p className="badge badge-neutral my-2">{role}</p>
                </div>

                <div className="flex flex-col justify-between flex-1 mt-6">
                    <nav className='space-y-3'>
                        {
                            role === 'admin' && <>
                                <MenuItemSideBar icon={FaDashcube} label={'DashBoard'} address={'/dashboard'}></MenuItemSideBar>
                                <MenuItemSideBar icon={IoFastFoodSharp} label={'Manage Foods'} address={'manage-item'}></MenuItemSideBar>
                                <MenuItemSideBar icon={FaUser} label={'Manage Users'} address={'all-user'}></MenuItemSideBar>
                                <MenuItemSideBar icon={FaRegBookmark} label={'Bookings'} address={'manage-booking'}></MenuItemSideBar>
                                <MenuItemSideBar icon={IoArrowBackCircle} label={'Back Home'} address={'/'}></MenuItemSideBar>
                            </>
                        }
                        {
                            role === 'guest' && <>
                                <MenuItemSideBar icon={FaDashcube} label={'DashBoard'} address={'/dashboard'}></MenuItemSideBar>
                                <MenuItemSideBar icon={CiShoppingCart} label={'My Cart'} address={'my-cart'}></MenuItemSideBar>
                                <MenuItemSideBar icon={BsCashCoin} label={'Payment History'} address={'my-payments'}></MenuItemSideBar>
                                <MenuItemSideBar icon={IoArrowBackCircle} label={'Back Home'} address={'/'}></MenuItemSideBar>
                            </>
                        }



                    </nav>
                </div>
            </aside>
        </div>
    );
};

export default SideBar;