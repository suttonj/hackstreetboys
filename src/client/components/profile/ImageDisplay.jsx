import React, {Component, PropTypes} from 'react';

class ImageDisplay extends Component {

    render() {
        const imageDataUrl = this.props.image || '';

        return (
            <div style={{ ...this.props.styles, backgroundImage: `url("${imageDataUrl}")` }} />
        );
    }
}

ImageDisplay.propTypes = {
    image: PropTypes.string,
    styles: PropTypes.object,
};

export default ImageDisplay;
