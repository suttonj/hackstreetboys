import React, {Component, PropTypes} from 'react';

const PersonalBackgroundImage = 'https://secure.join.me/Common/Images/Background/Socks.jpg';

export default class Background extends Component {

    render() {
        return (
            <div style={styles.container}>
                <div style={{ ...styles.preview, backgroundImage: `url("${PersonalBackgroundImage}")`}}></div>
            </div>
        );
    }
}

const styles = {
    container: {
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        backgroundColor: 'gray',
        height: '230px',
    },
    preview: {
        height: '100%',
        width: '100%',
        backgroundColor: 'whitesmoke',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }
};

