//import img1 from '../Images/img1.jpg'
import img2 from '../Images/img2.jpg'

import '../styles/Main.css'
import {NavLink,Link } from 'react-router-dom'
import { CarouselSpacing } from '../ui/Demo/caraousel'
import { Brown } from '../component/brown'
import { CarouselDemo } from '../ui/Demo/Carousel3'
import { useEffect, useState } from 'react'
import Slider from '../mincomponents/Slider'
//import { CarouselDemo } from '../ui/Demo/Carousel3'



export default function Home() {
  
const images=["img8.jpg","img1.jpg", "img2.jpg", "img3.jpg"];
const [currentIndex,setCurrentIndex]=useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, 3000);
  return () => clearInterval(interval); 
}, [images.length]);
  return (
    <>
    {/*main section*/}
      <main className="bg-[whitesmoke]">
       {/* section1*/}
      <section id='galaxy1' className="flex bg-white  w-full">
        <div id="grid-container1" className='bg-white h-96.5 w-full'>
           <div>
           {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          style={{ display: index === currentIndex ? 'flex' : 'none' }}
          className='w-full h-[75vh]'
        />
      ))}
           </div>
          
           
          <Brown/>
        </div>
         {/* section2*/}
      </section>
      <section id='galaxy2' className='flex bg-white mt-10 w-90 m-10'>
        <div id="grid-container2" className="grid bg-white h-full w-full grid-cols-2 gap-5">
       
          <div className='bg-white rounded-5'>
            <h2 className='m-10 text-black font-mono font-bold text-6xl'>A space for every moment</h2>
            <p className='m-10 font-mono font-light text-lg'>Book professionalism by activity</p>
            <div id='Links'>
              
                <div id='first'>
                  <ul>
                   <li> <Link to="/Photoshoot">Photoshoot</Link></li>
                   <li><NavLink to="/Preevent">Planning&pre-event</NavLink></li>
                   <li><NavLink to="/Birthday">Birthday parties</NavLink></li>
                  </ul>
                
                </div>
                <div id='first'>
                  <ul>
                  <li><NavLink to="/Videoshoot">Videoshoot</NavLink></li> 
                  <li><NavLink to="/Babyshower">Baby shower</NavLink></li>
                  <li><NavLink to="/Bridal">Bridal shower</NavLink></li>
                  </ul>

                </div>
                <div id='first'>
                  <ul>
                  <li><NavLink to="/Graduation">Graduation party</NavLink></li>
                  <li><NavLink to="/Team">Team building</NavLink></li>
                  </ul>
                </div>
            </div>

          </div>
          <div className='bg-white rounded-5' >
           <Slider/>
          </div>
        </div>
      </section>
       {/* section3*/}
      <section id="galaxy3" className='flex bg-white mt-10  m-10'>
        <div id="grid-container3"  className="grid bg-white h-full w-full">
         <div>
          <p className=' text-blue-950 text-2xl m-5 mt-2  font-mono'>Exprerience endless adventure with your photographer view beautiful photographs made by professional
          Photographers. Remember Photographs are not taken you make them.</p> 
          <CarouselSpacing></CarouselSpacing>
        </div>
        </div> 
      </section>
       {/*section4*/}
      <section id='galaxy4' className='flex bg-white w-90 mt-10 m-10'>
        <div id='grid-container4' className="grid  bg-white h-full w-full grid-cols-2 gap-5">
          <div  className='bg-white rounded-10'>
            <img src={img2} alt="img" className='w-full h-full' />
          </div>
          <div id='center' className='bg-white rounded-5 items-center'>
            <div>
              <h2 className="mt-5 font-serif font-bold text-black text-2xl">New and never-ending possibilities</h2>
              <p className='text-black text-lg mt-5 font-sans antialiased font-normal'>Find everything from professionally skilled Photographers and Event-organizers
              to event services under one platform.</p>
            </div>
            <div>
              <h2 className="mt-5 font-serif font-bold text-black text-2xl">
                Knowledgeable hosts
              </h2>
              <p className='text-black text-lg mt-5 font-sans antialiased font-normal'>
                Connect with experienced Photographers and Events-Organizers to experience and create you a memorable
                Event and for creativity.
              </p>
            </div>
            <div>
              <h2 className="mt-5 font-serif font-bold text-black text-2xl">
                Easy Budgeting
                <p  className='text-black text-lg mt-5 font-sans antialiased font-normal'>
                  Tired of expensive planning for event. Worry no more peersapce relieves you that burden
                  book with our Photographers and Event-organizers to experience discounts.
                </p>
              </h2>
            </div>
          </div>
        </div>
      </section>
       {/* section5*/}
      <section id='galaxy5' className='flex bg-white w-90 m-10 mt-10'>
        <div id="grid-container5" className="grid  bg-white h-full w-full">
        <p className='text-[#010038] text-2xl m-5 mt-2  font-mono'>
          Event organizer section
        </p>
          <CarouselDemo></CarouselDemo>
        </div>
      </section>
       {/*section6*/}
      <section id='galaxy6' className='flex bg-white w-full m-0 mt-10 justify-center'>
        <div id='grid-cointainer6' className="grid  bg-[#010038] h-full w-full  justify-center">
         
            <h2 className="mt-8 text-white font-serif text-3xl ml-[25rem] font-bold">Stay in know</h2>
            <p className='text-[#e3dbdb] relative mt-[-2em] font-light text-xl'>Sign up to get events emails from Peerspace.com, including new fashions, discounts, modern planning of events and information about Peerspace.com <br /> 
            </p>
            
            <form className='w-[none]  border-[none]  mt-[-2rem]'>
             <input type="email" name='email' placeholder='Your email address' required className='
             h-[7vh] border-none border-[none] w-[50%] ml-[12rem]'/>
             <button type="submit" value="Subscribe" className=' border-[none] bg-blue-700 ml-2 text-white 
             h-[7vh] w-[8em]'> Subscribe</button>
            </form>
            
            
            <h3 className='text-white ml-[23rem]'>You can opt out at any time. See our <a href="#" className='underline text-blue-700'>privacy statement</a></h3>
           
         
        </div>
      </section>
      </main>
       {/*Footer*/}
      
    </>
  )
}
