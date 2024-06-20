
import {Link} from 'react-router-dom'
import { FaEnvelope} from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <footer className='flex w-full bg-white '>
      <div className='mt-[10rem] ml-[30rem]'>FOLLOW US</div>
      <div className='mt-[10rem] '>
      <ul className='flex  mr-[5rem]'>
      <Link to=""><FaEnvelope></FaEnvelope></Link>
      <Link to=""  className='ml-5'><FaEnvelope></FaEnvelope></Link>
      <Link to=""  className='ml-5'><FaEnvelope></FaEnvelope></Link>
      </ul>
     
      </div>
     
      
      
         
      </footer>
    </>
  )
}
