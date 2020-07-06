import React from 'react'
import Employee from "./components/Employee"

export default function EmployeeList({ employee }) {
    return (
employee.map(todo => {
    return <Employee key={employee.id} employee={employee} />
})
    )
}
