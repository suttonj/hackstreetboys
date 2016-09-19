import React, { Component } from 'react';
import Modal from 'react-modal';

const MODAL_STYLES = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0,0,0, 0.75)',
    display           : 'flex',
    flexDirection     : 'column',
    justifyContent    : 'center',
    alignItems        : 'center',
  },
  content : {
    position                   : 'initial',
    width                      : '80%',
    border                     : '1px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px'
  },
};

export default class Poll extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Modal isOpen={this.props.activePoll} style={MODAL_STYLES}>
        <div className='poll'>
            <h3>{this.props.activePoll}</h3>
            <button onClick={() => this.props.dispatch(respondToHost(`yes`))}>Yes</button>
            <button onClick={() => this.props.dispatch(respondToHost(`no`))}>No</button>
        </div>
      </Modal>
      );
  }
}
