const App = () => {

    // TASK 1 - Primitive Data

    let studentName = "Arun"
    let age = 22
    let course = "React"
    let fees = 15000


    // TASK 2 - Array Rendering

    let skills = ["HTML", "CSS", "JavaScript", "React", "Node"]


    // TASK 3 - Object Rendering

    let student = {
        name: "Priya",
        age: 21,
        course: "MERN Stack",
        city: "Chennai"
    }


    return (
        <>
            {/* TASK 1 */}

            <h2>{studentName}</h2>

            <p>Age: {age}</p>
            <p>Course: {course}</p>
            <p>Fees: {fees}</p>


            {/* TASK 2 */}

            <h2>My Skills</h2>

            <ul>
                {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>


            {/* TASK 3 */}

            <h2>Student Details</h2>

            <p>Name: {student.name}</p>
            <p>Age: {student.age}</p>
            <p>Course: {student.course}</p>
            <p>City: {student.city}</p>
        </>
    )

}

export default App