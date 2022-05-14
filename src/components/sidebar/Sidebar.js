import axios from 'axios';
import React from 'react'
import "./sidebar.css";
import {useEffect,useState} from "react";
import {Link} from 'react-router-dom';


function Sidebar() {
  const [cats, setcats] = useState([]);

  useEffect(() => {
    const getCats = async()=>{
      const res  = await axios.get("/categories")
      setcats(res.data);
    }
    getCats();
  }, [])
  
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
      {cats.map((c)=>{
        <Link to={`/?cat = ${c.name}`} className="link">
        <li className='sidebarListItem'>{c.name}</li>
        </Link>
        
      })}
      
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