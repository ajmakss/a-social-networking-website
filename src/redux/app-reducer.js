
import {authUser} from './auth-reducer';
let initialState = {
    isInitialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_INITIALIZATING':
            return {
                ...state,
                isInitialized: true
            };
        default:
            return state;

    }
}
export const isinitializatingSucces = () => ({ type: 'SET_INITIALIZATING',});

export const  initializeApp = () => (dispatch) => {
    let promise = dispatch(authUser())
    promise.then(() => {
        dispatch(isinitializatingSucces())
    })
}

export default appReducer;