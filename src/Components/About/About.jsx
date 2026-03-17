import React from 'react'
import './About.css'
import about_img from '../../assets/uno_about.png'
import play_icon from '../../assets/play_button.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about_img' onClick={()=>{setPlayState(true)}}/>
        <img src={play_icon} alt="" className='play_icon' onClick={()=>{setPlayState(true)}}/>
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