import React, { Component } from 'react';
import { connect } from 'react-redux';

import { emit } from '../actionCreators';

import '~/shared/styles/HostQuestion.sass';

class HostQuestion extends Component {
    render() {
        const askQuestion = () => {
          const setPollAction = { type: `SET_POLL`, activePoll: this.refs.question.value };
          emit(setPollAction);
          this.props.dispatch(setPollAction);
        }

        return (
            <div>
                <form>
                  <h4 className='title'>Create your custom question</h4>
                  <label>Question</label>
                  <textarea ref='question' />
                  <button className='btn btn-secondary btn-full btn-small' onClick={askQuestion}>
                    Ask this question
                  </button>
                </form>
            </div>
        );
    }
}

export default connect(state => state)(HostQuestion);
