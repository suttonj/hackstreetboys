import React, { Component } from 'react';
import { connect } from 'react-redux';

class Connecting extends Component {
    render() {
        return (
          <div className="listen-spinner">
            <div className="listen-status" style={{marginBottom:60}}>
              <h2 onClick={this.props.onClick}>Listening for a meeting...</h2>
              <Bars loadingString={this.props.code} />
            <div>
              { this.props.audioSources.map(src => 
                <div style={{maxWidth:100, textWrap:`wrap`}}>
                  <div>{`id: ${src.id}`}</div>
                  <div>{`label: ${src.label}`}</div>
                  <button onClick={() => this.props.onSourceChanged(src.id)}>Use</button>
                </div>
              ) }
            </div>
            </div>
          </div>
        );
    }
}

export default connect(state => state.app)(Connecting);

class Bars extends Component {
    render() {
      return(
        <div style={{display:`flex`, alignItems: `center`}}>
          <div style={{marginRight:10, fontSize:20}}>join.me/</div>
          <div className="loading-string" style={{top:10}}>
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
        </div>
      )
    }
}