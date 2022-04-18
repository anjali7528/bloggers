import React from 'react'
import './topbar.css'


function TopBar() {
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
                <div className='topListItem'>HOME</div>
                <div className='topListItem'>ABOUT</div>
                <div className='topListItem'>CONTACT </div>
                <div className='topListItem'>WRITE</div>
                <div className='topListItem'>LOG OUT</div>
            </div>
        </div>
        <div className='topRight'>
            <img className="topImage" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="profile image" />
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>

    </div>
  )
}

export default TopBar