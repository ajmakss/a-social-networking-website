import { stopSubmit, reset } from 'redux-form';
import { authAPI } from '../api/api';
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
            };
        default:
            return state;

    }
}
export const setUserData = (userId, email, login, isLogin) => ({ type: 'SET_USER_DATA', data: { userId, email, login, isLogin } });

export const authUser = () => (dispatch) => {
    return authAPI.auth()
        .then(resp => {
            if (resp.data.resultCode === 0) {
                let { id, email, login } = resp.data.data;
                dispatch(setUserData(id, email, login, true));
            }
        })
}
export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(resp => {
            if (resp.data.resultCode === 0) {
                dispatch(authUser());
                dispatch(reset("login"))
            } else {
                let message = resp.data.messages.length > 0 ? resp.data.messages[0]  : 'Incorrect email or password';
                dispatch(stopSubmit('login', { _error: message }))
            }

        })
}
export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(resp => {
            if (resp.data.resultCode === 0) {
                dispatch(authUser(null, null, null, false))
            }
        })
}

export default authReducer;