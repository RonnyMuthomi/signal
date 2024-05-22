import { NavLink,Link } from "react-router-dom";

import  '../styles/Navbar.css'
export default function Navbar() {
  return (
    <div>
      <nav >
        <ul > 
             <li><Link to="/" className="font-serif text-xl">Home</Link></li>
            <li><NavLink to="/Dashboard" className="font-serif text-xl">Dashboard</NavLink></li>
            <li><NavLink to="/Language" className="font-serif text-xl">Language</NavLink></li>
            <li><NavLink to="/Browse" className="font-serif text-xl">Browse</NavLink></li>
            <li><NavLink to="/Spaces" className="font-serif text-xl">Spaces</NavLink></li>
            <li><NavLink to="/Activities" className="font-serif text-xl">All activities</NavLink></li>
            <li><NavLink to="/Vendors" className="font-serif text-xl">Vendors</NavLink></li>
            <li><NavLink to="/Create" className="font-serif text-xl">Create</NavLink></li>
            <li><NavLink to="/Edit" className="font-serif text-xl">Edit</NavLink></li>
            <li><NavLink to="/Read" className="font-serif text-xl">Read</NavLink></li>

        </ul>
      </nav>
    </div>
  )
}
