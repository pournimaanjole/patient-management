import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  const [user,setUser] = useState({})
  useEffect(()=>{
    const adminfromLocalstroge = JSON.parse(localStorage.getItem('admin' || "{}"))
    setUser(adminfromLocalstroge);
  },[])
  return (
    <div>
      {/* navbar */}
      <div className='navbar'>
        <div>
<h2>patientManagment</h2>
        </div>
        <ul className='navlist'>
          <li>
<Link to='/' className='linktag'>Home</Link>
          </li>
          <li>
<Link to='/patient' className='linktag'>Patient-Data</Link>
          </li>
          <li>
<Link to='/login' className='linktag'>Login</Link>
          </li>
          <li>
<Link to='/signup' className='linktag'>Signup</Link>
          </li>
        </ul>
        <div>
          <span>Hello {user?.name || "Admin"}</span>
          <span >{user?.name?<span onClick={()=>{
            localStorage.removeItem('admin')
            window.location.href='/login'
          }} className='logout'>Log out</span>:null}</span>
        </div>

      </div>


     <div>

      {/* <div><Link to='/'> Home</Link> </div>
      
     <div> <Link to='/transaction'> transaction</Link></div>
     <div><Link to='/login'> login</Link></div>
     <div> <Link to='/singup'> singup</Link></div> */}
      
     
   {/* Hello{user?.name || 'user'}
  {
    user?.name?(<span onClick={()=>{
      localStorage.removeItem('login')
      window.location.href='/login'
    }}>logout</span>):null
  } */}
 
     </div>
      
    </div>
  )
}

export default Navbar
