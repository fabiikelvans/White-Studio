import React from 'react';
import {amita} from "../../pages";
import Image from "next/image";
import Link from "next/link";

interface Props {
    image?: any;
    subtitle: string;
    title: string;
    url?: any;
}

function Footer( { image, subtitle, title, url } : Props) {
    return (
        <div className={'h-[150vh]  w-full relative'}>

            <div className='h-full w-full relative'>
                <Image src={image}
                       alt='Footer-img'
                       fill
                       className='object-cover'
                />
            </div>

            <div className="w-full absolute top-0 h-full flex justify-center items-center backdrop-brightness-50 spacing text-white text-center flex-col flex">
                <h4 className='text-md font-extralight'>{subtitle}</h4>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <Link href={url} className='text-7xl my-8'>
                    <h1 style={amita.style}>{title}</h1>
                </Link>
            </div>

        </div>
    );
}

export default Footer;