import React from 'react';
import useRole from '../CustomHooks/useRole';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';

const Dashboard = () => {
    const [role] = useRole();
    console.log(role)
    return (
        <div className='flex justify-center gap-2'>
            {/* For Side Bar */}
            <div className='w-[20%] h-auto'>
                <SideBar></SideBar>
            </div>
            {/* For Main Content */}
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;