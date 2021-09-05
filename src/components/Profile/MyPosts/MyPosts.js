import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.state.postsData.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id} />);
  return (
    <div>
      My posts
      <div>
        new post
      </div>
      {postsElements}
    </div>
  )
}

export default MyPosts;