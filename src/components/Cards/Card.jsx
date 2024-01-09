import React, { useEffect, useState } from 'react'

import"./Card.css"
const Card = () => {

const images = [
'/assets/bmwi8.png',
'/assets/BMWI81.png',
'/assets/bmwi83.png'
]
const [currentIndex, setCurrentIndex] = useState(0)
const [currentIndex1, setCurrentIndex1] = useState(0)
const [currentIndex2, setCurrentIndex2] = useState(0)



useEffect(()=>{
    const interval = setInterval(()=>{
       setCurrentIndex((prevIndex)=>(prevIndex+1) % images.length);
    },3000)
  return()=>clearInterval(interval);
}, currentIndex)

const imagescard2 = [
 '/assets/bmwm3.png',
 '/assets/bmwm31.png',
 '/assets/bmwm32.png',
]

useEffect(()=>{
   const interval1 = setInterval(()=>{
      setCurrentIndex1((prevIndex1)=>(prevIndex1+1) % imagescard2.length);
   },3000)
 return()=> clearInterval(interval1);

}, currentIndex1)

const imagescard3 = [
'/assets/bmwm5.png',
'/assets/BMWM51.png',
'/assets/bmwm5card.png',
]
useEffect(()=>{
   const interval2 = setInterval(()=>{
      setCurrentIndex2((prevIndex2)=>(prevIndex2+1) % imagescard3.length);
   },3000)
 return()=>clearInterval(interval2);
}, currentIndex2)

return(
 
  
  
 <div className='mainPerformanceBox'>
<div className='BannerBox'>



<div className='rightbannerbox'>
  <img src='/assets/bmwm5card.png' alt='bmwpic'
    className='cardm5pic'/>
 
</div>
<div className='leftbannerbox'>
<div className='bannertitle'>BMW</div>

<div className='bannerdescription'>
   The all new M3
</div>
<div className='bannerdescription2'>
   Rumbles your heart to life
</div>
</div>
</div>


<div className='cardbox'>

<div className='i8cardbox'>
    <div className='i8image'>
   <img src={images[currentIndex]} alt='i8' className='bmwi8image'/>
    </div>
    <div className='i8bmwtitle'>BMW</div>
    <div className='i8title'>i8</div>

       <div className='i8Order'>Order Now</div>


</div>
<div className='m3cardbox'>
<div className='m3image'>
  <img src={imagescard2[currentIndex1]} alt='/assets/bmwm3.png' className='bmwm3image'/>
</div>
    <div className='m3bmwtitle'>BMW</div>
    <div className='m3title'>m3</div>

       <div className='m3Order'>Order Now</div>


</div>
<div className='m5cardbox'>
<div className='m5image'>
<img src={imagescard3[currentIndex2]} alt='/assets/bmwm5.png' className='bmwm5image'/>
</div>
    <div className='m5bmwtitle'>BMW</div>
    <div className='m5title'>m5</div>

       <div className='m5Order'>Order Now</div>

</div>
</div>
    </div>
  )
}

export default Card