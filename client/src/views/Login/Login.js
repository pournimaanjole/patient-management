import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'

const Login = () => {
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const login = async()=>{
if (!email){
alert("enter the email")
return
}
if(!password){
    alert("enter the password")
    return
}
const response = await axios.post('/api/v1/login',{
    email:email,
    password:password
})
alert(response?.data?.message)
if(response?.data?.success){
    localStorage.setItem("admin" , JSON.stringify( response?.data?.data))
   window.location.href='/'
}
    }
    useEffect(()=>{
        const admindata = JSON.parse(localStorage.getItem('admin' || "{}"))
        if(admindata?.email){
            alert("you are already login")
            window.location.href='/'
        }
    },[])
  return (
    <div className='login-page'>
        <Navbar/>
      <div className='login-container'>
        <div className='login-div'>
            <h1>Login</h1>
            <label htmlFor='email' className='label'>Enter Email:</label>
            <input  type='text' 
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            className='input-box'
            id='email'
            placeholder='enter valid email' /> 


            <label htmlFor='password' className='label'>Enter Password: </label>
            <input type='text' 
            onChange={(e)=>{
                setPassword(e.target.value)
            }}   className='input-box'
            value={password} 
            placeholder='enter valid password' id='password' />

            <button type='button' onClick={login} className='btn'>Login</button>
            <span>don't have an account ?<Link to='/signup' className='link'>create a account</Link></span>
        </div>
      </div>
    </div>
  )
}

export default Login
