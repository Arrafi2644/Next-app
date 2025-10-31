import Sidebar from '@/components/Sidebar';
import React, { ReactNode } from 'react';

const DashboardLayout = ({children}: {children: ReactNode}) => {
    return (
        <div className='flex'>
             <Sidebar/>
            {children}
        </div>
    );
};

export default DashboardLayout;