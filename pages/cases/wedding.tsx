import React, {useRef} from 'react';
import {Head} from "../../seo/Head/Head";
import {amita} from "../index";
import Nav from "../../components/Header/Nav/Nav";
import Image from "next/image";
import Footer from "../../components/Footer/Footer";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useIsomorphicLayoutEffect} from "usehooks-ts";

function Wedding() {

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

            <main ref={scrollRef}>
                <Nav/>

                <div className='spacing text-center'>
                    <h1 className='text-[10vw] md:text-[7vw]' style={amita.style}>Modern Wedding</h1>
                    <p className='font-extralight text-gray-600 dark:text-gray-400'>Modern. Cultural. Innovate.</p>
                </div>

                <div className="video spacing my-2 line">
                    <div className='h-[80vh] mx-auto md:h-[95vh] w-[75vw] md:w-[75vw] relative '>
                        <Image src='https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80'
                               alt='Menu'
                               fill
                               className='object-cover transition duration-500 ease-in-out scale-100 hover:scale-[0.9]'
                        />
                    </div>
                </div>

                <div className="description px-12 md:px-24 line">
                    <p className='text-[1.2rem] sm:text-[1.4rem] font-extralight w-full sm:w-[65%] '>
                        Small, intentional celebrations of love are what set my heart on fire and allow my creativity to soar.  We are able to fully flex my design skills and tap into an escapist fantasy – where I wholeheartedly thrive.  Our goal is to nurture your love, ignite your passions and leave you with a lasting impression.  A transcendent wedding – one that mirrors your fervent love – is on the horizon.                    </p>
                </div>
                <div  className="client spacing flex gap-y-6 flex-col sm:flex-row justify-between">
                    <div></div>
                    <div className='line'>
                        <h4 className='text-lg font-semibold'>Client</h4>
                        <div className='text-gray-600 dark:text-gray-400 font-extralight text-lg'>
                            <p className='my-4'>Laureen & Ben </p>
                        </div>
                    </div>

                    <div className='line'>
                        <h4 className='text-lg font-semibold'>Year</h4>
                        <div className='text-gray-600 dark:text-gray-400 font-extralight text-lg'>
                            <p className='my-4'>2022</p>
                        </div>
                    </div>

                    <div className='line'>
                        <h4 className='text-lg font-semibold'>What we did</h4>

                        <div className='text-gray-600 dark:text-gray-400 font-extralight text-lg'>
                            <ul className='space-y-1 mt-4'>
                                <li>Video production</li>
                                <li>Storytelling</li>
                                <li>Screenwritting</li>
                                <li>Film making</li>
                                <li>Directing</li>
                                <li>Editing</li>
                                <li>Color grading</li>
                                <li>Sound design</li>
                                <li>Sound mixing</li>
                                <li>Sound recording</li>
                                <li>Voiceover recording</li>
                                <li>Motion design</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="image spacing">
                    <div className='h-[100vh] mx-auto md:h-[95vh] w-[80vw] md:w-[80vw] relative line'>
                        <Image src='https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
                               alt='Menu'
                               fill
                               className='object-cover'
                        />
                    </div>
                </div>

                <div className="image py-32">
                    <div className='h-[110vh] mx-auto md:h-[110vh] w-[100vw] md:w-[100vw] relative line'>
                        <Image src='https://images.unsplash.com/photo-1512060847456-85a2a1bf8b25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
                               alt='Menu'
                               fill
                               className='object-cover'
                        />
                    </div>
                </div>

                <div className="image spacing">
                    <div className='h-[80vh] mx-auto md:h-[85vh] w-[60vw] md:w-[60vw] relative line'>
                        <Image src='https://images.unsplash.com/flagged/photo-1566755395267-86735b23d097?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
                               alt='Menu'
                               fill
                               className='object-cover'
                        />
                    </div>
                </div>

                <div className="image py-32">
                    <div className='h-[110vh] mx-auto md:h-[110vh] w-[100vw] md:w-[100vw] relative line'>
                        <Image src='https://images.unsplash.com/photo-1551049699-b58eccc77864?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
                               alt='Menu'
                               fill
                               className='object-cover'
                        />
                    </div>
                </div>

                <div className="image spacing">
                    <div className='h-[100vh] mx-auto md:h-[95vh] w-[80vw] md:w-[80vw] relative line'>
                        <Image src='https://images.unsplash.com/photo-1621621667797-e06afc217fb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
                               alt='Menu'
                               fill
                               className='object-cover'
                        />
                    </div>
                </div>

                <div className="image spacing">
                    <div className='h-[80vh] mx-auto md:h-[85vh] w-[60vw] md:w-[60vw] relative line'>
                        <Image src='https://images.unsplash.com/photo-1622504549828-0d1bc1b7615d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
                               alt='Menu'
                               fill
                               className='object-cover'
                        />
                    </div>
                </div>

                <div  className="image spacing">
                    <div className='h-[100vh] mx-auto md:h-[95vh] w-[80vw] md:w-[80vw] relative line'>
                        <Image src='https://images.unsplash.com/photo-1556302482-70b6e670e6b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
                               alt='Menu'
                               fill
                               className='object-cover'
                        />
                    </div>
                </div>

                <div className="next"></div>
                <Footer
                    image={'https://images.unsplash.com/photo-1583939413139-19eeeb3a198c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'}
                    subtitle={'Next'}
                    title={'Traditional Wedding'}
                    url={'/cases/wedding'}

                />
            </main>
        </div>
    );
}

export default Wedding;