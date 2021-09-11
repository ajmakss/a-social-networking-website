import React from 'react';
import { addPost, updatePost } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    postText: state.profilePage.postText
  }
}

const MyPostsContainer = connect(mapStateToProps, {addPost, updatePost})(MyPosts);

export default MyPostsContainer;