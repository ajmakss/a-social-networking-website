import React from "react";
import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unFollowAC } from '../../redux/users-reducer';
import * as axios from 'axios';
import Users from "./Users";

class UsersContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(resp => {
                this.props.setUsers(resp.data.items)
                this.props.setTotalCount(100)
            })

    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(resp => {
                this.props.setUsers(resp.data.items)
            })

    }
    render() {
        return <Users totalCount={this.props.totalCount}
            pageSize={this.props.pageSize}
            users={this.props.users}
            currentPage={this.props.currentPage}
            onPageChange={this.onPageChange}
            follow={this.props.follow}
            unfollow={this.props.unfollow}/>
    }
}
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unFollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        },
        setTotalCount: (totalCount) => {
            dispatch(setTotalCountAC(totalCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

