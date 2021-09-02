import React from 'react';
import s from'./MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
         <div>
           My posts
           <div>
             new post
           </div>
          <Post/>
          </div>
    )
}

export default MyPosts;