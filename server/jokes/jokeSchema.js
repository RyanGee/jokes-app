const mongoose = require('mongoose');

const jokeSchema = mongoose.Schema({
    joke: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

const Joke = module.exports = mongoose.model('joke', jokeSchema);

module.exports.get = function (callback, limit) {
    Joke.find(callback).limit(limit);
}
