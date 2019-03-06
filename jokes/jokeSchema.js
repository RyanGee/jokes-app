var mongoose = require('mongoose');

var jokeSchema = mongoose.Schema({
    joke: {
        type: String,
        required: true
    }
    created_at: {
        type: Date,
        default: Date.now
    }
});

var Joke = module.exports = mongoose.model('joke', jokeSchema);
module.exports.get = function (callback, limit) {
    Joke.find(callback).limit(limit);
}