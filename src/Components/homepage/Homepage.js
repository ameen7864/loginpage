import React from 'react'
import './Homepage.css'

const Homepage = ({setloginuser}) => {
 
  return (
    <div className='homepage'>
    <h1>Homepage</h1>
    <button className='button' onClick={()=>setloginuser({})}>logout</button>
    </div>
  )
}

export default Homepage
