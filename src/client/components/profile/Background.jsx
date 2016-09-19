import React, {Component} from 'react';
import ImageDisplay from './ImageDisplay';

export default class Background extends Component {

    render() {
        return (
            <div style={styles.container}>
                <ImageDisplay styles={styles.preview} image={this.props.backgroundImage} />
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

