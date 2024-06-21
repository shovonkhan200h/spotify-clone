import React, { useContext } from 'react'
import Sidebar from './Component/Sidebar'
import Player from './Component/Player'
import Display from './Component/Display'
import { PlayerContext } from './Context/PlayerContext'

const App = () => {

  const {audioRef, track} =useContext(PlayerContext)
  return (
    <div className='h-screen bg-black'>
        <div className='h-[90%] flex'>
            <Sidebar/>
            <Display/>
        </div>
        <Player/>
        <audio preload='auto' src={track.file} ref={audioRef}></audio>
    </div>
  )
}

export default App