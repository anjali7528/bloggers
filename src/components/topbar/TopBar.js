import React ,{useContext}from 'react'
import { Link } from 'react-router-dom';
import './topbar.css'
import { Context } from '../../context/Context';

function TopBar() {
  const {user,dispatch} = useContext(Context);

  const handleLogout = () =>{
    dispatch({type:"LOGOUT"});
    window.location.replace("./login");
  }
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
                <div className='topListItem' onClick={handleLogout}>
                  {user && "LOGOUT"}
                </div>
            </div>
        </div>
        <div className='topRight'>
          {user ? (
            <img className="topImage" 
            src={user.profilePic}
            alt=""/>
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