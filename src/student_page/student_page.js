import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import Countries from '../react-select'
import select from "react-select"
import Navbar from '../navbar/navbar'
export default function Student_page() {
  
    const courseref = useRef()
    const [staffanme,setstaffanme] = useState("Enter staff Name") 
    const [name,setname]=useState("")
    const [email,setEmail]=useState("")
    const [mobile,setmobile]=useState("")
    const[dob,setdob]=useState("")
    const [bloodgroup,setbloodgroup]=useState("")
    const[fathername,setfathername]=useState("")
    const[mothername,setmothername]=useState("")
    const[address,setaddress]=useState("")
    const[photo,setphoto]=useState("")
    const [coursenames,setcoursenames]=useState("")

    const [coursera,setcoursera] =useState([])
    useEffect(()=>{
      async function firstcall(){
         const  res = await axios.get(`https://61ef7787732d93001778e3c3.mockapi.io/course`);
          setcoursera(res.data.filter(e=>e.coursename))
        }
        firstcall()
    },[]) 
  

      const handleclick = async(e)=>{

        console.log(courseref.current.value)

             try{
       
     const  res = await axios.get(`https://61ef7787732d93001778e3c3.mockapi.io/course`);

        if(courseref.current.value!=""){
                const resulrt =   res.data.filter(e=>e.coursename==courseref.current.value)
                console.log(resulrt)
                if(resulrt[0]["staffname"]=== undefined){
                   setstaffanme("No author found")
                   console.log("i give")
                }
                else{
                    setstaffanme( resulrt[0]["staffname"])
                }
       
        }
       
    }catch(error){
        console.log(error)
         const  res = await axios.get(`https://61ef7787732d93001778e3c3.mockapi.io/course`);

    } 
    }
    const handleSubmit = async(e)=>{
      e.preventDefault()
      try{
          const res = await axios.post("https://61ef7787732d93001778e3c3.mockapi.io/student",{
            name:name,
            email:email,
            dob:dob,
            bloodgroup:bloodgroup,
            fathername:fathername,
            mothername:mothername,
            address:address,
            photo:photo,
            coursename:courseref.current.value,
            staff:staffanme
          })
    
      alert(`Student ${res.statusText}`)

      }catch(error){
        console.log(error)
      }
          }
    
  return (
    <>
      <Navbar/>
      
      <div class="d-flex align-items-center justify-content-center highres">
      <form onSubmit={handleSubmit}>

  <div class="form-group" >
      <p class="display-3">Student's Registeration Page</p>
      <label for="exampleInputEmail1">Name</label>
    <input type="Name" class="form-control" id="exampleInputName" aria-describedby="Name" placeholder="Enter your Name" onChange={e=>setname(e.target.value)}/>
</div>
 <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"onChange={e=>setEmail(e.target.value)}/>
  </div>
  <div class="form-group">
    <label for="exampleMobile">Mobile</label>
    <input type="text" class="form-control" id="exampleMoobile" placeholder="Enter Mobile"onChange={e=>setmobile(e.target.value)}/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Date of birth</label>
    <input type="text" class="form-control" id="exampleMoobile" placeholder="mm/dd/yyy"onChange={e=>setdob(e.target.value)}/>
  </div>
    <div class="form-group">
    <label for="exampleInputBloodGroup">Blood Group</label>
    <input type="text" class="form-control" id="exampleMoobile" placeholder=""onChange={e=>setbloodgroup(e.target.value)}/>
  </div>
    <div class="form-group">
    <label for="exampleInputFatherName">Father Name</label>
    <input type="text" class="form-control" id="exampleMoobile" placeholder="Enter Father Name"onChange={e=>setfathername(e.target.value)}/>
  </div>
    <div class="form-group">
    <label for="exampleInputMotherName">Mother Name</label>
    <input type="text" class="form-control" id="exampleMoobile" placeholder="Enter Mother Name"onChange={e=>setmothername(e.target.value)}/>
  </div>
   <div class="form-group">
    <label for="exampleInputMotherName">Address</label>
  <textarea class="form-control" placeholder="Enter the address" id="floatingTextarea"onChange={e=>setaddress(e.target.value)}></textarea>
  <label for="floatingTextarea"></label>
</div>
  <div class="form-group">
    <label for="exampleInputMotherName">Upload your photo..</label>
  </div>
 <div class="custom-file">
     <input type="file" class="custom-file-input" id="validatedCustomFile" required onChange={e=>setphoto(e.target.files[0].name)}/>
   
    
  </div>
 <div class="form-group">
       <label for="exampleInputEmail1">Course Name</label>
      
     <select class="form-select" id="validationCustom04" ref={courseref} onClick={handleclick} >
      <option  selected disabled value="">Select the course</option>

      {coursera.length>0 ? coursera.map((fruit) => <option >{fruit.coursename}</option>):<option></option>}
    </select> 
</div>
 <div class="form-group">
    <label for="validationCustom04" class="form-label">Staff Name</label>
    <input type="Name" class="form-control" id="exampleInputName" aria-describedby="Name" value={staffanme}onChange={e=>setstaffanme(e.target.value)}/>
</div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
</>
  )
}

