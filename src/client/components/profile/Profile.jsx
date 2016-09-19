import React from 'react';
import Background from './Background';
import Avatar from './Avatar';

export default class Profile extends React.Component {
    render() {
        return (
            <div>
                <Background backgroundImage={this.props.data.background} />
                <Avatar profileImage={this.props.data.avatar} avatarUploadEvent={this.props.setAvatar} />
            </div>
        );
    }
}
