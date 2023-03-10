import React, {useEffect, useRef, useState} from 'react';
import { gsap } from "gsap";
import Link from "next/link";
import {
    menuShow,
    menuHide,
    textIntro,
    staggerLinks,
    hoverLink,
    hoverExit
} from "../../animations/Animate";
import {useRouter} from "next/router";
import Image from "next/image";
import {amita, tangerine} from "../../../pages";

// @ts-ignore
function Menu({state}) {

    const router = useRouter();

    //create refs for our DOM elements
    let menuWrapper = useRef(null)
    let show1 = useRef(null)
    let show2 = useRef(null)

    // Colors
    const colors = {
        Sea: 'https://images.unsplash.com/photo-1542037012038-5f9fb2b3c681?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
        Sand: 'https://images.unsplash.com/photo-1473973916745-60839aebf06b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
        Peach: 'https://images.unsplash.com/photo-1600096194735-ec70b8463112?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1976&q=80',
        Tea : 'https://images.unsplash.com/photo-1570569596187-6c52a9abbf1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
        Miniom: 'https://images.unsplash.com/photo-1542037179399-bbf09c7f9888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
    }

    const [color, setColor] = useState(colors.Sea);

    useEffect(() => {
        setColor(color)
    }, [color]);

    useEffect(() => {
        // If the menu is open, and we click the menu button to close it.
        if (state.clicked === false) {
            // If menu is closed, and we want to open it.
            {/*@ts-ignore*/}
            menuHide(show2, show1);
            // Set menu to display none
            gsap.to(menuWrapper, { duration: 1, css: { display: "none" } });
        } else if (
            state.clicked === true ||
            (state.clicked === true && state.initial === null)
        ) {
            // Set menu to display block
            gsap.to(menuWrapper, { duration: 0, css: { display: "block" } });
            //Allow menu to have height of 100%
            gsap.to([show1, show2], {
                duration: 0,
                opacity: 1,
                height: "100%"
            });
            {/*@ts-ignore*/}
            menuShow(show1, show2);
        }
    }, [state]);

    return (
        <div>
            {/*@ts-ignore*/}
            <div ref={(el) => (menuWrapper = el)} className='menu-wrapper hidden z-10 top-0 left-0 right-0 fixed h-[100vh] w-[100vw]'>

                {/*@ts-ignore*/}
                <div className="menu bg-orange-100 dark:bg-[#090c0e] gap-x-4 relative h-full overflow-hidden flex justify-around items-center px-[20%]" ref={(el) => (show2 = el)}>
                    <div className='h-[80vh] w-[25vw] relative hidden md:block'>
                        <Image src={color}
                               alt='Menu'
                               fill
                               className='object-cover rounded-2xl'
                        />
                    </div>
                    <div>
                        <ul className="menu__items" style={amita.style}>
                            <li
                                onMouseEnter={e => setColor(colors.Sand)}
                                onMouseLeave={e => setColor(colors.Sea)}
                                className="menu__item">
                                <Link href={'/about'}
                                >About Us</Link></li>
                            <li
                                onMouseEnter={e => setColor(colors.Peach)}
                                onMouseLeave={e => setColor(colors.Sea)}
                                className="menu__item" >
                                <Link href={'/cases'}
                                >Projects</Link>
                            </li>
                            <li
                                onMouseEnter={e => setColor(colors.Tea)}
                                onMouseLeave={e => setColor(colors.Sea)}
                                className="menu__item" >
                                <Link href={'/contact'}
                                >Contact</Link>
                            </li>

                        </ul>

                        <div className='flex flex-col gap-y-8 md:flex-row justify-between font-semibold text-gray-600 dark:text-gray-300 gap-x-8 text-sm'>
                            <div>
                                <ul className='space-y-2'>
                                    <li>hello@whitestudio.com</li>
                                    <li>+254 712 346 678</li>
                                </ul>
                            </div>

                            <div>
                                <ul className='space-y-2'>
                                    <li>1934?? White Studio,</li>
                                    <li> Lavington Estate, </li>
                                    <li>Nairobi, Kenya.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Menu;