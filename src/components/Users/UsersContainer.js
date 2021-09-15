import React from "react";
import { connect } from "react-redux";
import { follow, setTotalCount, unfollow, toggleIsFollowingProcess, getUsers, userUnFollow, userFollow } from '../../redux/users-reducer';
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };


    onPageChange = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
        
    };
    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users totalCount={this.props.totalCount}
                    pageSize={this.props.pageSize}
                    users={this.props.users}
                    currentPage={this.props.currentPage}
                    onPageChange={this.onPageChange}
                    isFollowingProcess={this.props.isFollowingProcess}
                    userUnFollow={this.props.userUnFollow}
                    userFollow={this.props.userFollow}
                    isLogin={this.props.isLogin}/>
            </>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingProcess: state.usersPage.isFollowingProcess,
        isLogin: state.auth.isLogin
    }
};


export default compose(
    connect(mapStateToProps,
    {follow, unfollow, setTotalCount,
    toggleIsFollowingProcess, getUsers, 
    userUnFollow, userFollow}),
    // withAuthRedirect
    )(UsersContainer)

