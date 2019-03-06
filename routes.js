const router = require('express').Router();
const createJoke = require('./jokes/create-joke');

console.log(createJoke);

//test response
router.get('/', function(req, res){
	res.json({
		testing: "123",
	});
});

router.route('/create')
	.post(createJoke.create);

module.exports = router;