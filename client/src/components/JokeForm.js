import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { createJoke } from '../actions/jokes';

class JokeForm extends Component {
	handleSubmit = (e) => {
		e.preventDefault();
		const joke = this.getJoke.value;
		this.props.createJoke(joke);
		this.getJoke.value = '';
	}
	render() {
		return (
			<div>
				<h1>Create Joke</h1>
				<form onSubmit={this.handleSubmit}>
					<input required type="text" ref={(input)=>this.getJoke = input}
					placeholder="Enter Joke"/>
					<button>Create</button>
				</form>
			</div>
		);
	}
}

JokeForm.propTypes = {
    createJoke: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export  default connect(mapStateToProps, { createJoke })(JokeForm)