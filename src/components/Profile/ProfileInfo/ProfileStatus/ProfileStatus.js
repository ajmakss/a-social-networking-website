import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }
    disactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateProfileStatus(this.state.status);
        
    }
    onPostChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    render() {
        return (
           <>
           {this.state.editMode
           ? <input autoFocus={true} onBlur={this.disactivateEditMode}  onChange={this.onPostChange} type="text" value={this.state.status}/>
           : <p  onDoubleClick={this.activateEditMode}> {this.props.status}</p>
           }
           </>
        )
    }
}

export default ProfileStatus;