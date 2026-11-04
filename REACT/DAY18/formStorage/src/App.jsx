
import React, { useState } from 'react'

const App = () => {

    let [ name , setName ] = useState( "" )
    let [ email , setEmail ] = useState( "" )
    let [ password , setPassword ] = useState( "" )

    let register = () => {

        let user = {
            name: name,
            email: email,
            password: password
        }

        localStorage.setItem( "user" , JSON.stringify(user) )

        alert( "Registration Successful" )

        setName( "" )
        setEmail( "" )
        setPassword( "" )

    }

    return (
        <>
            <h2>Register</h2>

            <input
                type="text"
                placeholder="Enter Name"
                value={ name }
                onChange={ (e) => setName( e.target.value ) }
            />
            <br/><br/>

            <input
                type="email"
                placeholder="Enter Email"
                value={ email }
                onChange={ (e) => setEmail( e.target.value ) }
            />
            <br/><br/>

            <input
                type="password"
                placeholder="Enter Password"
                value={ password }
                onChange={ (e) => setPassword( e.target.value ) }
            />
            <br/><br/>

            <button onClick={ register }>Register</button>
        </>
    )
}

export default App ;
