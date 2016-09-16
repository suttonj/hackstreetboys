import React from 'react';
import { Link } from 'react-router';

export default class Profile extends React.Component {
    render() {
        return (
            <div>
                <Link to="chat">Chat</Link>
                <Link to="tools">Tools</Link>
                <Link>Profile</Link>
            </div>
        );
    }
}
