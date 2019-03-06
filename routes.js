const router = require('express').Router();

//test response
router.get('/', function(req, res){
	res.json({
		testing: "123",
	});
});

module.exports = router;