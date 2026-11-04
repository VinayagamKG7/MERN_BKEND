import React, { useEffect, useState } from 'react'

const App = () => {

  const [products , setProducts] = useState([])

  const getData = async() => {
    try {

      let data = await fetch( 'https://dummyjson.com/products' ) 
      let result =  await data.json()

      const data_result = result.products ;
      
      setProducts( data_result ) ;
      
    } catch (error) {
      console.log( error.message ) ;
    }
  }


  useEffect( () => {
    getData()
  },[] )

  return (
    <>
      <div>
        {products.map( (elem) => (
          <h1 key={elem.id}>{elem.title}</h1>
        ) )}
      </div>
    </>
  )
}

export default App ;