import React from 'react';



function EmployeeList(props) {
    return (
        <tbody>
            {props.users.map((user, index) => {
                return(

                <tr key={index}>
                    <td>
                        <img src={user.picture.large} alt="employee"></img>
                    </td>
                    <td>
                        {user.name.title}
                    </td>
                    <td>
                        {user.name.first}
                    </td>
                    <td>
                        {user.name.last}
                    </td>
                    <td>
                        {user.email}
                    </td>
                    <td>
                        {user.phone}
                    </td>
                </tr>
                )
            })}
        </tbody>
    )
};

export default EmployeeList;