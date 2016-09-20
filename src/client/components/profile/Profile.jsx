import React from 'react';
import { connect } from 'react-redux';
import Background from './Background';
import Avatar from './Avatar';
import NameField from './NameField';
import Register from './Register';

class Profile extends React.Component {
    render() {
        return (
            <div style={{display:`flex`,flexDirection:`column`}}>
                <div style={{height:380}}>
                    <Background backgroundImage={this.props.data.background} />
                    <Avatar profileImage={this.props.data.avatar} avatarUploadEvent={this.props.setAvatar} />
                </div>
                <div>
                    <NameField name={this.props.data.name} textChanged={this.props.setName} />
                </div>
                <div style={{padding:`0 10px`}}>
                    <Register />
                </div>
                <div style={{padding:`0 10px`}}>
                    <button className="btn btn-full btn-primary"
                    onClick={() => this.props.dispatch({type: `SET_TAB`, tab: `chat`})}>Join</button>
                </div>
            </div>
        );
    }
}

export default connect()(Profile);
