import React from 'react';
import Background from './Background';
import Avatar from './Avatar';
import NameField from './NameField';

export default class Profile extends React.Component {
    render() {
        return (
            <div>
                <Background backgroundImage={this.props.data.background} />
                <Avatar profileImage={this.props.data.avatar} avatarUploadEvent={this.props.setAvatar} />
                <NameField name={this.props.data.name} textChanged={this.props.setName} />
            </div>
        );
    }
}
