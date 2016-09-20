import React, {Component} from 'react';
import ImageDisplay from './ImageDisplay';

export default class Background extends Component {

    render() {
        return (
            <div className="profile-background-container">
                <ImageDisplay className="profile-background-preview" image={this.props.backgroundImage} />
            </div>
        );
    }
}


