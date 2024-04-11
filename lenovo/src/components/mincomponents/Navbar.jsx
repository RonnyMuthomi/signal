import { NavLink,Link } from "react-router-dom";

import  '../styles/Navbar.css'
export default function Navbar() {
  return (
    <div>
      <nav className="flex bg-gray-500 h-8">
        <ul> 
             <li><Link to="/">Home</Link></li>
            <li><NavLink to="/Dashboard">Dashboard</NavLink></li>
            <li><NavLink to="/Language">Language</NavLink></li>
            <li><NavLink to="/Browse">browse</NavLink></li>
            <li><NavLink to="/Career">career</NavLink></li>
            <li><NavLink to="/Activities">All activities</NavLink></li>
            <li><NavLink to="/spaces">spaces</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}
