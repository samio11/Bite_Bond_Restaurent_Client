import React, { useState } from 'react';
import CommonBox from '../ReusableComponent/CommonBox';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ForHeadingAndSubHeading from '../ReusableComponent/ForHeadingAndSubHeading';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import CustomSpinner from '../MySpinner/CustomSpinner';
import MenuTopFood from './MenuTopFood';
import MenuSingleCard from './MenuSingleCard';

const Menu = () => {
    const [tab, setTab] = useState(0)
    const [selected, setSelected] = useState('Salad')
    console.log(tab, selected)
    // fetch all food from database
    const { data: popularfoods = [], isLoading, } = useQuery({
        queryKey: ['allFoodData'],
        queryFn: async () => {
            const { data } = await axios(`${import.meta.env.VITE_SERVER_URL}/menu-top-foods`)
            return data
        }
    })
    // fetch food by category
    const { data: selectedFoodCategory = [], isLoading: categoryLoading,refetch } = useQuery({
        queryKey: ['SelectedCtg', selected],
        queryFn: async () => {
            const { data } = await axios(`${import.meta.env.VITE_SERVER_URL}/selected-category-food?category=${selected}`)
            return data
        }
    })

    console.log(selectedFoodCategory)

    if (isLoading) return <CustomSpinner></CustomSpinner>
    if (categoryLoading) return <CustomSpinner></CustomSpinner>
    return (
        <div>
            <CommonBox pic={'menu.jpeg'} title={'Our Menu'} subTitle={'WOULD YOU LIKE TO TRY A DISH?'}></CommonBox>
            <ForHeadingAndSubHeading title={'Todays Offer'} subtitle={'-- Dont miss out on our daily offers --'}></ForHeadingAndSubHeading>
            <div className='max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4'>
                {
                    popularfoods?.map((x) => {
                        if (x.food_available === true) {
                            return <MenuTopFood key={x._id} data={x}></MenuTopFood>
                        }
                        else {
                            return;
                        }
                    })
                }
            </div>
            <ForHeadingAndSubHeading title={'Our Menu'} subtitle={'-- Explore Our  Menu --'}></ForHeadingAndSubHeading>

            <div className="flex items-center overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                <div onClick={() => {
                    setTab(0)
                    setSelected('Salad')
                }} rel="noopener noreferrer" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tab === 0 ? 'border border-b-0' : 'border-b'} dark:border-gray-600 dark:text-gray-600`}>
                    <img className='w-[20px] h-auto' src="salad_icon.ico" alt="" />
                    <span>Salad</span>
                </div>
                <div onClick={() => {
                    setTab(1)
                    setSelected('Pizza')
                }} rel="noopener noreferrer" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tab === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>

                    <img className='w-[20px] h-auto' src="pizza_icon.ico" alt="" />
                    <span>Pizza</span>
                </div>
                <div onClick={() => {
                    setTab(2)
                    setSelected('Soup')
                }} rel="noopener noreferrer" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tab === 2 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                    <img className='w-[20px] h-auto' src="soup_icon.ico" alt="" />
                    <span>Soup</span>
                </div>
                <div onClick={() => {
                    setTab(3)
                    setSelected('Dessert')
                }} rel="noopener noreferrer" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tab === 3 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                    <img className='w-[20px] h-auto' src="cake_icon.ico" alt="" />
                    <span>Cake</span>
                </div>
                <div onClick={() => {
                    setTab(4)
                    setSelected('Drink')
                }} rel="noopener noreferrer" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tab === 4 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                    <img className='w-[20px] h-auto' src="drinks_icon.ico" alt="" />
                    <span>Drinks</span>
                </div>
            </div>
            <div className='max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 md:my-10'>
                  {
                    selectedFoodCategory?.map((x)=>{
                        if(x.food_available === true)
                        {
                            return  <MenuSingleCard key={x._id} data={x}></MenuSingleCard>
                        }
                        return;
                    })
                   
                  }
            </div>
        </div>
    );
};

export default Menu;