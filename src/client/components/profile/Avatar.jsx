import React, {Component, PropTypes} from 'react';

import ImageDisplay from './ImageDisplay';

export default class Avatar extends Component {

    render() {
        return (
            <div className="profile-photo-container">
                <ImageDisplay 
                    className="profile-photo-circle"
                    image={this.props.profileImage}
                    ref="uploader"/>
            </div>
        );
    }
}


Avatar.propTypes = {
    avatarUploadEvent: PropTypes.func.isRequired,
    profileImage: PropTypes.string.isRequired,
};
