import React, { useState } from 'react'

const Toggle = () => {

    let [isOn, setIsOn] = useState(false)

    return (
        <>
            <h1>Status: {isOn ? "ON" : "OFF"}</h1>

            <button onClick={() => setIsOn(!isOn)}>
                {isOn ? "Turn OFF" : "Turn ON"}
            </button>
        </>
    )
}

export default Toggle;