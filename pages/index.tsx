import Image from 'next/image'
import { Poppins, Tangerine, Amita } from '@next/font/google'
import {Head} from "../seo/Head/Head";
import Header from "../components/Header/Header";
import Video from "../components/Video/Video";
import Services from "../components/Services/Services";
import Nav from "../components/Header/Nav/Nav";
import React, {Suspense} from "react";
import Projects from "../components/Projects/Projects";
import Cta from "../components/CTA/CTA";
import Footer from "../components/Footer/Footer";
import DarkMode from "../components/Themes/DarkMode";
import Preloader from "../components/Preloader/Preloader";

const poppins = Poppins({ weight: ["100", "200", "300"], subsets: ['latin']});
export const tangerine = Tangerine({ weight: '400', subsets: ['latin']})
export const amita = Amita({ weight: '400', subsets: ['latin']})

export default function Home() {
  return (
    <>
      <Head/>

      <main style={poppins.style} className=' relative '>
          <Nav/>
          <Preloader/>
          <Header/>
          <Video/>
          <Services/>
          <Projects/>
          <Cta/>
          <Footer
              image={'https://images.unsplash.com/photo-1511288702291-e55d6cfbe3b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'}
              subtitle={'Share your life experiences with us!'}
              title={'Let\'s Talk'}
              url={'/contact'}
          />
      </main>
    </>
  )
}
