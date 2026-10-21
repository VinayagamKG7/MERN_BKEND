import React, { use, useState } from 'react'

const App = () => {

  const [datas,setDatas] = useState("") ;
  const [saveData , setSaveData] = useState([]) ;

  const handleChange = (e) => {
      const value = e.target.value ;
      setDatas(value) ;
    
  }

  const handleClick = () => {
    const copy = [...saveData]
    copy.push( datas ) ;
    setSaveData( copy ) ; 

    setDatas("")

  }

  const handleEdit = (params) => {
    setDatas(params)
  }

  return (
    <>
      <input type="text" value={datas} onChange={handleChange} />
      <button onClick={handleClick}>Add Task</button>

      <div>
        {saveData.map( (e,i) => (
          <div key={i}>
            <p>{i+1}</p>
            <h1>{e}</h1>
            <button onClick={() =>handleEdit(e)}>Edit</button>
            <button>Delete</button>
          </div>
          
        ) )}
      </div>


    </>
  )
}

export default App ;