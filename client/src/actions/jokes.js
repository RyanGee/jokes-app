import axios from 'axios';
import { CREATE_JOKE, GET_ERRORS, LOAD_JOKES, DELETE_JOKE } from './types';

export const createJoke = (joke) => dispatch => {
    axios.post('/jokes/create', {joke})
        .then(res => {
            dispatch(addJoke(res));
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}

export const getJokes = (jokes) => dispatch => {
    axios.get('/jokes/list')
        .then(res => {
            dispatch(loadJokes(res));
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}

export const deleteJoke = (joke) => dispatch => {
    console.log(joke);
    axios.delete(`/jokes/${joke}`)
        .then(res => {
            dispatch(removeJoke(joke));
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}

export const addJoke= joke => {
    return {
        type: CREATE_JOKE,
        joke: joke
    }
}

export const loadJokes= res => {
    return {
        type: LOAD_JOKES,
        jokes: res
    }
}

export const removeJoke= joke => {
    return {
        type: DELETE_JOKE,
        joke: joke
    }
}
