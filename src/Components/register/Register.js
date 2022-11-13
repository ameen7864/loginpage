import React, {useState} from 'react'
import './Register.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
    const [user, setuser] = useState({
        name:"",
        email:"",
        password:"",
        // reenterPassword:""
    })
const handleChange=(e)=>{
    const {name, value}=e.target
    setuser({
        ...user,
        [name]:value
    })
}
const register=()=>{
  const {name, email, password} = user
  axios.post('http://localhost:3500/register', user)
  .then(res=>alert(res.data.message))
}

  return (
    <div className='register'>
      {console.log('user', user)}
      <h1>Register</h1>
      <input type="text" name="name" value={user.name} placeholder='your name' autoComplete='off'  onChange={handleChange}/>
      <input type="email" name="email" value={user.email} placeholder='your email' autoComplete='off' onChange={handleChange}/>
      <input type="password" name="password" value={user.password} placeholder='enter password' autoComplete='off' onChange={handleChange}/>
      {/* <input type="text" name="reenterpassword" value={user.reenterPassword} placeholder='reenter password'  onChange={handleChange}/> */}
      <button className='button' onClick={register}>Register</button>
      <div>or</div>
      <button className='button' onClick={()=>navigate("/login")}>Login</button>
    </div>
  )
}

export default Register
