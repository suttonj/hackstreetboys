import React from 'react';
import { Link } from 'react-router';

export default class Tools extends React.Component {
    render() {
        return (
            <div>
                <Link to="chat">Chat</Link>
                <Link>Tools</Link>
                <Link to="profile">Profile</Link>
            </div>
        );
    }
}
