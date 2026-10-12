import React, { useState } from 'react'

const Task2 = () => {

    let [ courses, setCourses ] = useState(["HTML", "CSS", "JavaScript"])

    return (
        <>
            <h1>Course List</h1>

            {courses.map((course, index) => (
                <p key={index}>{course}</p>
            ))}

            <button onClick={() => setCourses([...courses, "React"])}>
                Add React
            </button>

            <button onClick={() => setCourses(courses.map((course) => course === "CSS" ? "Advanced CSS" : course))}>
                Update CSS
            </button>
        </>
    )
}

export default Task2;