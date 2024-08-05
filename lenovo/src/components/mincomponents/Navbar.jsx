import { NavLink, Link } from "react-router-dom";
import img1 from '../Images/logo.png';
import { useState, useEffect } from "react";
import '../styles/Navbar.css';
import { useNavigate } from 'react-router-dom';

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [firstname, setFirstname] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setLoggedIn(true);
      fetchUserDetails(token);
    } else {
      setLoggedIn(false);
    }
  }, []);

  const fetchUserDetails = async (token) => {
    try {
      const response = await fetch('http://localhost:8081/api/val/users', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user');
      }

      const result = await response.json();
      if (result.users && result.users.length > 0) {
        setFirstname(result.users[0].firstname);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
    setFirstname('');
  };

  // condition in protectedRoute mincomponent
  const handleBrowseClick = () => {
    if (loggedIn) {
      navigate('/Browse');
    } else {
      navigate('/LoginModal');
    }
  };

  return (
    <nav className="navbar">
      <div className="m-[5rem] font">
        <img src={img1} alt="img" />
      </div>
      <div className="navbar-container mr-[20rem]">
        <ul className="navbar-list">
          <li><Link to="/" className="font-serif text-xl">Home</Link></li>
          <li><span onClick={handleBrowseClick} className="font-serif text-xl cursor-pointer text-white top ">BrowseSpaces</span></li>
          <li><NavLink to="/Vendors" className="font-serif text-xl">Vendors</NavLink></li>
          {loggedIn ? (
            <>
              <li><Link to="/" className="font-serif text-xl" onClick={handleLogout}>Logout</Link></li>
              <li className="greeting font-serif text-xl">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <span>Hello, {firstname}</span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel className="font-semibold">My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Link to='/ManageClientProfile' className="flex items-center gap-2">
                        <div className="h-4 w-4" />
                        <span>Profile</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link to="/settings" className="flex items-center gap-2">
                        <div className="h-4 w-4" />
                        <span>Settings</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive" onClick={handleLogout}>
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4" />
                        <span>Logout</span>
                      </div>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
            </>
          ) : (
            <li><NavLink to="/SignUp" className="font-serif text-xl">Sign up</NavLink></li>
          )}
        </ul>
      </div>
    </nav>
  );
}