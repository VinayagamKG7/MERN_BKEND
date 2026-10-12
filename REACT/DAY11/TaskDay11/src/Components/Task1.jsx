import React, { useState } from 'react'

const Task1 = () => {

    let [ salary , setSalary] = useState( 25000 )
    let name = "Arun"

    
  return (
   <>
    <h1>{name}</h1>
    <p> Initial Salary : {salary} </p>
    <button onClick={()=>setSalary( salary + 5000)}> Increase Salary </button>
   </>
  )
}

export default Task1 ;