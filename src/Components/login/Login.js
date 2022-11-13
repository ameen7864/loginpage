import React, {useState} from 'react'
import './Login.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const Login = ({setloginuser}) => {
  const navigate = useNavigate();
    const [user, setuser] = useState({
        // name:"",
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
    const login=()=>{
      const {name, email, password} = user
      axios.post('http://localhost:3500/login', user)
      .then(res=>{alert(res.data.message)
       setloginuser(res.data.user)
       navigate("/")
      })
    }
    const navigatepage=()=>{
      navigate("/register")
      console.log('navigate');
    }
    
  return (
    <div className='login'>
        {console.log(user, 'user')}
      <h1>Login</h1>
      <input type="email" name="email" value={user.email} placeholder='enter your email'  onChange={handleChange} />
      <input type="password" name="password" value={user.password} placeholder='enter your password' onChange={handleChange} />
      <button className='button'onClick={login}>Login</button>
      <div>or</div>
      <button className='button' onClick={navigatepage}>Register</button>
      
    </div>
  )
}


export default Login
