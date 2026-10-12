import { Link } from "react-router-dom"


const NavBar = () => {
  return (
    <>
        <div className="flex justify-between p-4 mx-4">
            <span>
               <Link to='/'> All Sports </Link>
               <Link to='/men'>Men </Link>
               <Link to='/women'>Women </Link>
               <Link to='/kids'>Kids</Link>
            </span>

            <p>Delivery to <span style={{color:"#3643BA"}}>Bangalore Central, Bangalore, 560001, Karnataka</span></p>
        </div>
    </>
  )
}

export default NavBar