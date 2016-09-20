import React, { Component } from 'react';

export default class Connecting extends Component {
    render() {
        return (
          <div className="listen-spinner">
            <div id="scenes">
              <div className="scene scene1">
                <div className="description">Giant Robots!</div>
                <div className="dot"></div>
              </div>
            </div>
            <div className="listen-status">
              <h2 onClick={this.props.onClick}>Listening For a Meeting...</h2>
              <Bars loadingString={this.props.code} />
            </div>
          </div>
        );
    }
}

class Bars extends Component {
    render() {
      return(
        <div className="loading-string">
          <div className="bars" >
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
          </div>
          <div className="bar-text"> {this.props.loadingString} </div>
        </div>
      )
    }
}