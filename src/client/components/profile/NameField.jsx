import {Component, PropTypes} from 'react';
import BorderlessTextBox from './BorderlessTextBox';

export default class NameField extends Component {
    render() {
        return (
            <div style={styles.nameField}>
                <BorderlessTextBox 
                    type="name" 
                    placeholder="Enter your name"
                    initialValue={this.props.name}
                    textChanged={this.props.textChanged} />
            </div>
        );
    }
}

const styles = {
    nameField: {
        position: 'absolute',
        bottom: '160px',
        width: '100%',
    }
};

NameField.propTypes = {
    name: PropTypes.string,
    textChanged: PropTypes.func.isRequired,
};
