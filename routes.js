const router = require('express').Router();
const createJoke = require('./jokes/create-joke');
const getJokes = require('./jokes/get-jokes');

//test response
router.get('/', function(req, res){
	res.json({
		testing: "123",
	});
});

router.route('/create')
	.post(createJoke.create);
router.route('/list')
	.get(getJokes.list)

module.exports = router;