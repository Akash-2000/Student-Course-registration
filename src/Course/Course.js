import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Navbar from '../navbar/navbar'
import "./course.css"
export default function Course() {
    const [staffname,setstaffname]=useState("Select the staff name")
     const [coursera,setcoursera] =useState([])
    const [coursename,setcoursename]=useState("")
    function setArray(value){
      console.log(typeof((value.name))=="string")
      if(typeof(value.name)=="string"){
        console.log(value.name)
        return value
      }
    }
      useEffect(()=>{
      async function firstcall(){
         const  res = await axios.get(`https://61ef7787732d93001778e3c3.mockapi.io/Staff`);
          setcoursera(res.data.filter(setArray))
        }
        firstcall()
    },[]) 
    console.log(coursera)    
  const handleSubmit = async(e)=>{
    e.preventDefault()
    console.log(staffname)
     try{
       
        const res = await axios.post(`https://61ef7787732d93001778e3c3.mockapi.io/course`,{
    coursename:coursename,
    "staffname":staffname

});
   alert(`Course ${res.statusText}`)
    }catch(error){
        console.log(error)
    }
  }
    return (
      <>
      <Navbar/>
       <div class="d-flex align-items-center justify-content-center vh-100 highres">
      <form onSubmit={handleSubmit}>
         <p class="display-2">Course Page</p>
  <div class="form-group">
      <label>Course Name</label>
    <input type="Name" class="form-control" onChange={e=>setcoursename(e.target.value)}  aria-describedby="Name" placeholder="Enter your Course Name" required/>
</div>
 <div class="form-group">
    <label class="form-label">Staff Name</label>
    <select class="form-select" onClick={e=>setstaffname(e.target.value)} required>
      <option  selected disabled >Select the staff Name</option>
      {console.log(coursera.map((fruit =>fruit.name)))}
      {coursera.length>0 ? coursera.map((fruit) => <option >{[fruit.name]}</option>):<option></option>}
    </select>
</div>
 <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
</>
  )
}
