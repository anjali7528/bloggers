import React from 'react'
import './post.css'

export default function Post() {
  return (
    <div className='post'>
      <img 
      className='postImg'
      src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
      alt=''/>
    <div className='postInfo'>
      <div className='postCats'>
        <div className='postCat'>Music</div>
        <div className='postCat'>Life</div>
      </div>
      <span className='postTitle'>
        Enim exercitation amet non.
      </span>
      <hr/>
      <span className='postDate'>
        1 hour ago
      </span>
      <p className='postDesc'>Est esse eu veniam Lorem anim non velit irure fugiat commodo velit occaecat eu ad. Aliqua ut et nulla ex sit amet irure ea. Labore dolore est cillum elit excepteur eu magna minim laborum. Laborum velit tempor veniam ut in minim eu consequat.</p>
    </div>
    </div>
  )
}
