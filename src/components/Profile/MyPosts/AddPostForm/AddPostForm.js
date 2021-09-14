import React from "react";
import SmallAvatar from "../../../common/SmallAvatar/SmallAvatar";
import s from './AddPostForm.module.css';

const AddPostForm = (props) => {
    let newPost = React.createRef();

    const onAddNewPost = () => {
        props.addPost();
    };

    const onPostChange = () => {
        let text = newPost.current.value;
        props.updatePost(text);
    };
    return (
        <div className={s.addPostForm}>
            <div className={s.addPost__wrapper}>
                <SmallAvatar photo={props.profile.photos.small } />
                <textarea className={s.addPost__textarea} ref={newPost} onChange={onPostChange} value={props.postText} placeholder="What is your mind?" />
            </div>
            <button className={s.addPost__btn} onClick={onAddNewPost}>Add post</button>
        </div>
    )
}

export default AddPostForm;