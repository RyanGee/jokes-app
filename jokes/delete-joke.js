Joke = require('./jokeSchema');

module.exports.delete = function (req, res) {
    Joke.remove({
        _id: req.params.joke_id
    }, function (err, joke) {
        if (err) {
            res.send(err);
        }
		res.json({
            status: "success",
            message: 'Joke deleted successfully'
        });
    });
};