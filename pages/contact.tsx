import React from 'react';
import {Head} from "../seo/Head/Head";
import Nav from "../components/Header/Nav/Nav";
import {amita, tangerine} from "./index";
import Image from "next/image";
import Link from "next/link";

function Contact() {
    return (
        <div>

            <Head/>

            <main>
                <Nav/>

                <div className='spacing text-center'>
                    <h1 className='text-[10vw] md:text-[7vw]' style={amita.style}>Create with us.</h1>
                    <p className='pt-12 font-light text-gray-500 dark:text-gray-400 text-xl'>Pitch-perfect content in tone-deaf times. <br/>Let’s collaborate & take it further together.</p>
                </div>

                <div className="spacing grid grid-cols-1 gap-20 md:grid-cols-2">
                    <div className='h-[80vh] mx-auto md:h-[95vh] w-[100%] relative'>
                        <Image src='https://images.unsplash.com/photo-1573095687464-4ac389cac26b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
                               alt='Menu'
                               fill
                               className='object-cover'
                        />
                    </div>

                    <div>
                        <ul className='space-y-2 text-[8vw] md:text-[4vw]' style={amita.style}>
                            <li><Link href={''}> hello@whitestudio.com </Link></li>
                            <li><Link href={''}> +254 712 346 678 </Link></li>
                        </ul>

                        <address className='mt-20 text-xl text-gray-500 dark:text-gray-400 font-light space-y-1'>
                            1934° White Studio, <br/>
                            Lavington Estate, <br/>
                            Nairobi, Kenya.
                        </address>
                    </div>
                </div>


            </main>
        </div>
    );
}

export default Contact;