import React from 'react'
import './Rules.css'
import uno_card_1 from '../../assets/uno-cards.png'
import uno_card_2 from '../../assets/uno-cards-1.png'
import uno_card_3 from '../../assets/uno-cards-2.png'
import uno_icon_1 from '../../assets/uno_icon_1.png'
import uno_icon_2 from '../../assets/uno_icon_2.png'
import uno_icon_3 from '../../assets/uno_icon_3.png'


const Rules = () => {
  return (
    <div className='Rules'>
      <div className="Rule">
        <img src={uno_card_1} alt="" />
        <div className="caption">
          <img src={uno_icon_1} alt="" />
          <p>Game play</p>
        </div>
      </div>
      <div className="Rule">
        <img src={uno_card_2} alt="" />
        <div className="caption">
          <img src={uno_icon_2} alt="" />
          <p>Rule No.2</p>
        </div>
      </div>
      <div className="Rule">
        <img src={uno_card_3} alt="" />
        <div className="caption">
          <img src={uno_icon_3} alt="" />
          <p>Set the rules</p>
        </div>
      </div>
    </div>
  )
}

export default Rules