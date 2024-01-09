import React from 'react'
import "./Display.css"
const Display = () => {
  return (
    <div className='DisplayMain'>
    <div className='Beauty'>
    AGED LIKE A BEAUTY
    </div>
    <div className='Beast'>
    RUNS LIKE A BEAST
    </div>
    <div className="bmwVideo">
                        <video width="20%" height="auto" autoPlay loop controls> 
                         <source src="/assets/BMWVIDEO.mp4" type="video/mp4"/>   
                        </video>
                </div>

   <div className='Speed'>
   <div className='Numbers'>
   <div className='values'>
    12.5M/Gal
   </div>
   <div className='Divivder'>

   </div>
   <div className='values'>
    600 N.M
   </div>

   <div className='Divivder'>

   </div>
   <div className='values'>
    349 HP
   </div>
   <div className='Divivder'>

   </div>
   <div className='values'>
   1.534 T 
   </div>

   <div className='Divivder'>
   </div>
   <div className='values'>
   234 MPH
   </div>

   <div className='Divivder'>

   </div>
   <div className='values'>
   2 Turbos
   </div>

</div>
   </div>

<div className='TitleNumbers'>
    <div className='values'>Mileage</div>
    <div className='values'>Torque</div>
    <div className='values'>Horsepower</div>
    <div className='values'>Net Wieght</div>
    <div className='values'>Top Speed</div>
    <div className='values'>Enhancements</div>
</div>

   <div className='TittleNumbers'>

   </div>


    </div>
  )
}
export default Display