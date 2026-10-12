
import { useState } from "react";

function App() {
  const [skills, setSkills] = useState([
    "HTML",
    "CSS",
    "JavaScript"
  ]);

  function addReact() {
    setSkills([...skills, "React"]);
  }

  const handleClick = () => {
    
    let updated = skills.map( item => item == "JavaScript" ? "Advanced Javascript" : item ) ;
    setSkills( updated )
  }

  return (
    <div>
      <h1>My Skills</h1>

      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <button onClick={addReact}>Add React</button>

      <button onClick={handleClick}>
        Update JavaScript
      </button>
    </div>
  );
}

export default App;
