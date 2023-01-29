import React from 'react'
import videoBg from '../assets/meal.mp4'

function Main() {
  return (
    <div className='main'>
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
    </div>
  )
}

export default Main