import React from 'react';
import { Link } from 'react-router';

export default class Three extends React.Component {
    render() {
        return (
            <div>
                <h1>Three</h1>
                <Link to="/Two">Previous</Link>
            </div>
        );
    }
}
