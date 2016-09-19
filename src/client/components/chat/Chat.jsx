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
        emit({ type: `CHAT_MESSAGE`, name: this.props.profile.name || `You`, text: `${this.refs.m.value}`, role: `viewer`, messageType: `message` });
        this.refs.m.value = ``;
    }

    render() {

        const plusIcon = <div className="plus-btn" onClick={() => this.setState({ isPlusMenuOpen: !this.state.isPlusMenuOpen })}>+</div>;

        const plusMenu = <div>
            <button onClick={() => emit({ type: `RAISE_HAND` })}>Raise Hand</button>
            <button>Direct Message</button>
        </div>;

        const textInput = <input ref="m" autoComplete="off" onKeyPress={e => e.key === `Enter` && this.sendChatMessage() } placeholder="Type to chat..." className="chat-input" />;

        return (
            <div className={`chat-container`}>
            {this.props.chat.messages.map((msg, i) =>
                <div key={i} className={`message ${msg.messageType} ${msg.role}`}>
                { msg.messageType === `message` ? `${msg.name}: ${msg.text}` : msg.text}
                </div>
            )}
                <div className="chat-input-container">
                    { plusIcon }
                    { this.state.isPlusMenuOpen && plusMenu }
                    { textInput }
                    <button className="send-btn" onClick={this.sendChatMessage}>➦</button>
                </div>
            </div>
        );
    }
}

export default connect(state => state)(Chat);
