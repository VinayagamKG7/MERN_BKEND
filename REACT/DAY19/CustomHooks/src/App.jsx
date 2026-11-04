// import React, { use } from 'react'
// import usecustomHook from './hooks/useCustomHook'

import { useEffect, useRef, useState } from "react";

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


// import useCounter from "./hooks/useCounter";

// const App = () => {

//   const counter1 = useCounter( 0 , 10 );

//   return (
//     <>
//     <div>{counter1.count}</div>

//     <button onClick={counter1.increment}>Increment</button>
//     <button onClick={counter1.reset}>Reset</button>

//     </>
//   )
// }

// export default App


// import React, { useRef } from 'react'

// const App = () => {

//   const headingref = useRef(null)  ;

//   const handleClick = () => {

//     console.log( headingref.current )

//     headingref.current.innerText = "Welcome to React" ;
//   }

//   return (
//     <>
//       <h1 ref={headingref}></h1>
//       <button onClick={handleClick}>Click to View</button>
//     </>
//   )
// }

// export default App ;



function App() {

  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");
  let {current} = previousInputValue ;
  console.log( 'current', current ) ;

  useEffect(() => {
        current = inputValue;
        console.log( 'effect Running.....' );
        console.log( current ) ; 
  }, [inputValue]);

  console.log( current ) ;

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {current}</h2>
    </>
  );
}

export default App ;








