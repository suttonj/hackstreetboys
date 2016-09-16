import React from 'react';
import { Link } from 'react-router';

export default class One extends React.Component {
    render() {
        return (
            <div>
                <h1>One</h1>
                <Link to="/two">Next</Link>
            </div>
        );
    }
}
