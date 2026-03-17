import React, { useRef } from 'react'
import './VideoPlayer.css'

const VideoPlayer = ({playState, setPlayState}) => {

  const player = useRef(null);
  const videoSrc = "https://www.youtube.com/embed/dQw4w9WgXcQ?si=f81nwLgXl03qVn4J&autoplay=1&mute=0"
  
  const closePlayer = (e) => {
    if (e.target === player.current){
      setPlayState(false);
    }
  }


  return (
    <div className={`video-player ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
      {playState && (
        <iframe 
      width={560}
      height={315}
      title='YouTube video'
      src={videoSrc} 
      frameborder="0"
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen>
      </iframe>
      )}
    </div>
  )
}

export default VideoPlayer