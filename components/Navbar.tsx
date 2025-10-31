"use client"
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className='flex items-center justify-between gap-4 bg-gray-300 px-4 py-4'>
            <div>
                <Link href={"/"}>Next.JS</Link>
            </div>
            <div className='flex gap-4'>
                <input type="text" className='rounded-md bg-white' />
                <ul className='flex items-center gap-4'>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="about">About</Link>
                    </li>
                    <li>
                        <Link href="service">Service</Link>
                    </li>
                    <li>
                        <Link href="contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;