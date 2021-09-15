import React from "react";
import { reduxForm, Field } from "redux-form";
import SmallAvatar from "../../../common/SmallAvatar/SmallAvatar";
import s from './AddPostForm.module.css';


const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
             <Field component="textarea" name="postText" className={s.addPost__textarea} placeholder="What is your mind?" />
            <button className={s.addPost__btn} >Add post</button>
        </form >
    )
}

let ReduxPostForm = reduxForm({
    form: 'post'
})(PostForm);

const AddPostForm = (props) => {

    const onSubmit = (data) => {
        props.addPost(data.postText)
    };

    return (
        <div className={s.addPostForm}>
            <div className={s.addPost__wrapper}>
                <SmallAvatar photo={props.profile.photos.small} />
              <ReduxPostForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

export default AddPostForm;