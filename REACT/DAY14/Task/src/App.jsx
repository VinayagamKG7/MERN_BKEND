
import React, { useState } from 'react'
import NumberList from './components/NumberList'

const App = () => {

    let [ name , setName ] = useState( "" )
    let [ students , setStudents ] = useState( [] )

    let addStudent = () => {

        if ( name.trim() !== "" ) {
            setStudents( [ ...students , name ] )
            setName( "" )
        }

    }

    return (
        <>
            <h2>Student Name List</h2>

            <input
                type="text"
                value={ name }
                onChange={ (e) => setName( e.target.value ) }
                placeholder="Enter student name"
            />

            <button onClick={ addStudent }>
                Add Student
            </button>

            <h3>Students</h3>

            <ul>
                { students.map( (student, index) => (
                    <li key={ index }>{ student }</li>
                )) }
            </ul>

            <br />

            <NumberList/>
        </>
    )
}



export default App;
