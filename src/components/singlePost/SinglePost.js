import React, { useContext } from 'react'
import "./singlepost.css"
import {useEffect,useState} from 'react'
import { useLocation } from 'react-router'
import axios from "axios";
import {Link} from "react-router-dom"
import { Context } from '../../context/Context';


export default function SinglePost() {
  const PF = "http://localhost:8000/images/"
  const location = useLocation();
   const path=location.pathname.split('/')[2];
   const [post,setPost] = useState({})
   const{user} = useContext(Context);

   useEffect(() => {
     const getPost = async ()=>{
       const res = (await axios.get("/posts/"+ path));
      setPost(res.data);
     };
     getPost()
   }, [path]);
  
   const handleDelete =async() => {
     try{
      await axios.delete(`/posts/${post._id}`,{
        data: { username: user.username },
    });
      window.location.replace("/");
     }catch(err){}
   };

   

  return (
    <div className='singlepost'> 
      <div className="singlePostWrapper">
        {post.photo && (
        <img 
        src={PF + post.photo}
        alt="" 
        className="singlePostImg" />
        )}
          
          <h1 className="singlepostTitle">
              {post.title}
              {post.username === user?.username && (
                <div className="singlePostEdit">
                <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                <i className="singlePostIcon fa-solid fa-trash-can" onClick={handleDelete}></i>
 </div>

              )}
             
          </h1>
          <div className="singlePostInfo">
              <span className='singlePostAuthor'>Author:
              <Link to={`?user=${post.username}`} className="link">
              <b>{post.username}</b> 
              </Link>
              </span>
              <span className="singlePostDate">{new Date(post.createAt).toDateString}</span>
          </div>
          <p className='singlePostDesc'>
            {post.desc}
          </p>
      </div>
    </div>
   
  )
}
