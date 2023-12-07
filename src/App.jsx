import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar/Navbar'
import Intro from './Components/Intro/Intro'
import Skills from './Components/Skills/Skills'
import Works from './Components/Works/Works'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
