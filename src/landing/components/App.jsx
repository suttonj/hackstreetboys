import React from 'react';
import { Link } from 'react-router';

export class App extends React.Component {
    render() {
        return (
            <div>
                <div>Google > Apps for Work > join.me</div>
                <Link to="/about">About</Link>
                <Link to="/repos">Repos</Link>
                {this.props.children}
            </div>
        );
    }
}

export class Landing extends React.Component {
    render() {
        return <div>Landing</div>;
    }
}

export class About extends React.Component {
    render() {
        return <div>About</div>;
    }
}

export class Repos extends React.Component {
    render() {
        return <div>Repos</div>;
    }
}
