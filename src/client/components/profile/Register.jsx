import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Register extends Component {
    render() {
        return (
            <div className="register-container">
                <div className="register-title">
                    WANT YOUR OWN JOIN.ME ACCOUNT?
                </div>
                <div className="input-with-label">
                    <div>Email:</div>
                    <input type="text" />
                </div>
                <div className="input-with-label">
                    <div>Password:</div>
                    <input type="password"/>
                </div>
            </div>
        );
    }
}

export default connect()(Register);
