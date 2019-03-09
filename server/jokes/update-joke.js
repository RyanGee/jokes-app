const Joke = require('./jokeSchema');

module.exports.update = function (req, res) {
Joke.findById(req.params.joke_id, function (err, joke) {
        if (err) {
            res.send(err);
        }
		joke.joke = req.body.joke ? req.body.joke : joke.joke;
        joke.save(function (err) {
            if (err) {
                res.json(err);
            }
            res.json({
            	status: "success",
                message: "Joke updated successfully",
                data: joke
            });
        });
    });
};