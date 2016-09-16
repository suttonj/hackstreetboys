import React from 'react';
import { Link } from 'react-router';

import { joinMeColors as colors } from '~/shared/styles';

export default class Header extends React.Component {
    render() {
        return (
            <div style={styles.header}>
                <Link to="chat">Chat</Link>
                <Link to="tools">Tools</Link>
                <Link to="profile">Profile</Link>
            </div>
        );
    }
}

const styles = {
    header: {
        color: 'white',
        backgroundColor: colors.ORANGE,
    },
};
