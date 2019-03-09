Joke = require('./jokeSchema');

module.exports.view = function (req, res) {
    Joke.findById(req.params.joke_id, function (err, joke) {
        if (err)
            res.send(err);
        res.json({
        	status: "success",
            message: 'Joke loaded successfully',
            data: joke
        });
    });
};