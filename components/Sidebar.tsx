import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
    return (
      <div className='flex flex-col gap-4 bg-gray-300 px-4 py-4 min-h-svh min-w-[220px]'>
            <div>
                <Link href={"/"}>Next.JS</Link>
            </div>
            <div>
                <ul className='flex flex-col gap-2'>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="profile">Profile</Link>
                    </li>
                    <li>
                        <Link href="settings">Settings</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;