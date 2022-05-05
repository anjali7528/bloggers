import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'

export default function Login() {
  return (
    <div className='login'>
        <pan className="loginTitle">Login</pan>
        <form action="" className="loginForm">
            <label >Email</label>
            <input type="text" className='loginInput' placeholder='Enter Your Email...' />
            <label >Password</label>
            <input type="password" className="loginInput" placeholder='Enter Your password...' />
            <button className="loginButton">Login</button>
        </form>
        <button className="loginRegisterButton">Register
        <Link className="link" to="/register">Register</Link>
        </button>
    </div>
  )
}
