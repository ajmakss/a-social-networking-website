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
          <Post message="I am learning React" likesCount="5"/>
          <Post message="Hi, its my first post" likesCount="30"/>
          </div>
    )
}

export default MyPosts;