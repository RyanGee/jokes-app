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
			<div className="d-flex justify-content-between list-group-item mb-1">
				{this.props.joke}
				<button
					className="btn btn-danger"
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