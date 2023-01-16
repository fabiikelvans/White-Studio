import React, {useEffect, useRef, useState} from 'react';
import { Expo, gsap } from "gsap";
import {useIsomorphicLayoutEffect} from "usehooks-ts";
import {amita, tangerine} from "../../pages";

function Preloader() {

    const [counter, setCounter ] = useState(0);
    let homeRef = useRef(null);

    useEffect(() => {
        gsap.to(setCounter, {
            duration: 0.3,
            // @ts-ignore
            onUpdate: () => setCounter(counter < 100 ? counter +1 : clearInterval(counter), setCounter(100),
            ),
            onComplete: () => console.log('Loading complete'),
            ease: 'linear'
        });

    }, [counter]);


    const t1 = gsap.timeline();


    useIsomorphicLayoutEffect(() => {
        let ctx = gsap.context(() => {

            t1.to('.follow', {
                width: "100%",
                duration: 1.2,
                delay: 0.7,
                ease: Expo.easeInOut,
            })
                .to('.hide', {
                    opacity: 0,
                    duration: 0.3,
                })
                .to('.hide', {
                    display: "none",
                    duration: 0.3,
                })
                .to('.follow', {
                    height: '100%',
                    duration: 2,
                    delay: 0.5,
                    ease: Expo.easeInOut,
                }).to('.loading', {
                display: "none"
            })
                .to('.follow', {
                    height: '100%',
                    duration: 0.24,
                    delay: 0.1,
                    ease: Expo.easeInOut,
                    opacity: 0,
                })




        }, homeRef); // <- scopes all selector text to the root element

        return () => ctx.revert();
    }, [])

    return (
        <div className='home-reveal relative z-[99]'  ref={homeRef}>

            <div className='loading h-[100vh]  fixed top-0 z-[99] bg-[#090c0e] dark:bg-orange-100 w-full flex justify-center items-center'>
                <div className="follow absolute bg-orange-100 dark:bg-[#090c0e] h-[2px] w-0 left-0"></div>
                <div className="progress absolute left-0 h-[2px] transition duration-300 ease-out w-0" style={{ width: counter + "%"}}></div>
                <div className="count hide absolute top-20 text-[6rem] text-white">
                    <h2 className=' text-[3rem] text-white dark:text-[#090c0e]' style={tangerine.style}>White</h2>
                </div>

                <div className="count hide absolute bottom-20 text-[6rem] text-white">
                    <h2 className=' text-xl text-white dark:text-[#090c0e]' style={amita.style}>{counter}%</h2>
                </div>
            </div>

        </div>
    );
}

export default Preloader;