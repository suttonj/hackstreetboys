import React, {Component, PropTypes} from 'react';

import ImageDisplay from './ImageDisplay';
import ImageUploadButton from './ImageUploadButton';

class ProfilePhotoUploader extends Component {

    render() {
        return (
            <div>
                <ImageDisplay 
                    styles={styles.photoCircle}
                    image={this.props.profileImage}
                    ref="uploader"/>
                    <div style={styles.photoButton}>
                    <ImageUploadButton
                        uploadEvent={this.props.avatarUploadEvent} />
                    </div>
            </div>
        );
    }
}

const styles = {
    photoCircle: {  
        position: 'absolute',
        alignSelf: 'center',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        left: '50%',
        overflow: 'hidden',
        transform: 'translate(-50%, -50%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#fff',
        border: 'solid 2px $white',
    },
    photoButton: {
        position: 'relative',
        padding: '5px 0',
        top: '100px',
        width: '100%',
        textAlign: 'center',
    }
}

ProfilePhotoUploader.propTypes = {
    avatarUploadEvent: PropTypes.func.isRequired,
    profileImage: PropTypes.string.isRequired,
};

export default ProfilePhotoUploader;
