import React from 'react';
import { addNewPostActionCreator, postOnChangeActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    postText: state.profilePage.postText
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addNewPostActionCreator());
    },
    updatePost: (text) => {
      dispatch(postOnChangeActionCreator(text));
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;