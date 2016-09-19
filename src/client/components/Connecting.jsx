import React, { Component } from 'react';

export default class Connecting extends Component {
    render() {
        return (
          <div className="listen-spinner">
            <h2 onClick={this.props.onClick}>Listening For a Meeting...</h2>
            <div id="scenes">
              <div className="scene scene1">
                <div className="description">Giant Robots!</div>
                <div className="dot"></div>
              </div>
            </div>
          </div>
        );
    }
}
