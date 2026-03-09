import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark_arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>We ensure everyone can play your game</h1>
        <p>We design the cards, you decide the rules! For more information, please navigate to the explore page!</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>

    </div>
  )
}

export default Hero