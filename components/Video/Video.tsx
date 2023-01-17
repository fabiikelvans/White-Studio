import React, {useRef} from 'react';
import Image from "next/image";
import {useIsomorphicLayoutEffect} from "usehooks-ts";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function Video() {

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
        <div className='relative'ref={scrollRef}>
            <div className='h-[450px] w-[80vw] md:w-[60vw] relative mx-auto line'>
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