import React from 'react';
import { connect } from 'react-redux';

import { emit } from '~/client/actionCreators';

import '~/shared/styles/chat.sass';

class Chat extends React.Component {
    
    state = { isPlusMenuOpen: false }

    constructor(props) {
        super(props);
        this.sendChatMessage = this.sendChatMessage.bind(this);
    }

    sendChatMessage = () => {
        emit({ type: `CHAT_MESSAGE`, text: `You ${this.refs.m.value}`, role: `viewer`, messageType: `message` });
        this.refs.m.value = ``;
    }

    render() {

        const plusIcon = <div onClick={() => this.setState({ isPlusMenuOpen: !this.state.isPlusMenuOpen })}>+</div>;

        const plusMenu = <div>
            <button onClick={() => emit({ type: `RAISE_HAND` })}>Raise Hand</button>
            <button>Direct Message</button>
        </div>;

        const textInput = <input ref="m" autoComplete="off" onKeyPress={e => e.key === `Enter` && this.sendChatMessage() } placeholder="Type to chat..." />;

        return (
            <div>
                <ul>
                    {this.props.messages.map((msg, i) => <div key={i} className={`message ${msg.messageType} ${msg.role}`}>{msg.text}</div>)}
                </ul>
                { plusIcon }
                { this.state.isPlusMenuOpen && plusMenu }
                { textInput }
                <button onClick={this.sendChatMessage}>Send</button>
            </div>
        );
    }
}

export default connect(state => state.chat)(Chat);
