import React, { useContext, useRef } from 'react'
import { Context } from '../../../context/Context'
import './login.css'
import axios from 'axios'

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const {user, dispatch} = useContext(Context)

  const handleSubmit = async (e) =>{
    e.preventDefault()
    dispatch({type:"LOGIN_START"})
    try{
       const res = await axios.post("/auth/login",{
         username: userRef.current.value,
         password:passwordRef.current.value,
       })
       dispatch({type:"LOGIN_SUCCESS", payload: res.data});
    }catch(err){
      dispatch({type:"LOGIN_FAILURE"});
    }
   console.log(user);
  }
  return (
    <div className='login'>
        <span className="loginTitle">Login</span>
        <form action="" className="loginForm" onSubmit={handleSubmit}>
            <label >Email</label>
            <input type="text" 
            className='loginInput'
             placeholder='Enter Your Email...' 
             ref={userRef}/>
            <label >Password</label>
            <input type="password" 
            className="loginInput"
             placeholder='Enter Your password...'
             ref={passwordRef} />
            <button className="loginButton">Login</button>
        </form>
    </div>
  )
}
