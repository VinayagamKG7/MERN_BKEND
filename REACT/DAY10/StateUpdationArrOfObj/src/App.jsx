import { useState } from "react"
const App = () => {

  let[ arrObj , setarrObj ] = useState( [
  {name:"React" , age:22} ,
  {name:"Node" , age:34},
  {name:'Python' , age:40}

] )

  const handleClick = ( params ) => {

    const copy = [...arrObj]
    copy.push( params )

    setarrObj( copy ) ;
  }

  return (
    <>
      {arrObj.map( (e,i) => (
        <div key={i+1}>
          <h1>{e.name}</h1>
          <p>{e.age}</p>
        </div>
      ) )}

      <button onClick={()=>handleClick({name:"Django",age:56})}> Click to Add </button>
    </>
    
  )
}

export default App ;










