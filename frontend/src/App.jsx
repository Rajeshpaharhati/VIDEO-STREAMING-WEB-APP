import { useState } from 'react'
import VideoPlayer from './videoplayer'
import './App.css'
import { useRef } from 'react'

function App() {
  
  const playRef=useRef(null)
  const videoLink="http://localhost:8000/uploads/courses/7435a5da-1d1d-463e-80f6-2b0ba48137d5/index.m3u8"

  const videoPlayerOptions={
    controls:true,
    responsive:true,
    fluid:true,
    sources:[{
      src:videoLink,
      type:"application/x-mpegURL"
    }]
  }

   const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  return (
    <>
      <div>
        <h1>Video player</h1>
      </div>
      <VideoPlayer
      options={videoPlayerOptions}
      onReady={handlePlayerReady}
      />
   
    </>
  )
}

export default App
