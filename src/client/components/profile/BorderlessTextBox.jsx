import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

class BorderlessTextBox extends Component {
    constructor(props) {
        super(props);

        this.timeout = null;
        this.state = { text: '' };

        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnBlur = this.handleOnBlur.bind(this);
        this.handleOnFocus = this.handleOnFocus.bind(this);

        //Internal text change handler prevents duplicate textChanged
        //events:
        let lastText = '';
        this.textChanged = (newText) => {
            if (newText === lastText) {
                return;
            } else {
                lastText = newText;
                this.props.textChanged(newText);
            }
        };
    }


    render() {
        let textDefaultValue = this.props.initialValue ? this.props.initialValue : '';
        let inputSize = (this.state.text.length || this.props.placeholder.length) + 1;

        return (<input type="text" className="borderless-textbox"
                    placeholder={this.props.placeholder}
                    defaultValue={textDefaultValue}
                    onChange={this.handleOnChange}
                    onFocus={this.handleOnFocus}
                    onBlur={this.handleOnBlur}
                    onKeyUp={this.handleKeyUp}
                    ref="theInput"
                    minLength="9"
                    maxLength="128"
                    size={inputSize}/>);
    }

    handleKeyUp(e) {
        if (e.keyCode === 13) {
            this.refs.theInput.blur();
            e.preventDefault();
        } else if (this.props.type === 'name') {
            this.textChanged(e.target.value);
        }
    }

    handleOnChange(e) {
        clearTimeout(this.timeout);
        const text = e.target.value;
        this.setState({text: text});
        this.timeout = setTimeout(() => this.textChanged(text), 300);
    }

    handleOnBlur(e) {
        clearTimeout(this.timeout);
        this.textChanged(e.target.value);
    }

    handleOnFocus(e) {

    }
}

BorderlessTextBox.propTypes = {
    placeholder: PropTypes.string.isRequired,
    textChanged: PropTypes.func.isRequired,
    initialValue: PropTypes.string,
    type: PropTypes.string,
};

export default BorderlessTextBox;
