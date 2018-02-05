var mongoose = require('mongoose');
var User = mongoose.model('User');
var Sampler = mongoose.model('Sampler');
var Request = mongoose.model('Request');
var bcrypt = require('bcrypt-as-promised');

module.exports = {
    register: function(req,res){
        console.log('hit Users.register');
        if(req.body.password != req.body.passwordConfirm){
            res.send("Passwords don't match");
        }else{
            var newUser = new User(req.body);
            newUser.save(function(err){
                if(err){
                    console.log("something went wrong, err = ", err);
                    var errorsArray = [];
					if(err.errmsg != undefined){
						errorsArray = [{message: "Email is already taken"}]
					}else{
						for(var key in err.errors){
							errorsArray.push(err.errors[key]);
						}
					}
					res.json(errorsArray);
                }else{
                    console.log('Successfully Saved User');
                    req.session.userId = newUser._id;
                    res.json(newUser);
                }
            })
        }
    },
    login: function(req,res){
        console.log('hit Users.login');
        User.findOne({email:req.body.email}, function(err,foundUser){
            if(foundUser != null){
                console.log('found user in DB');
                bcrypt.compare(req.body.password, foundUser.password)
                .then(function(data){
                    console.log('passwords match');
                    req.session.userId = foundUser._id;
                    //Take Out Once Working
                    res.json(foundUser);
                })
                .catch(function(error){
                    console.log("passwords don't match");
                    console.log(error);
                    res.json(error);
                })
            }else{
                console.log("email not valid");
                res.json(err);
            }
        })
    },
    currentuser: function(req,res){
        User.findOne({_id: req.session.userId}).exec(function(err, foundUser){
			console.log('foundUser', foundUser);
			res.json(foundUser);
		})
    },
}