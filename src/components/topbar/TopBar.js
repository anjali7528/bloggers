import React from 'react'
import { Link } from 'react-router-dom';
import './topbar.css'

function TopBar() {
  const user = false;
  return (
    <div className='top'>
        <div className='topLeft'>
             <i className="topIcon fa-brands fa-facebook"></i>
             <i className="topIcon fa-brands fa-twitter-square"></i>
             <i className="topIcon fa-brands fa-linkedin"></i>
             <i className="topIcon fa-brands fa-instagram"></i>
        </div>
        <div className='topCenter'>
            <div className='topList'>
                <div className='topListItem'>
                  <Link className="link" to="/" >HOME</Link>
                </div>
                <div className='topListItem'><Link className="link" to="/" >ABOUT</Link></div>
                <div className='topListItem'><Link className="link" to="/" >CONTACT</Link> </div>
                <div className='topListItem'><Link className="link" to="/write" >WRITE</Link></div>
                <div className='topListItem'>
                  {user && "LOGOUT"}
                </div>
            </div>
        </div>
        <div className='topRight'>
          {user ? (
            <img className="topImage" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="topimage"/>
          )
            : (
              <ul className='topList'>
                <li className='topListItem'><Link className='link' to="/login">LOGIN</Link></li>
                <li className='topListItem'> <Link className='link' to="/register"> REGISTER</Link></li>
            </ul>
            )
          }
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>

    </div>
  )
}

export default TopBar