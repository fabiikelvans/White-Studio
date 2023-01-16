import React from 'react';
import Image from "next/image";

function Video() {
    return (
        <div className='relative'>
            <div className='h-[450px] w-[80vw] md:w-[60vw] relative mx-auto'>
                <Image src='https://images.unsplash.com/photo-1608471028014-47037ab2c3ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
                       alt='Menu'
                       fill
                       className='object-cover'
                />
            </div>
        </div>
    );
}

export default Video;