"use client";
import React, { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);
    console.log("Rendering text")
    return (
        <div className='flex'>
            <button className='w-2xl' onClick={()=>setCounter((value=>value-1))}>-</button>
            <span>{counter}</span>
            <button className='w-2xl' onClick={()=>setCounter(value=>value+1)}>+</button>
        </div>
    );
};

export default Counter;