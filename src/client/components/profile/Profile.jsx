import React from 'react';
import Background from './Background';

export default class Profile extends React.Component {
    render() {
        return (
            <div>
                <Background backgroundImage={this.props.data.background} />
            </div>
        );
    }
}
