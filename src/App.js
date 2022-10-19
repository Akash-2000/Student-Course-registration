
import './App.css';
import Staff from './staff/Staff';
import Course from './Course/Course';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student_page from './student_page/student_page';
import Navbar from './navbar/navbar';
import Table from './StudentTable/Table';
import Edit_Student_page from './EditData/editdata';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route path="/nav" element={ <Navbar/>}/>
        <Route path="/student" element={ <Student_page/>}/>
          <Route path="/" element={<Course/>} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/table" element={<Table />} />
          <Route path="/updatedata" element={<Edit_Student_page/>}/>
      </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
