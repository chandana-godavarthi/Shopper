import React from 'react'
import { Link } from 'react-router-dom'
import "./Signup.css"


const Signup = () => {
  return (
    <div className='signup'>
          <h3>SIGN UP</h3>
          <input type="text" placeholder='User name' />
          <input type="email" placeholder='Email address' />
          <input type='password' placeholder='Password'/>
          <button className="continue-signup" >Continue</button>
          <p className='create-acc-signup'><span>Already have an account?</span><Link style={{textDecoration:"none",color:"red",fontWeight:"550"}} to="/login" >Login here</Link></p>
          <p className='privacy-policy-signup'><input type="checkbox" /><span/> By continuing,I agree to the terms of use and policy.<span /></p>
        </div>
  )
}

export default Signup 
