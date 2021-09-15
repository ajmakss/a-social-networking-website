import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfile, getProfileStatus, updateProfileStatus } from '../../redux/profile-reducer';
import Preloader from '../common/Preloader/Preloader';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = 19575;
        }
        this.props.getProfile(userId);
        this.props.getProfileStatus(userId)
    }

    render() {
        if (!this.props.profile) {
            return <Preloader />
        }
        return (
            <Profile {...this.props} profile={this.props.profile}  status={this.props.status} updateProfileStatus={this.props.updateProfileStatus}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isLogin: state.auth.isLogin,
});


export default compose(connect(mapStateToProps, { getProfile, getProfileStatus, updateProfileStatus  }),
    withRouter,
    // withAuthRedirect
    )(ProfileContainer)

