import { useState } from 'react'
import Hero from './components/Hero'
import Servicess from './components/Servicess'
import Cv from './components/Cv'
import CursorBall from './components/CursorBall'
import Projects from './components/Projects'
import Aboutme from './components/Aboutme'
import Footer from './components/Footer'




function App() {
  

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
