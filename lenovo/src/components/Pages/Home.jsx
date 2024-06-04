import img1 from '../Images/one.png'

import img3 from '../Images/11.png'
import img4 from '../Images/client.png'
import '../styles/Main.css'
import {Link } from 'react-router-dom'



import { useEffect, useState } from 'react'
//import Slider from '../mincomponents/Slider'
//import { CarouselDemo } from '../ui/Demo/Carousel3'
import { FaEnvelope} from "react-icons/fa";


export default function Home() {
  
const images=["banner_party.webp", "12.webp","13.webp"];
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
      <main className="bg-white">
       {/* section1*/}
      <section id='galaxy1' className="flex bg-white  w-auto">
        <div id="grid-container1" className='bg-white h-96.5 w-full'>
        
        {/*image div */}
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
          
           <div className=' center absolute top-[15rem] text-white'>
          <h1 id='one'>
            Plan The Perfect Event
          </h1>
          <p className='two ml-[10rem]'>Eventective is the most comprehensive resource to help you plan your event.
</p>
        </div>
         
        </div>
       
      </section>

        {/* section2*/}
      <section id='galaxy2' className='flex bg-orange-400 mt-0  w-90 m-10  '>
        <div id="grid-container2" className="grid bg-orange-400 h-full w-full grid-cols-2 ">
       
        
        
          <div className='bg-white rounded-5'>
            <h2 className='m-10 text-slate-800 ml-[15rem] font-semibold text-3xl'>How Eventective Works</h2>
            <div className='ml-[5rem] mt-[10rem] fonts'>
              <p className='vendors  text-slate-800 text-3xl font-bold'>Vendors</p>

              <div className='mt-10 '> <p className='ml-8 text-slate-600 text-2xl'> Create Your profile</p>
              <div className='mt-[-1.5rem]'> <FaEnvelope></FaEnvelope></div>
              </div>

              <div className='mt-10 '> <p className='ml-8  text-slate-600 text-2xl '> Showcase Your Services</p>
              <div className='mt-[-1.5rem] '> <FaEnvelope></FaEnvelope></div>
              </div>

              <div className='mt-10 '> <p className='ml-8  text-slate-600 text-2xl'> Receive Booking Requests</p>
              <div className='mt-[-1.5rem] '> <FaEnvelope></FaEnvelope></div>
              </div>

              <div className='mt-10 '> <p className='ml-8  text-slate-600 text-2xl'> Deliver Outstanding Services</p>
              <div className='mt-[-1.5rem]'> <FaEnvelope></FaEnvelope></div>
              </div>

              <div className='mt-10 '> <p className='ml-8  text-slate-600 text-2xl'> Get Paid Securely</p>
              <div className='mt-[-1.5rem] mr-4.8'> <FaEnvelope></FaEnvelope></div>
              </div>
              
              
            </div>
            <Link to='/Vendors'><button className='buttons bg-pink-800 mt-12 ml-[5rem] h-[6vh] w-[12rem] rounded-[1rem] text-white'>

            Join as a Vendor today</button></Link>

            {/*Event organizer*/}

            <div className='mt-[10rem]'>
              <img src={img3} alt="image" />
            </div>
           
           {/*Client*/}
           <div className='ml-[5rem] mt-[10rem] fonts'>
              <p className='vendors  text-slate-800 text-3xl font-bold'>Clients</p>

              <div className='mt-10 '> <p className='ml-8 text-slate-600 text-2xl'> Create Your profile</p>
              <div className='mt-[-1.5rem]'> <FaEnvelope></FaEnvelope></div>
              </div>

              <div className='mt-10 '> <p className='ml-8  text-slate-600 text-2xl '> Explore Events</p>
              <div className='mt-[-1.5rem] '> <FaEnvelope></FaEnvelope></div>
              </div>

              <div className='mt-10 '> <p className='ml-8  text-slate-600 text-2xl'> Book Tickets Easily</p>
              <div className='mt-[-1.5rem] '> <FaEnvelope></FaEnvelope></div>
              </div>

              <div className='mt-10 '> <p className='ml-8  text-slate-600 text-2xl'> Connect with Hosts</p>
              <div className='mt-[-1.5rem]'> <FaEnvelope></FaEnvelope></div>
              </div>

              <div className='mt-10 '> <p className='ml-8  text-slate-600 text-2xl'> Enjoy The Experience</p>
              <div className='mt-[-1.5rem] mr-4.8'> <FaEnvelope></FaEnvelope></div>
              </div>
              
              
            </div>
            <Link to='/BrowseSpaces'><button className='buttons bg-pink-800 mt-12 ml-[5rem] h-[6vh] w-[16rem] rounded-[1rem] text-white'>

            Discover Exciting Events Now!</button></Link>


            </div>
            
          {/*second column */} 
            
          <div className='bg-white rounded-5' >
          <div className='mt-[10rem] ml-[5rem]'>
          <img src={img1} alt="img" />
          </div>
         {/*Event organizer */} 
          <div className='ml-[5rem] mt-[15rem] fonts'>
              <p className='vendors  text-slate-800 text-3xl font-bold'>Event Organizers</p>

              <div className='mt-10 '> <p className='ml-8 text-slate-600 text-2xl'> Create Your profile</p>
              <div className='mt-[-1.5rem]'> <FaEnvelope></FaEnvelope></div>
              </div>

              <div className='mt-10 '> <p className='ml-8  text-slate-600 text-2xl '>Find Great Vendors</p>
              <div className='mt-[-1.5rem] '> <FaEnvelope></FaEnvelope></div>
              </div>

              <div className='mt-10 '> <p className='ml-8  text-slate-600 text-2xl'>Host Memorable Events</p>
              <div className='mt-[-1.5rem] '> <FaEnvelope></FaEnvelope></div>
              </div>

              <div className='mt-10 '> <p className='ml-8  text-slate-600 text-2xl'>Plan with Confidence</p>
              <div className='mt-[-1.5rem]'> <FaEnvelope></FaEnvelope></div>
              </div>

              <div className='mt-10 '> <p className='ml-8  text-slate-600 text-2xl'> Easy & Safe Booking</p>
              <div className='mt-[-1.5rem] mr-4.8'> <FaEnvelope></FaEnvelope></div>
              </div>
              
              
            </div>
            <Link to='/Vendors'><button className='buttons bg-pink-800 mt-12 ml-[5rem]  h-[6vh] w-[12rem] rounded-[1rem] text-white'>

            Get Started Now!</button></Link>

            {/*Client*/}

            <div className='mt-[18rem]'>
            <img src={img4} alt="img" />
            </div>
          
         
          </div> 
           
           

        </div>
      </section>
       {/* section3*/}
      {/* <section id="galaxy3" className='flex bg-white   m-10'>
        <div id="grid-container3"  className="grid bg-white h-full w-full">
        <div>
          <p className=' greens text-blue-950 text-2xl m-5 mt-2  '>Exprerience endless adventure with your photographer view beautiful photographs made by professional
          Photographers. Remember Photographs are not taken you make them.</p> 
          <CarouselSpacing></CarouselSpacing>
        </div> 
        </div> 
      </section> */}
       {/*section4*/}
      {/* <section id='galaxy4' className='flex bg-white w-90 mt-10 m-10'>
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
      </section> */}
       {/* section5
      <section id='galaxy5' className='flex bg-white w-90 m-10 mt-10'>
        <div id="grid-container5" className="grid  bg-white h-full w-full">
        <p className='text-[#010038] text-2xl m-5 mt-2  font-mono'>
          Event organizer section
        </p>
          <CarouselDemo></CarouselDemo>
        </div>
      </section> */}
       {/*section6*/}
      <section id='galaxy6' className='flex bg-white w-full m-0 mt-10 justify-center'>
        <div id='grid-cointainer6' className="grid  bg-pink-800 h-full w-full  justify-center">
         <div className='justify-center m-[3rem] '>
          
         <h1 className='text-white text-4xl font-bold tracking-wider ml-[20rem] '>
         Stay in the Loop!</h1>
         <div className='text-white text-3xl font-semibold tracking-wider mt-5'>
         Get the latest on trending venues, top-notch vendors, 
         and exclusive planning tools delivered straight to your inbox. Join our community now!
         </div>

             <div>
             <Link to='/Vendors' ><button className='text-[#06355d] bg-white mt-7 h-10 w-[10rem] rounded-md hover:bg-orange-700'>Vendors</button></Link>
             <Link to='/SignUp' ><button className='text-[#06355d] bg-white mt-[-5rem] h-10 w-[10rem] rounded-md hover:bg-orange-700 ml-[15rem]'>Sign up</button></Link>
             </div>
            

            
         </div>
         {/* <div>
             <Link to='/SignUp' ><button className='text-[#06355d] bg-white mt-[-35rem] h-10 w-[10rem] rounded-md hover:bg-orange-700 ml-[15rem]'>Sign up</button></Link>
             </div> */}
         
         
      
            
         
        </div>
      </section>
      </main>
       {/*Footer*/}
      
    </>
  )
}
