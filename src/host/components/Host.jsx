import '../../shared/styles/theme.sass';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import NotificationSystem from 'react-notification-system';

import PollResults from './PollResults';

import { emit } from '../actionCreators';

class Host extends Component {
    constructor(props) {
        super(props);

        this.notificationSystem = null;
    }

    componentDidMount() {
        this.notificationSystem = this.refs.toasts;
    }

    componentWillReceiveProps(nextProps, oldProps) {
        const raisedHands = nextProps.app.hasRaisedHand;

        if (raisedHands && raisedHands.length > this.props.app.hasRaisedHand.length) {
            this.notificationSystem.addNotification({
                level: 'info',
                autoDismiss: 0,
                children: (
                    <div style={{alignSelf: 'center', padding: '20px 0 5px 0', textAlign: 'center'}}>
                        <b>{`${raisedHands[raisedHands.length-1]}`}</b> raised their hand. ✋
                    </div>
                )
            });
        }
    }

    render() {
        return(
            <div>
                <NotificationSystem ref="toasts" style={toastStyle} />
                { this.props.app.activePoll &&
                    <PollResults 
                        pollResults={this.props.app.pollResults}
                        dismiss={() => this.props.dispatch({type: 'CLEAR_POLL'})} />
                }
            </div>
        );
    }
}

const toastStyle = {
    Containers: {
        DefaultStyle: {
            width: '280px',
        }
    },
    NotificationItem: {
        info: {
            backgroundColor: '#444',
            color: '#fff',
            height: '80px',
            borderTop: 'none',
            borderRadius: '4px',
        },
    },
    Dismiss: {
        DefaultStyle: {
            backgroundColor: 'rgba(0,0,0,0)'
        }
    }
}

export default connect(state => state)(Host);
