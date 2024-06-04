import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import { json } from "sequelize";

export default function SignUp() {
  const navigate=useNavigate();

  const [formData, setFormData] = useState({
    name: "",
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

  const handleSignup = async (e) => {
    e.preventDefault();
    try{
      const response= await fetch('http://localhost:8081/api/register',{
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(formData)
      })

      const result= await response.json();
      console.log(result);

      navigate('/')



      
    }
    catch(error){
      console.error(error.message);
    }
    finally{
      setFormData({
        name:"",
        email:"",
        password:"",
      })
    }
  };

  return (
    <>
      <form onSubmit={handleSignup}>
        <h1>Sign up</h1>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" placeholder="enter name"  value={formData.name}
        onChange={handleInputChange} />

        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" id="email" placeholder="enter Email address"  value={formData.email}
        onChange={handleInputChange} />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" placeholder="password"  value={formData.password}
          onChange={handleInputChange}
        />

        <button type="submit">Sign Up</button>
      </form>

      <Link to="/Loginmodal">Login</Link>
    </>
  );
}
