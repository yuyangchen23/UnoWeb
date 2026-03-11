import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Rules from './Components/Rules/Rules'
import Title from './Components/Title/Title'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our Rules' title='What We Offer'/>
        <Rules/>
      </div>
      
      
    </div>
  )
}

export default App