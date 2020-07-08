import React from 'react';
// import Employee from "./Employee/employee.js";


export default function EmployeeList({ employee }) {
    return (
employee.map(employee => {
    return <Employee key={employee.id} employee={employee} />
})
    )
};
