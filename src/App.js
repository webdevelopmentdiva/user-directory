import React, { useState, useRef } from 'react';
import Jumbotron from "./components/Jumbotron/jumbotron.js";
import './App.css';
import EmployeeList from "./components/EmployeeList/employeeList.js";
import Search from "./components/Search/search.js";


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
    <React.Fragment>

      <Jumbotron />
      <Search />
      <EmployeeList />

    </React.Fragment>   
  )
}

export default App;
