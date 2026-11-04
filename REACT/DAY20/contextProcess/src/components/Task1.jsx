
import React, { createContext, useContext } from 'react'

let UserContext = createContext()

const UserProvider = ({ children }) => {

    let user = {
        name: "Vinayagam",
        role: "Developer"
    }

    return (
        <UserContext.Provider value={ user }>
            { children }
        </UserContext.Provider>
    )
}

const Profile = () => {

    let user = useContext( UserContext )

    return (
        <>
            <h2>Name: { user.name }</h2>
            <h2>Role: { user.role }</h2>
        </>
    )
}

const Task1 = () => {

    return (
        <UserProvider>
            <Profile />
        </UserProvider>
    )
}

export default Task1 ;
