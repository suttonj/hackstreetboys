import React, {Component, PropTypes} from 'react';
//import Upload from 'rc-upload';

class ImageUploadButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let  clicked = (evt) {
            this.refs.uploader.click();
        };

        let fileUploaded = (evt) => {
            const tgt = evt.target || window.event.srcElement;
            const files = tgt.files;

            if (!files && !files.length) {
                //user did not select a file -> do nothing
            } else if (FileReader) {
                const fr = new FileReader();
                fr.onloadend = () => {
                    this.props.uploadEvent(fr.result);
                }
                fr.readAsDataURL(files[0]);
            }
        };

        return (
            <span style={styles.imageButton} unselectable="on" onClick={clicked}>
                <input type="file" onChange={fileUploaded} ref="uploader"/>
                <span
                    style={{ ...styles.icon, backgroundImage: 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/238777/img-ctrls.png")'}}/> 
                Upload a photo
            </span>
        );
    }
}

const styles = {
    imageButton: {
        position: 'relative',
        overflow: 'hidden',
        height: '50px',
        width: '175px',
        lineheight: '50px',
        fontSize: '14px',
        display: 'inline-block',
        padding: '0 10px',
        margin: '0',
        cursor: 'pointer',
        textAlign: 'center',
        borderRadius: '7px;',
        border: '1px solid rgba(0,0,0,0)',
        userSelect: 'none',
        color: '#fff',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    icon: {
        backgroundSize: 'initial',
        verticalAlign: 'sub',
        display: 'inline-block',
        width: '20px',
        height: '20px',
        borderRadius: '5px',
        marginRight: '4px',
        backgroundPosition: '0 0',
    },
}

ImageUploadButton.propTypes = {
    uploadEvent: PropTypes.func.isRequired,
    type: PropTypes.string,
};

export default ImageUpload;
