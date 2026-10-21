import React, { useEffect, useState } from 'react'

const App = () => {

  const[fetchData , setFetchData] = useState([])

  const getData = async () => {

    const data = await fetch('https://dummyjson.com/users') ;
    const result = await data.json()
    console.log( result.users )
    setFetchData( result.users ) ;
  }

  useEffect( () =>{
     getData()
  }, [] )
 

  return (
    <>
    <div className='bg-green-400 p-5 flex '>
      {fetchData.map( (e) => (
        <div key={e.id} className='gap-3 bg-white p-3 rounded'>
          <p >{e.firstName}</p>
          <p>{e.age}</p>
          <p>{e.city}</p>
          <button className='bg-black text-white p-2 rounded'>details</button>
        </div>
        
        
      ) )}
    </div>
    </>
  )
}

export default App