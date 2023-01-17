import React from 'react';
import {Head} from "../seo/Head/Head";
import Nav from "../components/Header/Nav/Nav";
import {amita} from "./index";
import Projects from "../components/Projects/Projects";
import Footer from "../components/Footer/Footer";

function About() {
    return (
        <div>
            <Head/>

            <main>
                <Nav/>

                <div className='spacing'>
                    <h1 className='text-[8vw] md:text-[6vw]' style={amita.style}>
                        If it’s uncontained, is it still content ?
                    </h1>
                    <h4 className='text-xl text-gray-600 dark:text-gray-400 font-semibold italic px-2 md:px-12 w-[100%] md:w-[60%] my-12'>
                        We dance between unfiltered & refined, between Morocco & Luxembourg, transcending tradition to capture culture.
                    </h4>
                    <p className='font-light text-xl px-2 md:px-12 w-[100%] md:w-[80%] text-gray-500 dark:text-gray-300'>
                        Founded in 2020, Lights specializes in videos, live events & immersive experiences. Our work spans the whole audiovisual gamut, from art direction to live streaming to interactive installations. With each project, we strengthen the brand identity of organizations & causes – swapping skills with explose, our sister agency dedicated to digital branding. Lights is inspired by the unexpected & the deeply authentic. While pushing audiovisual limits, we keep our eyes on the human stories that connect us all.
                    </p>
                </div>


                <Projects/>

                <Footer
                image={'https://images.unsplash.com/photo-1547948577-438c80482068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'}
                subtitle={'Discover more'}
                title={'Our Projects'}
                url={'/cases'}
                />

            </main>
        </div>
    );
}

export default About;