import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfile } from '../../redux/profile-reducer';
import Preloader from '../common/Preloader/Preloader';
import { withRouter } from 'react-router';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;

        if(!userId) {
            userId= 2
        }
        getProfile(userId);
    }

    render() {
       if(!this.props.profile) {
           return <Preloader/>
       }
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let ProfileContainerWithRouter = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getProfile })(ProfileContainerWithRouter)
