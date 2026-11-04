import React, { useState } from 'react'

const NumberList = () => {

     let [ number , setNumber ] = useState( "" )
    let [ numbers , setNumbers ] = useState( [] )

    let addNumber = () => {
        if ( number !== "" ) {
            setNumbers( [ ...numbers , Number(number) ] )
            setNumber( "" )
        }
    }

  return (
    <>
         <h2>Number Storage</h2>

            <input
                type="number"
                value={ number }
                onChange={ (e) => setNumber( e.target.value ) }
            />

            <button onClick={ addNumber }>Add Number</button>

            <ul>
                { numbers.map( (num, index) => (
                    <li key={ index }>
                        { num } - { num % 2 === 0 ? "Even" : "Odd" }
                    </li>
                )) }
            </ul>
    </>
  )
}

export default NumberList