
import React, { useState } from 'react'

const Task1 = () => {

    let [ name , setName ] = useState( "" )
    let [ department , setDepartment ] = useState( "" )
    let [ salary , setSalary ] = useState( "" )
    let [ employees , setEmployees ] = useState( [] )
    let [ editIndex , setEditIndex ] = useState( -1 )

    let addEmployee = () => {

        if ( name !== "" && department !== "" && salary !== "" ) {

            let employee = {
                name: name,
                department: department,
                salary: salary
            }

            if ( editIndex === -1 ) {
                setEmployees( [ ...employees , employee ] )
            }
            else {
                employees[editIndex] = employee
                setEmployees( [ ...employees ] )
                setEditIndex( -1 )
            }

            setName( "" )
            setDepartment( "" )
            setSalary( "" )
        }

    }

    let editEmployee = (index) => {
        setName( employees[index].name )
        setDepartment( employees[index].department )
        setSalary( employees[index].salary )
        setEditIndex( index )
    }

    let deleteEmployee = (index) => {
        setEmployees( employees.filter( (emp, i) => i !== index ) )
    }

    return (
        <>
            <h2>Employee Form</h2>

            <input
                type="text"
                placeholder="Enter Name"
                value={ name }
                onChange={ (e) => setName( e.target.value ) }
            />

            <br/><br/>

            <input
                type="text"
                placeholder="Enter Department"
                value={ department }
                onChange={ (e) => setDepartment( e.target.value ) }
            />

            <br/><br/>

            <input
                type="number"
                placeholder="Enter Salary"
                value={ salary }
                onChange={ (e) => setSalary( e.target.value ) }
            />

            <br/><br/>

            <button onClick={ addEmployee }>
                { editIndex === -1 ? "Add Employee" : "Update Employee" }
            </button>

            <h2>Employee List</h2>

            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Salary</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    { employees.map( (emp, index) => (
                        <tr key={ index }>
                            <td>{ emp.name }</td>
                            <td>{ emp.department }</td>
                            <td>{ emp.salary }</td>
                            <td>
                                <button onClick={ () => editEmployee(index) }>
                                    Edit
                                </button>

                                <button onClick={ () => deleteEmployee(index) }>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )) }
                </tbody>
            </table>
        </>
    )
}

export default Task1 ;
