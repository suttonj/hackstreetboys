import { connect } from 'react-redux';
import React, {PropTypes} from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.updateName = this.updateName.bind(this);
    }

    updateName(event) {
        const newName = event.target.value;
        this.props.dispatch({type: `UPDATE_PROFILE`, name: newName})
    }

    render() {
        return (
            <div>
                <h1> Profile </h1>
                <input autoComplete="off" placeholder="Enter Your Name" onChange={this.updateName} value={this.props.name}/>
                <hr></hr>
                <h2>Want your own join.me account?</h2>
                <form>
                    <div>
                        <label>Email</label>
                        <input autoComplete="off" value={this.props.email}/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input autoComplete="off" type="password"/>
                    </div>
                    <button type='submit'>Register</button>
                </form>
            </div>
        );
    }
}

Profile.propTypes = {
    name : PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
}

export default connect(state => state.profile)(Profile);
