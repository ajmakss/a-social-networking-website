import React from 'react';
import AddPostForm from './AddPostForm/AddPostForm';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id} {...props} />);

  return (
    <div>
      <AddPostForm {...props}/>
      {postsElements}
    </div>
  )
}

export default MyPosts;