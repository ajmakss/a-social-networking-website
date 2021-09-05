import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  const { message, likesCount } = props;

  return (
    <div className={s.postItem}>
      <div className={s.post__header}>
        <div className={s.post__headline}>
          <div className={s.post__avatar}>
            <img src="https://motorhome.ee/wp-content/uploads/2020/01/blank-profile-picture-973460_1280-e1523978675847.png" alt="profile icon" />
          </div>
          <div className={s.post__headerDescr}>
            <a href="#">Name</a>
            <div className={s.post__date}>
              5
              <span>Hrs</span>
            </div>
          </div>
        </div>
        <div className={s.post__more}>
          ...
        </div>
      </div>
      <div className={s.post__content}>
        {message}
      </div>
      <div className={s.post__footer}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="22" height="22" className={s.like__icon}>
          <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path>
        </svg>
        <span>Like</span>
        {likesCount}
      </div>

    </div>
  )
}

export default Post;