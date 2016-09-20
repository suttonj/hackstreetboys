import React, { Component, PropTypes } from 'react';

export default class Tool extends Component {
    render() {
        return (
            <div className={this.props.real ? 'tool-row' : 'tool-row disabled' } onClick={this.props.setTool}>
                <div className='tool-image'><img src={this.props.iconUrl} /></div>
                <div className='tool-text'>
                  <h3 className='tool-title'>{this.props.title}</h3>
                  <small className='tool-description'>{this.props.description}</small>
                </div>
                <span className='tool-status'>{this.props.real ? null : 'COMING SOON'}</span>
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
