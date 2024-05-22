

import { FaUser,FaEnvelope,FaKey} from "react-icons/fa";
import { MdDock} from "react-icons/md";

import '../styles/Regmodal.css'

export default function Regmodal() {
  
  return (
    <>
      <form>
     
      <div className="field-group">
        <input type="text" name="firstname" placeholder="Fist Name" className="input-field" required />
        <div className="icon">
          <FaUser/>
        </div>
      </div>
      <div>
         <input type="text" name="lastname" placeholder="Last Name" required className=" absolute w-[42%] border-2
         border-solid border-[#999999] bg-transparent rounded-[3px] mt-[-5.5%] h-[6vh] ml-[18.5rem]"/>
           <div className="  text-2xl absolute flex content-center items-center text-[#999999]  mt-[-27px] ml-[83%]">
             <FaUser/>
         </div>
        </div> 
      
       <div className="relative w-full">
         <input type="email" name="email" placeholder="Enter Email Address" required className="mt-6 w-[92.3%] h-[6vh] border-2
         border-solid border-[#999999] bg-transparent rounded-[3px]"/>
          <div className="absolute flex content-center items-center text-[#999999] font-[1.6rem] mt-[-23px] ml-[88%]">
           <FaEnvelope/>
        </div>
       </div>
       
       <div className="relative w-full">
         <input type="number" name="phone" placeholder="Phone" required className="mt-6 w-[92.3%] h-[6vh] border-2
         border-solid border-[#999999] bg-transparent rounded-[3px]"/>
          <div className="absolute flex content-center items-center text-[#999999] font-[1.6rem] mt-[-23px] ml-[88%]">
           <MdDock/>
        </div>
       </div>
      
       <div className="relative w-full">
         <input type="password" name="password" placeholder="Password" required className="mt-6 w-[92.3%] h-[6vh] border-2
         border-solid border-[#999999] bg-transparent rounded-[3px]"/>
          <div className="absolute flex content-center items-center text-[#999999] font-[1.6rem] mt-[-23px] ml-[88%]">
           <FaKey/>
        </div>
       </div>
       
       <div className="relative w-full">
         <input type="password" name="confirm password" placeholder="Confirm Password" required className="mt-6 w-[92.3%] h-[6vh] border-2
         border-solid border-[#999999] bg-transparent rounded-[3px]"/>
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
