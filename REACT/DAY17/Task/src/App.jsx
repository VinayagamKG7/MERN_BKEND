
import React, { useState, useEffect } from 'react'

const Task1 = () => {

    let [ count, setCount ] = useState( 0 )
    let [ isRunning, setIsRunning ] = useState( false )

    useEffect( () => {

        let timer

        if ( isRunning ) {
            timer = setInterval( () => {
                setCount( count => count + 1 )
            }, 1000 )
        }

        return () => {
            clearInterval( timer )
        }

    }, [ isRunning ] )

    return (
        <>
            <h1>Digital Timer</h1>

            <h2>{ count } seconds</h2>

            <button onClick={ () => setIsRunning( true ) }>
                Start
            </button>

            <button onClick={ () => setIsRunning( false ) }>
                Stop
            </button>

            <button onClick={ () => {
                setIsRunning( false )
                setCount( 0 )
            } }>
                Reset
            </button>
        </>
    )
}

export default Task1;
