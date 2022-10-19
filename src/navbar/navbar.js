import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Navbar() {
  let navigate = useNavigate()
 const handleclick = ()=>{
  navigate("/")
 }
 const handleclick1 = ()=>{
  navigate("/student")
 }
 const handleclick2 = ()=>{
  navigate("/staff")
 }

 const handleclick3 = ()=>{
  navigate("/table")
 }
  return (
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <a class="dropdown-item" onClick={handleclick}>Course Page</a>
           <a class="dropdown-item" onClick={handleclick3}>Students Data</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" onClick={handleclick1}>Student Register page</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" onClick={handleclick2}>Staff Registration</a>
      </ul>
      <form class="d-flex">
        
      </form>
    </div>
  </div>
</nav>
  )
}
