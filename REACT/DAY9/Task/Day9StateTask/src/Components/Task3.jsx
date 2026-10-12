import React, { useState } from 'react'

const Task3 = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>

      {show && <h2>Welcome to React</h2>}
    </div>
  );
}

export default Task3