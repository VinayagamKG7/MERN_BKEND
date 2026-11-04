
import React, { useRef } from 'react'

const App = () => {

    let nameRef = useRef()
    let emailRef = useRef()

    let clearInputs = () => {
        nameRef.current.value = ""
        emailRef.current.value = ""
    }

    let submitForm = () => {
        alert(
            "Name: " + nameRef.current.value +
            "\nEmail: " + emailRef.current.value
        )
    }

    return (
        <>
            <h2>Input Focus and Clear</h2>

            <input
                type="text"
                placeholder="Enter Name"
                ref={ nameRef }
            />
            <br/><br/>

            <input
                type="email"
                placeholder="Enter Email"
                ref={ emailRef }
            />
            <br/><br/>

            <button onClick={ () => nameRef.current.focus() }>
                Focus Name
            </button>

            <button onClick={ () => emailRef.current.focus() }>
                Focus Email
            </button>

            <button onClick={ clearInputs }>
                Clear
            </button>

            <button onClick={ submitForm }>
                Submit
            </button>
        </>
    )
}

export default App ;
