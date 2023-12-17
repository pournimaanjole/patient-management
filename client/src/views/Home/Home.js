import React, { useState ,useEffect} from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'

import axios from 'axios'
const Home = () => {

  const [fetchdata,setFetchdata] = useState([])
  const getAllData = async () => {
    const response = await axios.get('/api/v1/patients')
    setFetchdata(response?.data?.data)
  }

  useEffect(() => {
    getAllData();
  }, [])
  return (
    <div>
      <Navbar/>

      <div>
        {
          fetchdata?.map((data,index)=>{
const {firstname,lastname,phoneNo,bloodGroup,gender,status,updatedAt,createdAt} = data
return(<>
<div key={index} className='patient-data'>
<span className='display'> <span className='patient'>Patient Full Name:</span> {firstname} {lastname}</span>
<span  className='display'> <span  className='patient'>Patient Phone No:</span> {phoneNo}</span>
<span className='display'><span  className='patient'>Blood Group:</span> {bloodGroup}</span>
<span className='display'> <span  className='patient'>Gender:</span> {gender}</span>
<span className='display'> <span  className='patient'>Status data:</span> {status}</span> 
{/* <span>Admit Date: {createdAt}</span>  */}
<span className='button'>Delete</span> 
<span className='button'>Update</span>

</div>
</>)
          })
        }
      </div>
    </div>
  )
}

export default Home
