import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import JokeForm from './JokeForm';
import JokesList from './JokesList';

class Home extends Component {
    render() {
    	const {isAuthenticated} = this.props.auth;
    	const authPage = (
            <div className="container">
            	<JokeForm />
            	<JokesList />
            </div>
        )
      const guestPage = (
        <h2>Please log in</h2>
      )
        return (
            <div className="container">
                {isAuthenticated ? authPage : guestPage}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(withRouter(Home));