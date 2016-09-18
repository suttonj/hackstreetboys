import React, { Component, PropTypes } from 'react';

export default class Tool extends Component {
    render() {
        return (
            <div onClick={this.props.setTool}>
                <div><img src={this.props.iconUrl} /></div>
                <div>{this.props.title}</div>
                <div>{this.props.description}</div>
            </div>
        );
    }
}

Tool.propTypes = {
    setTool: PropTypes.func.isRequired,
    iconUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};
