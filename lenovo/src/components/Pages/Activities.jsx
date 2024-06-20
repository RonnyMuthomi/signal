import {  useState } from "react";
import axios from "axios";
function Activities() {
  const[formdata, setFormData]=useState();
  const handleOnchange= (e)=>{
    const {name,value}= e.target
    setFormData((prev)=>({
      ...prev,[name]:value
    }))

  };

  const handleSubmit= async (e)=>{
    e.preventDefault();
    const res=await axios.post("http://localhost:8081/api/two/create",formdata)

    if(res.data.success){
      alert(res.data.message)
      console.log("success")
     
    }



  }

  return (
    <>
     <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="username" 
        onChange={handleOnchange} value={formdata.username}
      />
      <input type="email" name="email" placeholder="email" 
        onChange={handleOnchange} value={formdata.email}
      />
      <input type="password" name="password" placeholder="password" 
        onChange={handleOnchange} value={formdata.password}
      />
     </form>
    </>
  )
}

export default Activities
