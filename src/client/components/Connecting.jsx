import React, { Component } from 'react';

export default class Connecting extends Component {
    render() {
        return (
          <div className="listen-spinner">
            <div>
              <h2 onClick={this.props.onClick}>Listening For a Meeting...</h2>
              <Bars loadingString="123412523" />
            </div>
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