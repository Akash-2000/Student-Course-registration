import React from 'react'
import axios from "axios"
import { useState } from 'react'
import Navbar from '../navbar/navbar'
import "./staff.css"
export default function Staff() {

    const [name,setname]=useState("")
    const [email,setEmail]=useState("")
    const [mobile,setmobile]=useState("")
    const[dob,setdob]=useState("")
  

     const handleSubmit = async(e)=>{
    e.preventDefault()
    console.log(name,email,mobile,dob)
        try{
       
        const res = await axios.post(`https://61ef7787732d93001778e3c3.mockapi.io/Staff`,{
    name:name,
    email:email,
    mobile:mobile,
    dOB:dob

});
  if(res.statusText=="Created"){
    alert("Staff registration completed")
  }
    }catch(error){
        console.log(error)
    }
     
     }

  return (
    <>
      <Navbar/>

     <div class="d-flex align-items-center justify-content-center vh-100 highres">
    <form onSubmit={handleSubmit}>
              
  <div class="form-group">
       <p class="display-2">Staff Registration page</p>
        <label>Name</label>
    <input type="Name" class="form-control"  onChange={e=>setname(e.target.value)} placeholder="Enter your Name" required/>
</div>
 <div class="form-group">
    <label>Email address</label>
    <input type="email" class="form-control"  onChange={e=>setEmail(e.target.value)}placeholder="Enter email" required/>
  </div>
  
   <div class="form-group">
    <label>Mobile</label>
    <input type="text" class="form-control"  onChange={e=>setmobile(e.target.value)} placeholder="Enter mobile" required/>
  </div>
  <div class="form-group">
    <label>Date of birth</label>
    <input type="text" class="form-control"  onChange={e=>setdob(e.target.value)
    }placeholder="mm/dd/yyy" required/>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
</>
  )
}
