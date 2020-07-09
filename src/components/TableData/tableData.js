import React, { Component } from "react";
import API from "../../utils/API";
import Search from "../Search/search";
import EmployeeList from "../EmployeeList/employeeList";


export default class TableData extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: [],
            filteredUsers: []
        };
    }

    componentDidMount() {

        API.getEmployees()
            .then((res) => {
                console.log(res);
                this.setState({
                    users:res.data.results,
                    filteredUsers:res.data.results,
                });
            })
            .catch((err) => console.log(err));
    }


    handleOnChange = (event) => {
        console.log(event.target.value);

        const filter = event.target.value;
        const filteredList = this.state.users.filter(item=> {
            console.log(item);
            let values = Object.values(item)
                                .join("")
                                .toLowerCase();
            return values.indexOf(filter.toLowerCase()) !== -1;
        });
        this.setState({ filteredUsers: filteredList});
        console.log(filteredList);
    };
    render() {
        return (
            <div>
                <Search 
                    handleOnChange={this.handleOnChange}
                    users={this.state.users} 
                />
            
                <table>
                    <EmployeeList users={this.state.filteredUsers} />
                </table>
            </div>
        );
    }
}