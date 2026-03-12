import React from 'react'
import './Purchase.css'
import uno_gallery_1 from '../../assets/uno_gallery_1.png'
import uno_gallery_2 from '../../assets/uno_gallery_2.png'
import uno_gallery_3 from '../../assets/uno_gallery_3.png'
import uno_gallery_4 from '../../assets/uno_gallery_4.png'
import white_arrow from '../../assets/white_arrow.png'

const Purchase = () => {
  return (
    <div className='purchase'>
      <div className="gallery">
        <img src={uno_gallery_1} alt="" />
        <img src={uno_gallery_2} alt="" />
        <img src={uno_gallery_3} alt="" />
        <img src={uno_gallery_4} alt="" />
      </div>
      <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Purchase