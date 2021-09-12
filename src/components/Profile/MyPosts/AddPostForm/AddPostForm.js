import React from "react";
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
                <div className={s.addPost__avatar}>
                    <img src={props.profile.photos.large ? props.profile.photos.small
                        : 'https://motorhome.ee/wp-content/uploads/2020/01/blank-profile-picture-973460_1280-e1523978675847.png'} alt="avatar" />
                </div>
                <textarea className={s.addPost__textarea} ref={newPost} onChange={onPostChange} value={props.postText} placeholder="What is your mind?" />
            </div>
            <button className={s.addPost__btn} onClick={onAddNewPost}>Add post</button>
        </div>
    )
}

export default AddPostForm;