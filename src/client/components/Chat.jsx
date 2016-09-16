import React from 'react';
import { Link } from 'react-router';

export default class Chat extends React.Component {
    render() {
        return (
            <div>
                <Link>Chat</Link>
                <Link to="tools">Tools</Link>
                <Link to="profile">Profile</Link>
            </div>
        );
    }
}
