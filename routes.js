const router = require('express').Router();
const createJoke = require('./jokes/create-joke');
const getJokes = require('./jokes/get-jokes');
const getJoke = require('./jokes/get-joke-by-id');
const updateJoke = require('./jokes/update-joke');

//test response
router.get('/', function(req, res){
	res.json({
		testing: "123",
	});
});

router.route('/create')
	.post(createJoke.create)
	.put(createJoke.create);
router.route('/list')
	.get(getJokes.list);
router.route('/:joke_id')
	.get(getJoke.view)
	.patch(updateJoke.update)
	.put(updateJoke.update);

module.exports = router;