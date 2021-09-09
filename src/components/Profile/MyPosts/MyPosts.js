import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id} />);


  let newPost = React.createRef();

  const onAddNewPost = () => {
    props.addPost();
  }

  const onPostChange = () => {
    let text = newPost.current.value;
    props.updatePost(text)
  }
  return (
    <div>
      My posts
      <div>
        <textarea ref={newPost} onChange={onPostChange} value={props.postText} />
        <button onClick={onAddNewPost}>Add post</button>
      </div>
      {postsElements}
    </div>
  )
}

export default MyPosts;