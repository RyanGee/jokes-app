const router = require('express').Router();
const createUser = require('../users/create-user');
const authenticateUser = require('../users/authenticate-user')

//test response
router.get('/', function(req, res){
	res.json({
		testing: "123",
	});
});

router.route('/register')
	.post(createUser.create)
	.put(createUser.create);
router.route('/login')
	.post(authenticateUser.authenticate);

module.exports = router;