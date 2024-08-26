import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { TbCoinPound } from "react-icons/tb";
import DashboardCommonCard from '../../ReusableComponent/DashboardCommonCard';
import { MdOutlineBookmarkBorder } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { formatDistanceToNow } from "https://unpkg.com/date-fns/formatDistanceToNow.mjs";
import AdminiChart from './AdminiChart';
import CustomSpinner from '../../MySpinner/CustomSpinner';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';

const AdminHome = () => {
    const { data: adminNeedInfo, isLoading } = useQuery({
        queryKey: ['adminNeedInfo'],
        queryFn: async () => {
            const { data } = await axios(`${import.meta.env.VITE_SERVER_URL}/admin-data`)
            return data
        }
    })
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    if (isLoading) return <CustomSpinner></CustomSpinner>
    return (
        <div>
            {/* Heading Part */}
            <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-4 my-3'>
                {/* Each Card */}
                <DashboardCommonCard title={'Total Revenue'} titleInfo={adminNeedInfo?.formatedRevenue} Icon={TbCoinPound}></DashboardCommonCard>
                <DashboardCommonCard title={'Total Order'} titleInfo={adminNeedInfo?.totalOrder} Icon={MdOutlineBookmarkBorder}></DashboardCommonCard>
                <DashboardCommonCard title={'Total User'} titleInfo={adminNeedInfo?.totalUser} Icon={FaRegUser}></DashboardCommonCard>
                <div className='w-full h-[200px] md:h-[150px] bg-slate-300 space-y-2 text-white bg-gradient-to-r from-black to-gray-900 p-6 rounded-lg shadow-lg'>
                    <div className='w-full h-[80%] flex justify-center items-center gap-2'>
                        <MdDateRange className='w-[50px] h-auto' />
                        <h2 className='text-xs md:text-3xl font-semibold italic'>{adminNeedInfo?.adminSince && formatDistanceToNow(new Date(adminNeedInfo?.adminSince))}</h2>
                    </div>
                    <div className='text-center'>
                        <p className='font-semibold italic'>Admin Since</p>
                    </div>
                </div>
            </div>
            {/* NExt Chart Part */}
            <div className='flex w-full flex-col md:flex-row justify-center items-center gap-2 my-5'>
                {/* Left Part */}
                <div className='flex-1'>
                    <AdminiChart chartData={adminNeedInfo?.adminChartData}></AdminiChart>
                </div>
                <div className='flex-1'>
                    <DateRange
                        editableDateInputs={true}
                        onChange={item => setState([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={state}
                    />


                </div>
            </div>
        </div>
    );
};

export default AdminHome;