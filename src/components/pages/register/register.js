import React from 'react'
import './register.css'

export default function Register() {
  return (
    <div className='register'>
        <pan className="registerTitle">Register</pan>
        <form action="" className="registerForm">
        <label >Username</label>
            <input type="text" className='registerInput' placeholder='Enter Your username...' />
            <label >Email</label>
            <input type="text" className='registerInput' placeholder='Enter Your Email...' />
            <label >Password</label>
            <input type="password" className="registerInput" placeholder='Enter Your password...' />
            <button className="registerButton">Register</button>
        </form>
        <button className="registerLoginButton">Login</button>
    </div>
  )
}
