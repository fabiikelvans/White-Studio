import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Lenis from '@studio-freight/lenis'
import React, {useEffect} from "react";
import { ThemeProvider } from 'next-themes'
import DarkMode from "../components/Themes/DarkMode";


export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical', // vertical, horizontal
      gestureDirection: 'vertical', // vertical, horizontal, both
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: true,
      touchMultiplier: 2,
      infinite: false,
    })

//get scroll value
    {/*@ts-ignore*/}
    lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
      console.log({ scroll, limit, velocity, direction, progress })
    })

    function raf(time:any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })
  return (
      <>
        <ThemeProvider attribute='class' themes={['pink', 'red', 'blue', 'light', 'dark']}>

        <div className='relative bg-orange-100/70 dark:bg-[#090c0e]'>
          <DarkMode/>
          <Component {...pageProps} />
        </div>
        </ThemeProvider>
        </>
  )
}
