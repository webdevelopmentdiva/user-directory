import React, { useState, useRef } from 'react';
import Jumbotron from "./components/jumbotron/jumbotron.js";
import './App.css';
import EmployeeList from "./components/employees/EmployeeList.js";


function App() {
  const [employees, setEmployees] = useState([])
  const employeeNameRef = useRef()

//Add employee function
  function handleAddEmployee(e) {
    const name = employeeNameRef.current.value
    if (name === "") return
    setEmployees(prevEmployees => {
      return [...prevEmployees, { id: 1, name: name, complete: false}]
    })
    employeeNameRef.current.value = null
  }

  return (
      <>
      <Jumbotron />   
      <EmployeeList employees={employees} />   
      <h1>Employee Directory Search</h1>
      <input ref={employeeNameRef} type="text" />
      <button onClick={handleAddEmployee}>Add Employee</button>
      <button>Remove Employee</button>
      </>
  )
}

export default App;
