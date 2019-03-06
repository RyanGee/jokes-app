const Joke = require('./jokeSchema');

module.exports.create = function (req, res) {
	console.log('is working');
    var joke = new Joke();
    joke.joke = req.body.joke;
    joke.save(function (err) {
        if (err) {
			res.json(err);
		}
		res.json({
            message: 'New joke created!',
            data: joke
        });
    });
};