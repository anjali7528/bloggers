import React from 'react';
import Sidebar from '../../sidebar/Sidebar';
import SinglePost from '../../singlePost/SinglePost';
import "./single.css"

export default function () {
  return (
    <div className='single'>
        <SinglePost/>
        <Sidebar/>
    </div>
  )
}