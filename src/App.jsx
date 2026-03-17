import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Rules from './Components/Rules/Rules'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Purchase from './Components/Purchase/Purchase'
import More from './Components/More/More'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'


const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our Rules' title='What We Offer'/>
        <Rules/>
        <About setPlayState={setPlayState}/>
        <Title subTitle='Purchase' title='Uno Versions'/>
        <Purchase/>
        <Title subTitle='More' title='Coming soon'/>
        <More/>
        <Title subTitle='Contact Us' title='Get in touch'/>
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
      
      
    </div>
  )
}

export default App