import React, { Component } from 'react';
import Modal from 'react-modal';

import { connect } from 'react-redux';
import { respondToHost } from '~/client/actionCreators';

import '~/shared/styles/poll.sass';

const MODAL_STYLES = {
  overlay : {
    backgroundColor   : 'rgba(0,0,0, 0.75)',
    display           : 'flex',
    flexDirection     : 'column',
    justifyContent    : 'center',
    alignItems        : 'center',
  },
  content : {
    position          : 'initial',
    width             : '80%',
  },
};

class Poll extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Modal isOpen={!!this.props.activePoll} style={MODAL_STYLES}>
        <div className='poll'>
            <h2 className='question'>{this.props.activePoll}</h2>
            <div className='button-row'>
              <button className='yes' onClick={() => this.props.dispatch(respondToHost(`yes`))}>YES</button>
              <button className='no' onClick={() => this.props.dispatch(respondToHost(`no`))}>NO</button>
            </div>
        </div>
      </Modal>
      );
  }
}

export default connect(state => state)(Poll);
