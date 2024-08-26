import React from 'react';
import { Link } from 'react-router-dom';

const MenuItemSideBar = ({ icon: Icon, label, address }) => {
    return (
        <div>
            <Link className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200" to={`${address}`}>
                <Icon className="w-4 h-4 mr-4" />

                <span className="mx-4 font-medium">{label}</span>
            </Link>
        </div>
    );
};

export default MenuItemSideBar;