import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEnvelope, FaKey } from "react-icons/fa";
import '../styles/Loginmodal.css';

export default function Loginmodal() {
    const navigate = useNavigate();
    const [loginMessage, setLoginMessage] = useState("");
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
   

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:8081/api/log/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            const result = await response.json();
            localStorage.setItem('token', result.token);
            setLoginMessage("Login successful!");
            if (result.role === 'vendor') {
                navigate('/VendorHome'); // Navigate to VendorHome page
            } else {
                navigate('/'); // Navigate to home page
            }
        } else {
            setLoginMessage("Login failed! Check your credentials.");
        }
    } catch (error) {
        console.error(error.message);
        setLoginMessage("An error occurred. Please try again.");
    } finally {
        setFormData({
            email: "",
            password: "",
        });
    }
};


    return (
        <>
        <main className="MAIN">
        <div className="loginmodal">
            <form onSubmit={handleLogin}>
                <div className="text">
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Enter Email Address"  
                        value={formData.email} 
                        onChange={handleInputChange} 
                        required 
                    />
                    <div className="absolute flex content-center items-center text-[#999999] font-[1.6rem] mt-[-25px] ml-[15rem]">
                        <FaEnvelope />
                    </div> 
                </div>

                <div className="text">
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password"  
                        onChange={handleInputChange} 
                        value={formData.password} 
                        required 
                    />
                    <div className="absolute flex content-center items-center text-[#999999] font-[1.6rem] mt-[-25px] ml-[15rem]">
                        <FaKey />
                    </div> 
                </div>

                <li className="list-none ml-0">
                    <input type="checkbox" /> Remember me <a href="/SignUp" className="text-pink-800">forgot password?</a>
                </li>

                <input type="submit" value="Login" id="buttun" />
                <p className="m-5">Do not have an account? <a href="/Signup" className="text-pink-800">Sign up</a></p> 
            </form>
            {loginMessage && <p className="login-message">{loginMessage}</p>}
        </div>
        </main>
        </>
    );
}
