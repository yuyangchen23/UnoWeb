import React, { useRef } from 'react'
import './More.css'
import next_icon from '../../assets/next.png'
import back_icon from '../../assets/back.png'
import coming_soon from '../../assets/coming_soon.png'


const More = () => {

  const slider = useRef();
  let tx = 0;

  const slideForward = ()=>{
    if(tx > -50){
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  const slideBackward = ()=>{
    if(tx < 0){
      tx += 25;
    }
    slider.current.style.transform = `translate(${tx}%)`;

  }

  return (
    <div className='more'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className='slider'>
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className='card-info'>
                <img src={coming_soon} alt="" />
                <div>
                  <h3>Uno: Fantastic</h3>
                  <span>Washington, USA</span>
                </div>
              </div>
              <p>We are creating a new deck of UNO cards that will take over the 
                entire world. New UI, new color, new rules, new everything. Stay 
                tuned and be ready to welcome the greatest game ever invented.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className='card-info'>
                <img src={coming_soon} alt="" />
                <div>
                  <h3>Uno: Fantastic</h3>
                  <span>Washington, USA</span>
                </div>
              </div>
              <p>We are creating a new deck of UNO cards that will take over the 
                entire world. New UI, new color, new rules, new everything. Stay 
                tuned and be ready to welcome the greatest game ever invented.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className='card-info'>
                <img src={coming_soon} alt="" />
                <div>
                  <h3>Uno: Fantastic</h3>
                  <span>Washington, USA</span>
                </div>
              </div>
              <p>We are creating a new deck of UNO cards that will take over the 
                entire world. New UI, new color, new rules, new everything. Stay 
                tuned and be ready to welcome the greatest game ever invented.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className='card-info'>
                <img src={coming_soon} alt="" />
                <div>
                  <h3>Uno: Fantastic</h3>
                  <span>Washington, USA</span>
                </div>
              </div>
              <p>We are creating a new deck of UNO cards that will take over the 
                entire world. New UI, new color, new rules, new everything. Stay 
                tuned and be ready to welcome the greatest game ever invented.
              </p>
            </div>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default More