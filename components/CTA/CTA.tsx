import React, {useEffect, useRef} from 'react';
import {amita} from "../../pages";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useIsomorphicLayoutEffect} from "usehooks-ts";

function Cta() {

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
        <div  className='spacing h-[100vh] box flex flex-col justify-center text-center'>
            <h1 className='text-5xl line' style={amita.style}>
                Human stories that connect us all.
            </h1>

            <p className='px-[25%] mt-6 text-gray-600 dark:text-gray-400 line'>
                While pushing audiovisual limits, we keep our eyes on the human stories that connect us all.
            </p>
        </div>
        </div>
    );
}

export default Cta;