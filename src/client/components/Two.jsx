import React from 'react';
import { Link } from 'react-router';

export default class Two extends React.Component {
    render() {
        return (
            <div>
                <h1>Two</h1>
                <Link to="/">Previous</Link>
                <Link to="/Three">Next</Link>
            </div>
        );
    }
}
