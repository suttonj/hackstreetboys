import React, { Component } from 'react';
import { connect } from 'react-redux';
import NotificationSystem from 'react-notification-system';

import { emit } from '../actionCreators';

class Host extends Component {
    constructor(props) {
        super(props);

        this.notificationSystem = null;
    }

    componentDidMount() {
        this.notificationSystem = this.refs.toasts;
    }

    componentWillReceiveProps(nextProps) {
        const raisedHand = nextProps.app.hasRaisedHand;
        if (raisedHand) {
            this.notificationSystem.addNotification({
                message: `${raisedHand} raised their hand.`,
                level: 'success',
                autoDismiss: 0,
            });
        }
    }

    render() {
        return(
            <div>
                <NotificationSystem ref="toasts" />
                { this.props.app.results }
            </div>
        );
    }
        
}

export default connect(state => state)(Host);
