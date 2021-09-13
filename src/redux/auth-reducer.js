import {authAPI} from '../api/api';
let initialState = {
    userId: null,
    email: null,
    login: null,
    isLogin: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.data,
                isLogin: true
            };
        default:
            return state;

    }
}

export const login = () => {
    return (dispatch) => {
        authAPI.auth()
            .then(resp => {
                if (resp.data.resultCode === 0) {
                    let { id, email, login } = resp.data.data;
                    dispatch(setUserData(id, email, login));

                }
            })
    }
}
export const setUserData = (userId, email, login) => ({ type: 'SET_USER_DATA', data: { userId, email, login } });


export default authReducer;