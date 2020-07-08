import React, { Component } from 'react';
import TableData from "./TableData/tableData.js";

export default class Employee extends Component {
    render(){
        return (
            <div>
                <h1>Employees</h1>
                <TableData />
            </div>
        );
    }
}
