import React, { useState } from 'react'

const App = () => {

  let [state , setState] = useState(0) ;

  const handleClick = () => {
     setState(state + 1 ) ;
  }

  return (
    <>
    <h1>{state}</h1>
    <button  onClick={handleClick} style={{backgroundColor:"black" , color:"white", padding:"10px" , borderRadius:"10px" , border:"none"}}>Click Me</button>
    </>
  )
}

export default App