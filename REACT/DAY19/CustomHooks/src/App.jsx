// import React, { use } from 'react'
// import usecustomHook from './hooks/useCustomHook'

// const App = () => {

//   const {count , increment} =usecustomHook() ;
//   return (
//     <>

//       <h1>{count}</h1>
//       <button onClick={increment}>Add</button>
    
//     </>
//   )
// }

// export default App ;


import useCounter from "./hooks/useCounter";

const App = () => {

  const counter1 = useCounter( 0 , 10 ) 
  return (
    <>
    <div>{counter1.count}</div>

    <button onClick={counter1.increment}>Increment</button>
    <button onClick={counter1.reset}>Reset</button>

    </>
  )
}

export default App

