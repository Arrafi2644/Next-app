"use client"
import React, { useState } from 'react';

const Counter = () => {
    const [count, setCounter] = useState(0)

    console.log(count);
    const handleIncrease = () => {
        setCounter(count + 1)
    }
    const handleReset = () => {
        setCounter(0)
    }
    const handleDecrease = () => {
        setCounter(count - 1)
    }
    return (
        <div className='mx-auto max-w-[300px] border rounded-md p-4 text-center'>
            <h3 className='mb-4 text-2xl font-bold'>{count}</h3>
            <div className='flex gap-2 items-center justify-center'>
                <button onClick={handleIncrease} className="btn bg-green-400 p-2 rounded-md">INC</button>
                <button onClick={handleReset} className="btn bg-gray-500 p-2 rounded-md">RESET</button>
                <button onClick={handleDecrease} className="btn bg-red-400 p-2 rounded-md">DEC</button>
            </div>
        </div>
    );
};

export default Counter;