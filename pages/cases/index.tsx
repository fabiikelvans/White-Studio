import React, {useRef} from 'react';
import {Head} from "../../seo/Head/Head";
import {amita} from "../index";
import Nav from "../../components/Header/Nav/Nav";
import Image from "next/image";
import Link from "next/link";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useIsomorphicLayoutEffect} from "usehooks-ts";

function Cases() {

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
        <div>

            <Head/>

            <main>
                <Nav/>

            <div className="header text-center spacing">
                <h1 className='text-[10vw] md:text-[7vw]' style={amita.style}>It’s ok to stare</h1>
                <h3 className='text-xl text-gray-600 dark:text-gray-400 tracking-wide font-light'>Audiovisual anomalies for human audiences.</h3>
            </div>

                <div  ref={scrollRef}>
                <div className="spacing line relative flex flex-col space-y-32">

                    <div className='group self-end'>
                            <div className='h-[40vh] overflow-hidden md:h-[70vh] w-[70vw] md:w-[50vw] relative'>
                                <Image src='https://images.unsplash.com/photo-1531983412531-1f49a365ffed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
                                       alt=''
                                       fill
                                       className='object-cover transition duration-500 ease-in-out scale-100 hover:scale-[0.9]'
                                />
                            </div>
                        <Link href={'/cases/wedding'}>
                            <h1 className='mt-4 md:mt-8 text-3xl md:text-6xl font-light' style={amita.style}>Fun Times</h1>
                        </Link>
                        <p className='mt-2 md:mt-4 tracking-wide text-gray-600 dark:text-gray-400 font-extralight'>Family. Parenting. Home.</p>
                    </div>

                    <div className='group self-start'>
                        <div className='h-[40vh] overflow-hidden md:h-[80vh] w-[70vw] md:w-[60vw] relative'>
                            <Image src='https://images.unsplash.com/photo-1673617526653-177ea5ca42e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
                                   alt=''
                                   fill
                                   className='object-cover transition duration-500 ease-in-out scale-100 hover:scale-[0.9]'
                            />
                        </div>
                        <Link href={'/cases/wedding'}>
                            <h1 className='mt-4 md:mt-8 text-3xl md:text-6xl font-light' style={amita.style}>Housing</h1>
                        </Link>
                        <p className='mt-2 md:mt-4 tracking-wide text-gray-600 dark:text-gray-400 font-extralight'>Architecture. Design. Home.</p>
                    </div>

                    <div className='group self-end'>
                        <div className='h-[40vh] overflow-hidden md:h-[70vh] w-[70vw] md:w-[40vw] relative'>
                            <Image src='https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
                                   alt='Menu'
                                   fill
                                   className='object-cover transition duration-500 ease-in-out scale-100 hover:scale-[0.9]'
                            />
                        </div>
                        <Link href={'/cases/wedding'}>
                            <h1 className='mt-4 md:mt-8 text-3xl md:text-6xl font-light' style={amita.style}>Modern Wedding</h1>
                        </Link>
                        <p className='mt-2 md:mt-4 tracking-wide text-gray-600 dark:text-gray-400 font-extralight'>Modern. Cultural. Innovate.</p>
                    </div>

                    <div className='group self-start'>
                        <div className='h-[40vh] overflow-hidden md:h-[80vh] w-[70vw] md:w-[70vw] relative'>
                            <Image src='https://images.unsplash.com/photo-1581952976147-5a2d15560349?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80'
                                   alt='Menu'
                                   fill
                                   className='object-cover transition duration-500 ease-in-out scale-100 hover:scale-[0.9]'
                            />
                        </div>
                        <Link href={'/cases/wedding'}>
                            <h1 className='mt-4 md:mt-8 text-3xl md:text-6xl font-light' style={amita.style}>Parenting</h1>
                        </Link>
                        <p className='mt-2 md:mt-4 tracking-wide text-gray-600 dark:text-gray-400 font-extralight'>Family. Happiness. Kids.</p>
                    </div>

                    <div className='group self-end'>
                        <div className='h-[40vh] overflow-hidden md:h-[70vh] w-[70vw] md:w-[50vw] relative'>
                            <Image src='https://images.unsplash.com/photo-1491295314828-fb03946d9b52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
                                   alt='Menu'
                                   fill
                                   className='object-cover transition duration-500 ease-in-out scale-100 hover:scale-[0.9]'
                            />
                        </div>
                        <Link href={'/cases/wedding'}>
                            <h1 className='mt-4 md:mt-8 text-3xl md:text-6xl font-light' style={amita.style}>Hiking</h1>
                        </Link>
                        <p className='mt-2 md:mt-4 tracking-wide text-gray-600 dark:text-gray-400 font-extralight'>Outdoor. Fishing. Explore.</p>
                    </div>

                </div>
                </div>
            </main>
        </div>
    );
}

export default Cases;