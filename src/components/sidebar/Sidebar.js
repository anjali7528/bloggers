import React from 'react'
import "./sidebar.css";

function Sidebar() {
  return (
    <div className='sidebar'>
    <div className='sidebarItem'>
      <span className='sidebarTitle'>ABOUT ME</span>
      <img src="https://images.unsplash.com/photo-1480406266260-49c193257b6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt=""></img>
      <p>Consequat eiusmod quis veniam duis id amet dolore enim ut laborum occaecat cupidatat laboris fugiat.</p>
    </div>
    <div className='sidebarItem'>
    <span className='sidebarTitle'>CATEGORIES</span>
    <ul className='sidebarList'>
      <li className='sidebarListItem'>Life</li>
      <li className='sidebarListItem'>Music</li>
      <li className='sidebarListItem'>Style</li>
      <li className='sidebarListItem'>Sport</li>
      <li className='sidebarListItem'>Tech</li>
      <li className='sidebarListItem'>Cinema</li>
    </ul>
    </div>
    <div className='sidebarItem'>
      <span className='sidebarTitle'>FOLLOW US</span>
      <div className='sidebarSocial'>
             <i className="sidebarIcon fa-brands fa-facebook"></i>
             <i className="sidebarIcon fa-brands fa-twitter-square"></i>
             <i className="sidebarIcon fa-brands fa-linkedin"></i>
             <i className="sidebarIcon fa-brands fa-instagram"></i>
      </div>
    </div>
    </div>  
  )
}

export default Sidebar