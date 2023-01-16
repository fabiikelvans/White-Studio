import React from 'react';
import Nav from "./Nav/Nav";
import {amita} from "../../pages";

function Header() {
    return (
        <div>
            <div className='spacing'>
                <h1 className='text-5xl md:text-7xl tracking-wide' style={amita.style}>
                    Human stories. <br/>
                    Superhuman <br/>
                    audiovisuals.
                </h1>

                <p className='text-xl mt-12 md:mt-16 font-medium text-gray-600 dark:text-gray-400 px-[5%] md:px-[15%]'>
                    Inspired by art, not advertising, Lights produces videos, live events & interactive experiences shaped by diverse voices.</p>
            </div>
        </div>
    );
}

export default Header;