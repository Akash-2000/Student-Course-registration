import React from 'react'
import { useEffect , useState} from 'react'
import axios from 'axios';
import "./table.css"
import { useNavigate } from 'react-router-dom';
import { useReducer } from 'react';
export default function Table() {
  let navigate = useNavigate()
  const[reducerVAlue,forceUpdate]=useReducer(x=>x+1,0)
      const [studentData,setstudentData]=useState([]);
      const[editData,setEditData]=useState([])
    useEffect(()=>{
    async function getstudent(){
    const res = await axios.get("https://61ef7787732d93001778e3c3.mockapi.io/student")
      .then(
        (result) => {
        console.log(studentData)
        setstudentData(result.data);
        })
      
    }
    getstudent()
  },[reducerVAlue]);
  const[editname,seteditname]=useState()
  const[editemail,seteditemail]=useState("")
  const[editdob,seteditdob]=useState("")
  const[editblood,seteditblood]=useState("")
  const[editaddress,seteditaddress]=useState("")
  /* const[editFather]=useState("")
  const[]=useState("") */
 
  const gettheData = (Data)=>{
        let { id, name, email,dob,bloodgroup,address,fathername,mothername,coursename,staff} = Data;
        console.log( id, name, email,dob,bloodgroup,address,fathername,mothername,coursename,staff)
        localStorage.setItem('id', id);
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('dob', dob)
        localStorage.setItem('bloodgroup', bloodgroup)
        localStorage.setItem('address', address)
        localStorage.setItem('fathername', fathername)
        localStorage.setItem('mothername', mothername)
        localStorage.setItem('coursename',coursename)
        localStorage.setItem('staff',staff)

        navigate("/updatedata")

}
const deldata = async(e)=>{
    try{
      alert(`Are you sure want to delete ${e.name} from the records`)
      const res = await axios.delete(`https://61ef7787732d93001778e3c3.mockapi.io/student/${e.id}`)
      alert("user deleted")
      forceUpdate()
    }catch(error){
        console.log(error)
    }
}
  return (
      <table class=" table table-striped table-dark">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>D.O.B</th>
        <th>Blood Group</th>
        <th>address</th>
        <th>Father Name</th>
        <th>Mother Name</th>
        <th>Seleted course</th>
        <th>Staff Name</th>
        <th></th>
        <th></th>
      
      </tr>
    </thead>
    <tbody>
     {/*  <tr>
          <td><input type="text" value={editData.name} onChange={handleclick1}></input></td>
      {/* <td><input type="text" value={editData.email}></input></td>
      <td><input type="text" value={editData.dob}></input></td>
      <td><input type="text" value={editData.bloodgroup}></input></td>
      <td><input type="text" value={editData.address}></input></td>
      <td><input type="text" value={editData.fathername}></input></td>
      <td><input type="text" value={editData.mothername}></input></td>
      <td></td>
      <td></td>
      <td><button type="button" class="btn btn-primary">Save</button></td>
      <td></td> */} 
     {studentData.map(stu=>(
            <tr key={stu.id}>
              <td>{stu.name}</td>
              <td>{stu.email}</td>
              <td>{stu.dob}</td>
              <td>{stu.bloodgroup}</td>
              <td>{stu.address}</td>
              <td>{stu.fathername}</td>
              <td>{stu.mothername}</td>
              <td>{stu.coursename}</td>
              <td>{stu.staff}</td>
              <td><button type="button" class="btn btn-primary" onClick={()=>gettheData(stu)}>Edit</button></td>
              <td><button type="button" class="btn btn-danger" onClick={()=>deldata(stu)}>Delete</button></td>
            </tr>
          ))}
    </tbody>
  </table>
  )
}
