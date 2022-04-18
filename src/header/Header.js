import React from 'react'
import './header.css'

function Header() {
  return (
    <div className='header'>
       <div className="headersTitles">
           <span className="headerTitleSm">React & Node</span>
           <span  className="headerTitleLg">Blogger</span>
       </div>
       <img className='headerImg' src="https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
       alt="headerImg-sunrise" />
    </div>
  )
}

export default Header