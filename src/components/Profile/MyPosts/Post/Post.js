import React from 'react';
import s from'./Post.module.css';

const Post = () => {
    return (
             <div className={s.postItem}> 
               <img src="https://motorhome.ee/wp-content/uploads/2020/01/blank-profile-picture-973460_1280-e1523978675847.png" alt="" />
               post 1
             </div>
    )
}

export default Post;