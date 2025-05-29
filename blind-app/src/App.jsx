import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Navbar from './Components/navbar'
import Slideshow from './Components/slideshow'
import About from './Components/about'
import Developers from './Components/developvers'
import Footer from './Components/footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Slideshow/>
     <About/>
     <Developers/>
     <Footer/>
    </>
  
  )
}

export default App
