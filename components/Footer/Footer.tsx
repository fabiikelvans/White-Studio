import React, {useRef} from 'react';
import {amita} from "../../pages";
import Image from "next/image";
import Link from "next/link";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useIsomorphicLayoutEffect} from "usehooks-ts";

interface Props {
    image?: any;
    subtitle: string;
    title: string;
    url?: any;
}

function Footer( { image, subtitle, title, url } : Props) {

    gsap.registerPlugin(ScrollTrigger);

    const t1 = gsap.timeline();

    let scrollRef = useRef(null);

    useIsomorphicLayoutEffect(() => {
        let ctx = gsap.context(() => {
            t1.from('.line', {
                scrollTrigger: {
                    trigger: '.line',
                    start: "top bottom",
                    end: "bottom 300px",
                    scrub: 1,
                    pin: '.ghost',
                },
                duration: 1.8,
                y: 100,
                opacity: 0,
                ease: "power4.out",
                delay: 0.1,
                stagger: {
                    amount: 0.6
                }

            });
        }, scrollRef); // <- scopes all selector text to the root element

        return () => ctx.revert();
    }, );


    return (
        <div ref={scrollRef}>
        <div  className={'h-[90vh] md:h-[150vh] line w-full relative'}>

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
        </div>
    );
}

export default Footer;