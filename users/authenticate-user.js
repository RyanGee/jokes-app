const user = require('./userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    authenticate: function(req, res, next) {
        user.findOne({email:req.body.email}, function(err, userInfo){
            if (err) {
                next(err);
            } else {
                if(bcrypt.compareSync(req.body.password, userInfo.password)) {
                    const token = jwt.sign({ id: userInfo._id }, req.app.get('secretKey'), { expiresIn: '1h' });
                    res.json({
                        status:"success",
                        message: "User logged in successfully.",
                        data:{
                            user: userInfo,
                            token:token
                        }
                    });
                }else{
                    res.json({
                        status:"error",
                        message: "Those login credentials don't look right.",
                        data:null
                    });
                }
            }
        });
    },
}