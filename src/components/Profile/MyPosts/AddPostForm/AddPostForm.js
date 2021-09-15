import React from "react";
import { reduxForm, Field, reset } from "redux-form";
import SmallAvatar from "../../../common/SmallAvatar/SmallAvatar";
import s from './AddPostForm.module.css';
import {requiredField, maxLengthCreator} from '../../../../validators/validators';

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.form}> 
             <Field component='textarea' name="postText" 
             className={s.addPost__textarea} placeholder="What is your mind?" 
             validate={[requiredField]}/>
            <button className={s.addPost__btn} >Add post</button>
        </form >
    )
}

let ReduxPostForm = reduxForm({
    form: 'post'
})(PostForm);

const AddPostForm = (props) => {

    const onSubmit = (data, dispatch) => {
        props.addPost(data.postText)
        dispatch(reset("post"))
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