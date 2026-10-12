import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
        <div className='flex justify-between bg-amber-300 items-center text-white p-8 '>
            <h1>Logo</h1>

            <div className='flex gap-3 items-center'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    
    </>
  )
}

export default NavBar