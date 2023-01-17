import React, {useRef} from 'react';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useIsomorphicLayoutEffect} from "usehooks-ts";

function Services() {

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
        <div ref={scrollRef} className='spacing text-xl text-gray-600 dark:text-gray-400 font-extralight flex justify-center'>
            <ul className='space-y-3 line'>
                <li>Films</li>
                <li>Event design</li>
                <li>Interactive Installation</li>
                <li>Immersive shows</li>
                <li>Lights design</li>
                <li>Exhibition design</li>
            </ul>
        </div>
    );
}

export default Services;