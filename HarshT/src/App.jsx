import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Servicess from './components/Servicess'
import Cv from './components/Cv'
import CursorBall from './components/CursorBall'
import Projects from './components/Projects'
import Aboutme from './components/Aboutme'
import Footer from './components/Footer'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <>
      < CursorBall/>
      <Hero/>
      <Cv/>
      <Servicess />
      < Projects />
      < Aboutme />
      < Footer />
    </>
  )
}

export default App
