import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React, { ReactNode } from 'react';

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <Navbar />
            <main className='min-h-dvh'>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default layout;