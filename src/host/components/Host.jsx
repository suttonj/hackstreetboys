import React, { Component } from 'react';
import { connect } from 'react-redux';

import { emit } from '../actionCreators';

class Host extends Component {
    render = () =>
        <div>
            TODO - add toasts
            { this.props.app.results }
        </div>
}

export default connect(state => state)(Host);
