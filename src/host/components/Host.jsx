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
        const raisedHand = nextProps.app.hasRaisedHand;

        if (raisedHand) {
            if (this.props.app.hasRaisedHand && raisedHand === this.props.app.hasRaisedHand) {
                return;
            }

            this.notificationSystem.addNotification({
                level: 'info',
                autoDismiss: 0,
                children: (
                    <div style={{alignSelf: 'center', padding: '20px 0 5px 0', textAlign: 'center'}}>
                        <b>{`${raisedHand}`}</b> raised their hand. ✋
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
                    <PollResults pollResults={this.props.app.pollResults} />
                }
            </div>
        );
    }
}

const toastStyle = {
    NotificationItem: {
        info: {
            backgroundColor: '#444',
            color: '#fff',
            height: '80px',
            borderTop: 'none',
            borderRadius: '4px',
        },
    }
}

export default connect(state => state)(Host);
