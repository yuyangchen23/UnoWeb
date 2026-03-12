import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Rules from './Components/Rules/Rules'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Purchase from './Components/Purchase/Purchase'
import More from './Components/More/More'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our Rules' title='What We Offer'/>
        <Rules/>
        <About/>
        <Title subTitle='Gallery' title='Uno Photos'/>
        <Purchase/>
        <Title subTitle='More' title='Coming soon'/>
        <More/>
        <Title subTitle='Contact Us' title='Get in touch'/>
        
      </div>
      
      
    </div>
  )
}

export default App