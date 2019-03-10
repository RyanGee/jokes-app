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
					<div className="form-group">
						<input required type="text" className="form-control" ref={(input)=>this.getJoke = input}
						placeholder="Enter Joke"/>
					</div>
					<div class="form-group">
						<button className="btn btn-primary">Create</button>
					</div>
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