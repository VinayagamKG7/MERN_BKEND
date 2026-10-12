import React, { useState } from 'react'

const Task1 = () => {

const [name, setName] = useState("Kumar");

  return (
    <div>
      <h2>Name: {name}</h2>
      <button onClick={() => setName("Vinayagam")}>
        Change Name
      </button>
    </div>
  );

  
}

export default Task1 ;