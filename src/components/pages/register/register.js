import React, {useState} from 'react'
import './register.css'
import axios from 'axios'

export default function Register() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = async (e)=>{
    e.preventDefault();
    setError(false)
     try{
       
      const res =await axios.post("/auth/register",{
        username,
         email,
        password,
      });
    
     res.data && window.location.replace("/login");
    }catch(err)
    {
      console.log(err);
      setError(true);
    }
  }

  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
        <form action="" className="registerForm" onSubmit={handleSubmit}>
        <label >Username</label>
        
            <input 
            type="text" 
            className='registerInput'
             placeholder='Enter Your username...'
             onChange={e=>setUsername(e.target.value)}
             />
            <label >Email</label>
            <input type="text"
             className='registerInput'
              placeholder='Enter Your Email...'
              onChange={e=>setEmail(e.target.value) }/>
            <label >Password</label>
            <input type="password"
             className="registerInput" 
             placeholder='Enter Your password...'
             onChange={e=>setPassword(e.target.value) } />
            <button className="registerButton" type="submit">Register</button>
        </form>
       {error && <span>Something went wrong!</span>} 
    </div>
  )
}
