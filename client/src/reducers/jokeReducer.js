import { CREATE_JOKE, LOAD_JOKES, DELETE_JOKE } from '../actions/types';

const initialState = {
    jokes: {}
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case CREATE_JOKE:
            const newId = action.joke.data.data._id;
            const newJoke = action.joke.data.data.joke;
            state.jokes[newId] = newJoke;
            return {
                ...state,
            }
        case LOAD_JOKES:
            state.jokes = {};
            action.jokes.data.data.forEach(function(val) {
                state.jokes[val._id] = val.joke;
            })
            return {...state};
        case DELETE_JOKE:
        console.log(action.joke);
            delete state.jokes[action.joke]
            return {...state};
        default:
            return state;
    }
}