import Image from 'next/image'
import {
    SearchIcon,
} from "@heroicons/react/outline"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { Nunito } from '@next/font/google';
import Menu from "./Menu";
import {HiMenu, HiOutlineMenuAlt3} from "react-icons/hi";
import {CgClose} from "react-icons/cg";
import Link from "next/link";
import {amita, tangerine} from "../../../pages";

function Header() {
    const router = useRouter();


    // State of our Menu
    const [state, setState] = useState({
        initial: false,
        clicked: null,
        menuName: <HiOutlineMenuAlt3 />
    });

    // State of our button
    const [disabled, setDisabled] = useState(false);

    // Toggle menu
    const handleMenu = () => {
        disableMenu();
        if (state.initial === false) {
            setState({
                // @ts-ignore
                initial: null,
                // @ts-ignore
                clicked: true,
                menuName: <CgClose/>
            });
        } else if (state.clicked === true) {
            setState({
                // @ts-ignore
                clicked: !state.clicked,
                menuName: <HiOutlineMenuAlt3 />
            });
        } else if (state.clicked === false) {
            setState({
                // @ts-ignore
                clicked: !state.clicked,
                menuName: <CgClose/>
            });
        }
    };

    //Determine if out menu button should be disabled
    const disableMenu = () => {
        setDisabled(!disabled);
        setTimeout(() => {
            setDisabled(false);
        }, 1200);
    };



    return (
        <div className='z-50 sticky top-0'>
            <div className='flex mix-blend-difference  pt-4 items-center justify-between max-w-6xl mx-5 lg:mx-auto'>

                {/* Logo */}
                <Link href={'/'} className='z-40'
                >
                <h2 style={tangerine.style} className='text-3xl text-[#090c0e] dark:text-white mix-blend-difference'>White</h2>
                </Link>

                {/* Icons */}
                <div className='flex items-center justify-end space-x-4'>

                    {/*Menu Component*/}
                    <div className="nav__menu ">
                        <Menu state={state}/>
                    </div>

                    <button className="nav__toggle z-40 bg-transparent border-none p-0 m-0 outline-none ease-in-out duration-300 cursor-pointer" disabled={disabled} onClick={handleMenu}>
                        <div className='nav__toggle-icon text-[#090c0e] dark:text-white navBtn flex justify-center items-center cursor-pointer text-[1.2rem] h-12 w-12 transition-all rounded-full duration-300 hover:bg-[#090c0e] hover:text-white dark:hover:bg-white dark:hover:text-[#090c0e]'>
                            {state.menuName}
                        </div>
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Header