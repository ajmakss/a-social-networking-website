import React from "react";
import profileReducer, { addPost } from './profile-reducer';

let initialState = {
    postsData: [
        { id: 1, message: 'I am learning React', likesCount: 5 },
        { id: 1, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', likesCount: 35 },
        { id: 1, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', likesCount: 23 },
        { id: 1, message: 'Hi, its my first post', likesCount: 42 },

    ],
};

it('length of posts should be incremented', () => {
    let action = addPost('hi');

    let newState = profileReducer(initialState, action);

    expect(newState.postsData.length).toBe(5);
});

it('message of post should be correct', () => {
    let action = addPost('its a new post');
    let newState = profileReducer(initialState, action);

    expect(newState.postsData[0].message).toBe('its a new post');
});