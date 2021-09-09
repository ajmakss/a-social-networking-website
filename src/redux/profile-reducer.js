
let initialState = {
    postsData: [
        { id: 1, message: 'I am learning React', likesCount: 5 },
        { id: 1, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', likesCount: 35 },
        { id: 1, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', likesCount: 23 },
        { id: 1, message: 'Hi, its my first post', likesCount: 42 },

    ],
    postText: 'it-camasutra',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-NEW-POST':
            let newPost = {
                id: 5,
                message: state.postText,
                likesCount: 0,
            };
            return {
                ...state,
                postText: '',
                postsData: [newPost, ...state.postsData]
            };
        case 'UPDATE-POST-TEXT':
            return {
                ...state,
                postText: action.text,
            };
        default:
            return state;

    }
}
export const addNewPostActionCreator = () => ({ type: 'ADD-NEW-POST' });
export const postOnChangeActionCreator = (text) => {
    return {
        type: 'UPDATE-POST-TEXT',
        text: text
    }
}

export default profileReducer;