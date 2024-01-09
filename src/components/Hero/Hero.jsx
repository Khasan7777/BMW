import React from 'react'
import"./Hero.css"

const Hero = () => {
  return (
    <div className="mainHero">
      
      
      <img src="/assets/backroundImage.png"
      alt="backroundImage"
      className="backroundImage"/>
      <div className='Alltext'>
      <div className='Texthead'>The Glorified BMW M5</div>
      <div className='Textdes'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam feugiat velit non ultrices. Etiam tempus fringilla dui, eget viverra sapien aliquet eu. Suspendisse elementum eros ut odio sodales scelerisque. Nunc lacinia nunc vel mi finibus gravida et a dui. </div>
      <div className='Textbutton'>
Learn More
      </div>
      
      </div>
    </div>
  )
}

export default Hero