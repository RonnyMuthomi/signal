

import { FaEnvelope,FaKey} from "react-icons/fa";
export default function Loginmodal() {
  return (
    <>
    <form>
    <div className="relative w-full m-5">
         <input type="email" name="email" placeholder="Enter Email Address" className="mt-4 w-[92.3%] h-[6vh] border-2
         border-solid border-[#999999] bg-transparent rounded-[3px]" required/>
          <div className="absolute flex content-center items-center text-[#999999] font-[1.6rem] mt-[-23px] ml-[88%]">
           <FaEnvelope/>
        </div>
       </div>

       <div className="relative w-full m-5">
         <input type="password" name="password" placeholder="Password"  className="mt-4 w-[92.3%] h-[6vh] border-2
         border-solid border-[#999999] bg-transparent rounded-[3px]" required/>
          <div className="absolute flex content-center items-center text-[#999999] font-[1.6rem] mt-[-23px] ml-[88%]">
           <FaKey/>
        </div>
       </div>
       
       <li className="list-none m-5"> <input type="checkbox"/> Remember me <a href="#" className="ml-[15rem] text-orange-600">forgot password?</a></li>
       
       <input type="submit" value="Login" className='mt-4 m-5 w-[92.3%] h-[6vh] border-none bg-orange-500 text-white'/>
       <p className="m-5">Do not have an account? <a href="#" className="text-orange-600">Sign up</a></p>
    

    </form>
     
    </>
  )
}
