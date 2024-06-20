//import React from 'react'
import { MdClear} from "react-icons/md";
export default function dboard({handleSubmit,handleOnChange,handleClose}) {
  return (
    <div>
      <div className='flex bg-red-200 mt-5 w-[20rem]'>
     <MdClear className='hover:bg-red-700 ' onClick={handleClose}></MdClear> 
     <div className="mt-5">
      <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label><br />
            <input type="text" id='name' name='name' className="border-2 border-red-500" 
              onChange={handleOnChange}
            /><br />

            <label htmlFor="email">Email</label><br />
            <input type="email" id='email' name='email' className=""
              onChange={handleOnChange} /><br />

            <label htmlFor="mobile">Mobile</label><br />
            <input type="number" id='mobile' name='mobile' className="one"
               onChange={handleOnChange}
            /><br />

            <button type='submit'  className='bg-blue-700 mt-3 rounded-md w-[5rem]' >Submit</button>
        </form>
     </div>
       
     </div>
    </div>
  )
}
