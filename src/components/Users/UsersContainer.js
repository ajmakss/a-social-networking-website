import React from "react";
import { connect } from "react-redux";
import { follow, setCurrentPage, setTotalCount, setUsers, toggleIsFetching, unfollow } from '../../redux/users-reducer';
import * as axios from 'axios';
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentios: true
        })
            .then(resp => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(resp.data.items)
                this.props.setTotalCount(100)
            })

    }

    onPageChange = (pageNumber) => {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${pageNumber}&count=${this.props.pageSize}`, 
        {withCredentios: true})
            .then(resp => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(resp.data.items)
            })

    }
    render() {
        return (
            <>  
            {this.props.isFetching ? <Preloader/> : null}
                <Users totalCount={this.props.totalCount}
                    pageSize={this.props.pageSize}
                    users={this.props.users}
                    currentPage={this.props.currentPage}
                    onPageChange={this.onPageChange}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow} />
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
        isFetching: state.usersPage.isFetching
    }
};


export default connect(mapStateToProps, 
    {follow, unfollow, setUsers, setCurrentPage, setTotalCount, toggleIsFetching })(UsersContainer);

