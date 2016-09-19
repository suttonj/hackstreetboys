import React from 'react';
import { connect } from 'react-redux';

import { emit } from '~/client/actionCreators';

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.sendChatMessage = this.sendChatMessage.bind(this);
    }

    sendChatMessage = () => {
        emit({ type: `CHAT_MESSAGE`, message: `You ${this.refs.m.value}` });
        this.refs.m.value = ``;
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.messages.map((msg, i) => <li key={i}>{msg}</li>)}
                </ul>
                <input ref="m" autoComplete="off" />
                <button onClick={this.sendChatMessage}>Send</button>
                <button onClick={() => emit({ type: `RAISE_HAND` })}>Raise Hand</button>
            </div>
        );
    }
}

export default connect(state => state.chat)(Chat);
