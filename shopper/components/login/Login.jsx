import React from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"


const Login = () => {
  return (
    <div className='login'>
      <h3>LOGIN</h3>
      <input type="email" placeholder='Email address' />
      <input type='password' placeholder='Password'/>
      <button className="continue" >Continue</button>
      <p className='create-acc'><span>create an account?</span><Link style={{textDecoration:"none",color:"red",fontWeight:"550"}} to="/signup" >Click here</Link></p>
      <p className='privacy-policy-login'><input type="checkbox" /><span/> By continuing,I agree to the terms of use and policy.<span /></p>
    </div>
  )
}

export default Login
