import React from 'react'
import './settings.css'
import Sidebar from "../../../components/sidebar/Sidebar"

export default function Settings() {
  return (
    <div className='settings'>
      <div className="settingWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form action="" className="settingsForm">
          <label >Profile Picture</label>
          <div className="settingsPP">
            <img 
            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" 
            alt="" 
            />
            <label htmlFor='fileInput'>
            <i className="settingsPPIcon fa-solid fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}} />
          </div>
          <label >Username</label>
          <input type="text" placeholder='Anjali' />
          <label >Email</label>
          <input type="email" placeholder='anjaligandhi@gmail.com' />
          <label >Password</label>
          <input type="password"  />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar/>
    </div>
  )
}
