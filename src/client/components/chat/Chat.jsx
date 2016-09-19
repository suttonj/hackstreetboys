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
        const text = this.refs.m.value;
        if (!text) {
            return;
        }
        emit({ type: `CHAT_MESSAGE`, name: this.props.profile.name || `You`, text, role: `viewer`, messageType: `message` });
        this.refs.m.value = ``;
    }

    render() {

        const plusIcon = <div className="plus-btn" onClick={() => this.setState({ isPlusMenuOpen: !this.state.isPlusMenuOpen })}>+</div>;

        const plusMenu = <div className="popover" onClick={() => this.setState({ isPlusMenuOpen: false })}>
            <div onClick={() => emit({ type: `RAISE_HAND` })}>Raise Hand</div>
            <div>Direct Message</div>
            <div className="bubble-triangle" />
            <div className="bubble-triangle-border" />
        </div>;

        const textInput = <input ref="m" autoComplete="off" onKeyPress={e => e.key === `Enter` && this.sendChatMessage() } placeholder="Type to chat..." className="chat-input" />;

        return (
            <div className={`chat-container`}>
                <div className={`chat-message-container`}>
                {this.props.chat.messages.map((msg, i) =>
                    <div key={i} className={`message ${msg.messageType} ${msg.role}`}>
                    { msg.messageType === `message` ? `${msg.name}: ${msg.text}` : msg.text}
                    </div>
                )}
                </div>
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
