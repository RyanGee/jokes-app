import React, { Component } from 'react';
import Joke from './Joke';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {getJokes} from '../actions/jokes';

class JokesList extends Component {
    componentDidMount() {
        this.props.getJokes();
    }
    render() {
        function listProps(obj) {
            return Object.entries(obj.jokes);
        }
        return (
            <div>
                <h1>All Jokes</h1>
                {listProps(this.props.jokes).map((post) => {
                    return <Joke key={post[0]} id={post[0]} joke={post[1]} />
                })}
            </div>
        );
    }
}

JokesList.propTypes = {
    getJokes: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    return {
        jokes: state.jokes
    }
}
export default connect(mapStateToProps, {getJokes})(JokesList);