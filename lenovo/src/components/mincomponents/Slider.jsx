//import React from 'react'

import { useEffect, useState } from "react";

export default function Slider() {
  const images=["img7.jpg","img6.jpg"];
  const [currentIndex,setCurrentIndex]=useState(0);
  useEffect(()=>{
    const interval=setInterval(()=>{
      setCurrentIndex((prevIndex)=>(prevIndex +1)% 
    images.length);
    }, 3000);
    return()=> clearInterval(interval);
  },[images.length]);
  return (
    <>
      {images.map((image,index)=>(
        <img key={index} src={image}
        alt={`image $ {index +1}`}
        className="w-full h-full"
        style={{display:index===currentIndex ? "flex" : "none"}}/>
        
      ))}
    </>
  )
}
