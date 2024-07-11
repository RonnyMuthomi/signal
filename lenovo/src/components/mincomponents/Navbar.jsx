import { NavLink, Link } from "react-router-dom";
import img1 from '../Images/logo.png';
import { useState, useEffect } from "react";
import '../styles/Navbar.css';

export default function Navbar() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [firstname, setFirstname] = useState('');

    useEffect(() => {
        // Check if token exists in localStorage to determine login state
        const token = localStorage.getItem('token');
        if (token) {
            setLoggedIn(true);
            fetchUserFirstname(token); // Fetch user firstname if logged in
        } else {
            setLoggedIn(false);
        }
    }, []);

    const fetchUserFirstname = async (token) => {
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
                setFirstname(result.users[0].firstname); // Assuming the API returns an array of users
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setLoggedIn(false);
        setFirstname(''); // Clear the firstname on logout
    };

    return (
        <>
            <nav className="navbar">
                <div className="m-[5rem] font">
                    <img src={img1} alt="img" />
                </div>
                <div className="navbar-container mr-[20rem]">
                    <ul className="navbar-list">
                        <li><Link to="/" className="font-serif text-xl">Home</Link></li>
                        <li><NavLink to="/Browse" className="font-serif text-xl">BrowseSpaces</NavLink></li>
                        <li><NavLink to="/Vendors" className="font-serif text-xl">Vendors</NavLink></li>
                        {loggedIn ? (
                            <>
                                <li><Link to="/" className="font-serif text-xl" onClick={handleLogout}>Logout</Link></li>
                                <li className="greeting font-serif text-xl">Hello, {firstname}</li>
                            </>
                        ) : (
                            <>
                                <li><NavLink to="/SignUp" className="font-serif text-xl">Sign up</NavLink></li>
                            </>
                        )}
                    </ul>
                </div>
            </nav>
        </>
    );
}
