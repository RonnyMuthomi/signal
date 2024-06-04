
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEnvelope,FaKey} from "react-icons/fa";
export default function Loginmodal() {

   const navigate=useNavigate();

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
  try{
    const response= await fetch('http://localhost:8081/auth/ronnie',{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(formData)
    })

    const result= await response.json();
    localStorage.setItem('token',result.token);
    console.error(result);

    navigate('/Dashboard')



    
  }
  catch(error){
    console.error(error.message);
  }
  finally{
    setFormData({
     
      email:"",
      password:"",
    })
  }
};

 
    
 
  return (
    <>
    <form onSubmit={handleLogin}>
    {/* ... Login form fields ... */}
    
    <div className="relative w-full m-5">
         <input type="email" name="email" placeholder="Enter Email Address" className="mt-4 w-[92.3%] h-[6vh] border-2
         border-solid border-[#999999] bg-transparent rounded-[3px]" value={formData.email}
         onChange={handleInputChange} required/>
          <div className="absolute flex content-center items-center text-[#999999] font-[1.6rem] mt-[-23px] ml-[88%]">
           <FaEnvelope/>
        </div>
       </div>

       <div className="relative w-full m-5">
         <input type="password" name="password" placeholder="Password"  className="mt-4 w-[92.3%] h-[6vh] border-2
         border-solid border-[#999999] bg-transparent rounded-[3px]" 
         onChange={handleInputChange}  value={formData.password} required/>
          <div className="absolute flex content-center items-center text-[#999999] font-[1.6rem] mt-[-23px] ml-[88%]">
           <FaKey/>
        </div>
       </div>
       
       <li className="list-none m-5"> <input type="checkbox"/> Remember me <a href="#" className="ml-[15rem] text-orange-600">forgot password?</a></li>
       
       <input type="submit" value="Login" className='mt-4 m-5 w-[92.3%] h-[6vh] border-none bg-orange-500 text-white'/>
       <p className="m-5">Do not have an account? <a href="/Signup" className="text-orange-600">Sign up</a></p>
    

    </form>
     
    </>
  )
}
