import React, { useState } from 'react'
const slide = ["slides1", "slide2", "slide3"]

const carousel = () => {
    const [Count, SetCount] = useState(0)
    const handleNextClick = ()=>{
        SetCount((Count+1) %slide.length)
    }
    const handPreviousClick = ()=>{
        SetCount((Count - 1 + slide.length) % slide.length)
    }
  return (
    <div>
      
    </div>
  )
}

export default carousel
