import React from 'react';
import useRole from '../CustomHooks/useRole';
import AdminHome from './Admin/AdminHome';
import GuestHome from './Guest/GuestHome';

const Statistics = () => {
    const [role] = useRole()
    return (
        <div>
          {
            role === 'admin' && <AdminHome></AdminHome>
          }
          {
            role === 'guest' && <GuestHome></GuestHome>
          }
        </div>
    );
};

export default Statistics;