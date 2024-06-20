
//import { MdClear} from "react-icons/md";
import '../styles/career.css';
import { useEffect, useState } from "react";
import axios from "axios";
import DataForms from '../mincomponents/DataForms';
//import {axios} from 'axios'
//import dboard from '../component/dboard'
function Language() {
  
  const [editSection, setEditSection]=useState(false)
  const[addSection, SetAddSection]=useState(false)
  const[formData, setFormData]=useState({
    name:"",
    email:"",
    mobile:"",
  })
  const[formDataEdit, setFormDataEdit]=useState({
    name:"",
    email:"",
    mobile:"",
    id:""
  })

  const [dataList, setDataList]=useState([])

  const handleOnChange=(e)=>{
    const {value,name}=e.target
    setFormData((preve)=>{
      return{
        ...preve, [name]:value
      }
        
      
    })
  }

  const handleSubmit= async(e)=>{
    e.preventDefault()
    const data = await axios.post('http://localhost:8081/create', formData)
    console.log(data)
    if(data.data.success){
      SetAddSection(false)
      alert(data.data.message)
      getFetchData()
    }
  }
  //get function
  const getFetchData= async()=>{
    const data= await axios.get('http://localhost:8081/')
    if(data.data.success){
      console.log(data)
      setDataList(data.data.data)
     
     
    }
  }
  useEffect(()=>{
    getFetchData()
  },[])
  //delete api
  const handleDelete= async(id)=>{
    const data = await axios.delete('http://localhost:8081/delete/' + id)
    
    if(data.data.success){
      getFetchData()
      alert(data.data.message)
    }
  }
  //update api
   const handleUpdate= async(e)=>{
    e.preventDefault()
    const data=await axios.put('http://localhost:8081/update',formDataEdit)
    if(data.data.success){
     
      setEditSection(false)
      getFetchData()
      alert(data.data.message)
      setFormData({
        name:"",
        email:"",
        mobile:"",
      })
    }

   }
   const handleEditOnChange= async(e)=>{
    const {value,name}=e.target
    setFormDataEdit((preve)=>{
      return{
        ...preve,
        [name]:value
      }
    })
    
  }
  const handleEdit=(el)=>{
    setFormDataEdit(el)
    setEditSection(true)
  }
  return (
    <>
     <div className='container bg-slate-400 m-auto w-[50rem] h-full justify-center '>
     <button className='bg-pink-700 rounded-md w-[5rem] mt-5'
       onClick={()=>SetAddSection(true)}>Add</button>

     {
      addSection &&(
        <DataForms
        handleSubmit={handleSubmit}
        handleOnChange={handleOnChange}
        handleClose={()=> SetAddSection(false)}
        rest={formData}
        />
       
       
       
      )
     }
     {
      editSection &&(
        <DataForms
        handleSubmit={handleUpdate}
        handleOnChange={handleEditOnChange}
        handleClose={()=> setEditSection(false)}
        rest={formDataEdit}
        />

       
       
      )
     }
    

     <div className="tableContainer mt-5 border-2 border-solid">
      <table >
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            
          </tr>
        </thead>
        <tbody>
        
          { dataList[0] ?(
            dataList.map((el,index)=>{
              return(
                <tr key={index}>
                  <td>{el.name}</td>
                  <td>{el.email}</td>
                  <td>{el.mobile}</td>
                  <td>
                  <th>
              <button className="mr-3 bg-green-600 " onClick={()=>handleEdit(el)}>Edit</button>
              <button className="bg-red-500" onClick={()=> handleDelete(el._id)}>Delete</button>
            </th>
                  </td>
               
                </tr>
              )
            }))
            :(
              <p className="items-center">No Data</p>
            )
          }
        </tbody>
      </table>
     </div>
     </div>
    </>
  )
}

export default Language
