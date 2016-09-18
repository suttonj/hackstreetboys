import React, { Component } from 'react';
import { connect } from 'react-redux';

import { emit } from '../actionCreators';

class Host extends Component {
    render() {
        const openClientModal = () => emit({ type: `TOGGLE_MODAL`, isModalOpen: true });
        return (
            <div>
                <button onClick={openClientModal}>Open Client Modal</button>
                { this.props.app.results }
            </div>
        );
    }
}

export default connect(state => state)(Host);
