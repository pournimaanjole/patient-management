import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Signup.css' 
import Navbar from '../../components/Navbar/Navbar'
import {Link} from 'react-router-dom'
const Signup = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [phoneNo, setPhoneNo] = useState()
    const [gender, setGender] = useState('female')
    const signup = async ()=>{
        if(!name){
            alert("name is required")
            return
        }
        if(!email){
            alert("email is required")
            return
        }
        if(!password){
            alert("password is require")
            return
        }if(!phoneNo){
            alert("phone no is required")
            return
        }




const response = await axios.post('/api/v1/admins',{
name,email,password,phoneNo,gender
}) 
alert(response?.data?.message)
if(response?.data?.success){

    window.location.href='/login'
}

    }
    useEffect(()=>{
        const admindata = JSON.parse(localStorage.getItem('admin'))
        if(admindata?.email){
            alert("you are already signup")
            window.location.href='/'
        }
    },[])
    return (
        <div className='singup-div'>
            <Navbar/>
            <div className='singup-container'>
                <div className='singup-page'>
                    <h1>Signup</h1>
                    <label htmlFor='name' className='label'>Name:</label>
                    <input type='text'
                        value={name}
                        placeholder='Ex: rani anjole '
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                        id='name'
                        className='input-div'
                    />

                    <label htmlFor='email' className='label'>Email:</label>
                    <input type='text'
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        placeholder='Ex : rani@gmail.com'
                        id='email' 
                        className='input-div'/>

                    <label htmlFor='password' className='label'>password:</label>
                    <input type='text'
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        placeholder='Ex: 9800'
                        id='password'
                        className='input-div'
                    />

                    <label htmlFor='phoneno' className='label'>Phone No: </label>
                    <input type='text'
                        value={phoneNo}
                        onChange={(e) => {
                            setPhoneNo(e.target.value)
                        }}
                        id='phoneno'
                        placeholder='Ex: 9021099232'
                        className='input-div'
                    />

                    <div>
                        <input type='radio'
                        name='gender'
                            checked={gender === 'male'}
                            onClick={() => {
                                setGender('male')
                            }} id='male' />
                            <label htmlFor='male' className='female'>Male</label>

                            <input type='radio'
                            name='gender' 
                            checked={gender === 'female'} 
                            onClick={()=>{
                                setGender("female")
                            }} id='female' 
                            className='radio' />
                            <label htmlFor='female' className='female'>Female</label>
                    </div>
                    <button type='button' onClick={signup} className='signup-btn'>Signup </button>
                    <span>already have an account? <Link  to='/login' className='link'>login</Link> </span>
                </div>
            </div>
        </div>
    )
}

export default Signup
