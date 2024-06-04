import { NavLink,Link } from "react-router-dom";
import img1 from '../Images/logo.png'

import  '../styles/Navbar.css'
export default function Navbar() {
  return (
    <>
      <nav >
      <div className="m-[5rem]">
        <img src={img1} alt="img" />
      </div>
      <div className="mr-[20rem]">
      <ul > 
             <li><Link to="/" className="font-serif text-xl">Home</Link></li>
              
            <li><NavLink to="/Browse" className="font-serif text-xl">BrowseSpaces</NavLink></li>
            <li><NavLink to="/Vendors" className="font-serif text-xl">Vendors</NavLink></li>
             <li><NavLink to="/SignUp" className="font-serif text-xl">Sign up</NavLink></li> 
            {/*  */}
           
            {/* <li><NavLink to="/Create" className="font-serif text-xl">Create</NavLink></li>
            <li><NavLink to="/Edit" className="font-serif text-xl">Edit</NavLink></li>
            <li><NavLink to="/Read" className="font-serif text-xl">Read</NavLink></li> */}
               {/* <li><NavLink to="/Dashboard" className="font-serif text-xl">Dashboard</NavLink></li> */}
               {/*          
            <li><NavLink to="/Language" className="font-serif text-xl">Language</NavLink></li> */}

        </ul>
      </div>
       
      </nav>
    </>
  )
}
