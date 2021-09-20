
import { profileAPI } from '../api/api';

let initialState = {
    postsData: [
        { id: 1, message: 'I am learning React', likesCount: 5 },
        { id: 1, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', likesCount: 35 },
        { id: 1, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', likesCount: 23 },
        { id: 1, message: 'Hi, its my first post', likesCount: 42 },

    ],
    profile: null,
    status: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-NEW-POST':
            let newPost = {
                id: 5,
                message: action.postText,
                likesCount: 0,
            };
            return {
                ...state,
                postText: '',
                postsData: [newPost, ...state.postsData]
            };
        case 'SET_USER_PROFILE':
            return {
                ...state,
                profile: action.profile
            };
        case 'SET_PROFILE_STATUS':
            return {
                ...state,
                status: action.status
            }
        default:
            return state;

    }
}
export const addPost = (postText) => ({ type: 'ADD-NEW-POST', postText });
export const setUserProfile = (profile) => ({ type: 'SET_USER_PROFILE', profile });
export const setProfileStatus = (status) => ({ type: 'SET_PROFILE_STATUS', status });


export const getProfile = (userId) => async (dispatch) => {
    let resp = await profileAPI.getUser(userId);

    dispatch(setUserProfile(resp.data));

}

export const getProfileStatus = (userId) => async (dispatch) => {
    let resp = await profileAPI.getStatus(userId);

    dispatch(setProfileStatus(resp.data));

};

export const updateProfileStatus = (status) => async (dispatch) => {
    let resp = await profileAPI.putStatus(status);

    if (resp.data.resultCode === 0) {
        dispatch(setProfileStatus(resp.data));
    }

}
export default profileReducer;