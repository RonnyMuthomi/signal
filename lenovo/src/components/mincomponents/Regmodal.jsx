

import { FaUser,FaEnvelope,FaKey} from "react-icons/fa";
import { MdDock} from "react-icons/md";
import axios from 'axios'
//import {  useNavigate } from "react-router-dom"
import { useState } from 'react'
import '../styles/Regmodal.css'
import { useNavigate } from "react-router-dom";

import PropTypes from 'prop-types';

Regmodal.propTypes = {
  setModal: PropTypes.func.isRequired,
};
export default function Regmodal() {
  
  const [values, setValues]=useState({
    firstname:"",
    lastname:"",
    email:"",
    phone:"",
    password:"",
    confirmpassword:""
  })
    const navigate=useNavigate();
    
  const handleSubmit= (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/api/signup', values)
  
    .then(res => {
      if (res.data.status){
       return true;
      } else{
        alert("success: " + res.data.message);
       
      }
    })
    .then(isSuccess => {
      if (isSuccess){
        navigate('/Dashboard')
      }
    })
    .catch(err => console.error(err));
     
   
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
     
      <div className="field-group">
        <input type="text" name="firstname" placeholder="Fist Name" className="input-field" required 
           onChange={e => setValues({...values, firstname: e.target.value})}
        />
        <div className="icon">
          <FaUser/>
        </div>
      </div>
      <div>
         <input type="text" name="lastname" placeholder="Last Name" required className=" absolute w-[42%] border-2
         border-solid border-[#999999] bg-transparent rounded-[3px] mt-[-5.5%] h-[6vh] ml-[18.5rem]"
         onChange={e => setValues({...values, lastname: e.target.value})}
         />
           <div className="  text-2xl absolute flex content-center items-center text-[#999999]  mt-[-27px] ml-[83%]">
             <FaUser/>
         </div>
        </div> 
      
       <div className="relative w-full">
         <input type="email" name="email" placeholder="Enter Email Address" required className="mt-6 w-[92.3%] h-[6vh] border-2
         border-solid border-[#999999] bg-transparent rounded-[3px]"
         onChange={e => setValues({...values, email: e.target.value})}
         />
          <div className="absolute flex content-center items-center text-[#999999] font-[1.6rem] mt-[-23px] ml-[88%]">
           <FaEnvelope/>
        </div>
       </div>
       
       <div className="relative w-full">
         <input type="number" name="phone" placeholder="Phone" required className="mt-6 w-[92.3%] h-[6vh] border-2
         border-solid border-[#999999] bg-transparent rounded-[3px]"
         onChange={e => setValues({...values, phone: e.target.value})}
         />
          <div className="absolute flex content-center items-center text-[#999999] font-[1.6rem] mt-[-23px] ml-[88%]">
           <MdDock/>
        </div>
       </div>
      
       <div className="relative w-full">
         <input type="password" name="password" placeholder="Password" required className="mt-6 w-[92.3%] h-[6vh] border-2
         border-solid border-[#999999] bg-transparent rounded-[3px]"
         onChange={e => setValues({...values, password: e.target.value})}
         />
          <div className="absolute flex content-center items-center text-[#999999] font-[1.6rem] mt-[-23px] ml-[88%]">
           <FaKey/>
        </div>
       </div>
       
       <div className="relative w-full">
         <input type="password" name="confirmpassword" placeholder="Confirm Password" required className="mt-6 w-[92.3%] h-[6vh] border-2
         border-solid border-[#999999] bg-transparent rounded-[3px]"
         onChange={e => setValues({...values, confirmpassword: e.target.value})}
         />
          <div className="absolute flex content-center items-center text-[#999999] font-[1.6rem] mt-[-23px] ml-[88%]">
           <FaKey/>
        </div>
       </div>
       
         
        <li className="w-[none] list-none mt-6"><input type="checkbox" name="checkbox" id="check"/> I have read and accept the<a href="#" id='terms'> Terms and privacy policy</a></li>
        
        <input type="submit" value="Sign up" className='mt-6 w-[92.3%] h-[6vh] border-none bg-orange-500 text-white'/>
        <p id="account" className='mt-6'>Already have an account? <a href="#" id="LG">Login</a></p>
      </form>
    </>
  )
}
