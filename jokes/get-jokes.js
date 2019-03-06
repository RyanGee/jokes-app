Joke = require('./jokeSchema');

module.exports.list = function (req, res) {
    Joke.get(function (err, jokes) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Jokes retrieved successfully",
            data: jokes
        });
    });
};