import React from 'react'
import Header from '../../header/Header';
import Posts from '../../Posts/Posts';
import Sidebar from '../../sidebar/Sidebar';
import './home.css';
import {useState, useEffect} from "react";
import axios from "axios";
import { useLocation } from 'react-router';

function Home() {
  const [posts,setPosts] = useState([])
  const {search}= useLocation()
  useEffect(() => {
    
    const fetchPosts = async () =>{
      const res = await axios.get("/posts"+search)
      setPosts(res.data)
    }
  
    // return () => {
    //   second
    // }
    fetchPosts();
  }, [search])
  
  return (
    <>  
    <Header/>
    <div className='home'> 
    <Posts posts={posts}/>
    <Sidebar/>
    </div>
    </>
  )
}

export default Home