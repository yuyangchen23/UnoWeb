import React from 'react'
import './About.css'
import about_img from '../../assets/uno_about.png'
import play_icon from '../../assets/play_button.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about_img'/>
        <img src={play_icon} alt="" className='play_icon'/>
      </div>
      <div className="about-right">
        <h3>About The Game</h3>
        <h2>Become the best in game</h2>
        <p>To be continued</p>
        <p>To be continued</p>
        <p>To be continued</p>
      </div>

    </div>
  )
}

export default About  