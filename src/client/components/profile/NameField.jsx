import {Component, PropTypes} from 'react';
import BorderlessTextBox from './BorderlessTextBox';

export default class NameField extends Component {
    render() {
        return (
            <div className="name">
                <BorderlessTextBox 
                    type="name" 
                    placeholder="Enter your name"
                    initialValue={this.props.name}
                    textChanged={this.props.textChanged} />
            </div>
        );
    }
}


NameField.propTypes = {
    name: PropTypes.string,
    textChanged: PropTypes.func.isRequired,
};
