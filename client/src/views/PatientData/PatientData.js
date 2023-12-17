import React, { useEffect, useState } from 'react'
import './PatientData.css'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'
const PatientData = () => {
  const [firstname, setFirstName] = useState()
  const [lastname, setLastname] = useState();
  const [bloodGroup, setBloodGroup] = useState()
  const [phoneNo, setPhoneNo] = useState();
  const [status, setStatus] = useState();
 

  const [gender, setGender] = useState('female')

  const addpatient = async () => {
    const response = await axios.post('/api/v1/patients', {
      firstname: firstname,
      lastname: lastname,
      bloodGroup: bloodGroup,
      phoneNo: phoneNo,
      status: status,
      gender: gender
    })
    if (response?.data?.success) {
      alert("patient data add successfully")
    }
    setFirstName("")
    setLastname("")
    setBloodGroup("")
    setPhoneNo("")
    setStatus("")
  }


  return (
    <div className='container'>
      <Navbar />
      <div className='small-container'> 

        <div className='singup-container margin'>


          <div className='singup-page'>
            <label htmlFor='name' className='label'>First Name:</label>
            <input type='text'
              value={firstname}
              placeholder='Ex: Rani '
              onChange={(e) => {
                setFirstName(e.target.value)
              }}
              id='name'
              className='input-div'
            />

            <label htmlFor='lastname' className='label'>Last Name:</label>
            <input type='text'
              value={lastname}
              onChange={(e) => {
                setLastname(e.target.value)
              }}
              placeholder='Ex : Anjole'
              id='lastname'
              className='input-div' />



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

            <label htmlFor='bloodgroup' className='label'>Blood Group: </label>
            <input type='text'
              value={bloodGroup}
              onChange={(e) => {
                setBloodGroup(e.target.value)
              }}
              id='bloodgroup'
              placeholder='Ex: A+'
              className='input-div'
            />

            <label htmlFor='Status' className='label'>Current Status: </label>
            <input type='text'
              value={status}
              onChange={(e) => {
                setStatus(e.target.value)
              }}
              id='Status'
              placeholder='Ex: covide+'
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
                onClick={() => {
                  setGender("female")
                }} id='female'
                className='radio' />
              <label htmlFor='female' className='female'>Female</label>

              <input type='radio'
                name='gender'
                checked={gender === 'other'}
                onClick={() => {
                  setGender("other")
                }} id='other'
                className='radio' />
              <label htmlFor='other' className='female'>Other</label>

            </div>

            <button type='button' className='signup-btn' onClick={addpatient}>Add New Patient</button>
          </div>
        </div>


       

      </div>
      
    </div>

  )
}

export default PatientData
