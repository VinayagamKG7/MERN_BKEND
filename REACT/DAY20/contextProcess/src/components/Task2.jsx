
import React, { createContext, useContext, useState } from 'react'

let ThemeContext = createContext()

const ThemeProvider = ({ children }) => {

    let [ theme , setTheme ] = useState( "Light" )

    let toggleTheme = () => {
        setTheme( theme === "Light" ? "Dark" : "Light" )
    }

    return (
        <ThemeContext.Provider value={ { theme, toggleTheme } }>
            { children }
        </ThemeContext.Provider>
    )
}

const Theme = () => {

    let { theme, toggleTheme } = useContext( ThemeContext )

    return (
        <>
            <h2>Current Theme: { theme }</h2>

            <button onClick={ toggleTheme }>
                Toggle Theme
            </button>
        </>
    )
}

const Task2 = () => {

    return (
        <ThemeProvider>
            <Theme />
        </ThemeProvider>
    )
}

export default Task2 ;
