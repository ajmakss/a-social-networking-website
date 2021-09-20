import { userAPI } from '../api/api';

let initialState = {
    users: [],
    totalCount: 50,
    pageSize: 5,
    currentPage: 1,
    isFetching: false,
    isFollowingProcess: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            };
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            };
        case 'SET_USERS':
            return {
                ...state,
                users: action.users
            }

        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            };
        case 'SET_TOTAL_COUNT':
            return {
                ...state,
                totalCount: action.totalCount
            };
        case 'TOGGLE_IS_FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }
        case 'TOGGLE_IS_FOLLOWING_PROCESS':
            return {
                ...state,
                isFollowingProcess: action.isFetching
                    ? [...state.isFollowingProcess, action.userId]
                    : state.isFollowingProcess.filter(id => id !== action.userId)
            };
        default:
            return state;
    }
}

export const follow = (userId) => ({ type: 'FOLLOW', userId });
export const unfollow = (userId) => ({ type: 'UNFOLLOW', userId });
export const setUsers = (users) => ({ type: 'SET_USERS', users });
export const setCurrentPage = (currentPage) => ({ type: 'SET_CURRENT_PAGE', currentPage });
export const setTotalCount = (totalCount) => ({ type: 'SET_TOTAL_COUNT', totalCount });
export const toggleIsFetching = (isFetching) => ({ type: 'TOGGLE_IS_FETCHING', isFetching });
export const toggleIsFollowingProcess = (isFetching, userId) => ({ type: 'TOGGLE_IS_FOLLOWING_PROCESS', isFetching, userId });




export const getUsers = (currentPage, pageSize) => {

    return async (dispatch) => {
        dispatch(toggleIsFetching(true));

        let data = await userAPI.getUsers(currentPage, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalCount(100));
        dispatch(setCurrentPage(currentPage));

    }
}


const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleIsFollowingProcess(true, userId))
    let resp = await apiMethod(userId);

    if (resp.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleIsFollowingProcess(false, userId))
}
export const userUnFollow = (userId) => async (dispatch) => {
    let apiMethod = userAPI.unfollow.bind(userAPI);
    let actionCreator = unfollow;
    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)

}

export const userFollow = (userId) => async (dispatch) => {
    let apiMethod = userAPI.follow.bind(userAPI);
    let actionCreator = follow;
    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)

}

export default usersReducer;