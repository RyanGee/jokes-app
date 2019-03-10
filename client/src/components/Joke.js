import React, { Component } from 'react';
import { deleteJoke } from '../actions/jokes';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class Joke extends Component {
	handleDelete = (e) => {
		console.log('clicked');
		this.props.deleteJoke(this.props.id);
	}
	render() {
		return (
			<div>
				<p>{this.props.joke}</p>
				<button
					onClick={this.handleDelete}>
					Delete
				</button>
			</div>
		);
	}
}

Joke.propTypes = {
    deleteJoke: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export  default connect(mapStateToProps, { deleteJoke })(Joke)