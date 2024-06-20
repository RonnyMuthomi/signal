//import React from 'react'
import { FaUser,FaEnvelope,FaKey} from "react-icons/fa";
import { MdDock} from "react-icons/md";
//import axios from 'axios'
//import {  useNavigate } from "react-router-dom"
//import { useState } from 'react'
import '../styles/Regmodal.css'
//import { useNavigate } from "react-router-dom";

export default function SignUp() {
  return (
    <>
    <main className="h-[100vh] bg-[whitesmoke] mt-0 ">
    <div className="formContainer">
    <form id="FORMS">
     
     <div>
      <input  type="text" id="firstname" name="firstname" placeholder="First Name" className=" firsts mt-8 ml-10 h-[6vh]
      w-[20rem]"  required />
      <input  type="text" id="lastname" name="lastname" placeholder="Last Name"  className=" firsts  mt-8 ml-10 h-[6vh]
      w-[20rem]" required />
      <div className="Ficons">
     
      <FaUser/>
      </div>
      <div className="Ficons2">
      <FaUser/>
      </div>
     
     </div>

     <div>
      <input  type="email" id="email" name="email" placeholder="Email Address" className="inputS"  required />
      
      <div className="Icons">
      <FaEnvelope/>
      </div>
     
     </div>
     
     <div>
      <input  type="number" id="phone" name="phone" placeholder="Phone" className="inputS"  required />
      
      <div className="Icons">
      
      <MdDock/>
      </div>
     
     </div>
     
     <div>
      <input  type="password" id="password" name="password" placeholder="Password" className="inputS"  required />
      
      <div className="Icons">
      
      <FaKey/>
      </div>
     
     </div>

     <div>
     <li className=" list-none mt-6 ml-10"><input type="checkbox" name="checkbox" id="check"/> I have read and accept the<a href="#"  className="text-pink-800"> Terms and privacy policy</a></li>
     </div>

     <div>
     <input type="submit" value="Sign up" className='mt-6 w-[42.3rem] ml-10 h-[6vh] border-none bg-blue-400 rounded-md
      font-serif text-xl text-white'/>
       <p id="account" className='mt-6 ml-10'>Already have an account? <a href="/Loginmodal" className="text-pink-800">Login</a></p>
     </div>

     {/* <div>
      <input  type="text" id="firstname" name="firstname" placeholder="First Name" className="inputS" />
      <div className="Icons">
      <FaUser/>
      </div>
     </div> */}

    {/* <div>
        <input type="text" name="lastname" placeholder="Last Name" required 
        />
          <div className="  text-2xl absolute flex content-center items-center text-[#999999]  mt-[-27px] ml-[83%]">
            <FaUser/>
        </div>
       </div> 
     
     <div>
        <input type="text" name="lastname" placeholder="Last Name" required 
       
        />
          <div className="  text-2xl absolute flex content-center items-center text-[#999999]  mt-[-27px] ml-[83%]">
            <FaUser/>
        </div>
       </div> 
     
      <div className="relative w-full">
        <input type="email" name="email" placeholder="Enter Email Address" required 
       
        />
         <div className="absolute flex content-center items-center text-[#999999] font-[1.6rem] mt-[-23px] ml-[88%]">
          <FaEnvelope/>
       </div>
      </div>
      
      <div className="relative w-full">
        <input type="number" name="phone" placeholder="Phone" required
        />
         <div className="absolute flex content-center items-center text-[#999999] font-[1.6rem] mt-[-23px] ml-[88%]">
          <MdDock/>
       </div>
      </div>
     
      <div className="relative w-full">
        <input type="password" name="password" placeholder="Password" required 
        />
         <div className="absolute flex content-center items-center text-[#999999] font-[1.6rem] mt-[-23px] ml-[88%]">
          <FaKey/>
       </div>
      </div>
    
       <li className="w-[none] list-none mt-6"><input type="checkbox" name="checkbox" id="check"/> I have read and accept the<a href="#" id='terms'> Terms and privacy policy</a></li>
       
       <input type="submit" value="Sign up" className='mt-6 w-[92.3%] h-[6vh] border-none bg-orange-500 text-white'/>
       <p id="account" className='mt-6'>Already have an account? <a href="/Loginmodal" id="LG">Login</a></p>*/}
     </form>
    </div>
       
    </main>

    
    </>
  )
}
