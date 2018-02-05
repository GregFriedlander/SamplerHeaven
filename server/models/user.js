var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-as-promised');

var UserSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    state: String,
    bio: String,
    samplers: [{type: Schema.Types.ObjectId, ref: 'Sampler'}],
    requests: [{type: Schema.Types.ObjectId, ref: 'Request'}],
}, {timestamps: true})

UserSchema.pre('save', function(next){
	var user = this;
	bcrypt.hash(user.password, 10)
	.then(function(hashed_pw){
		user.password = hashed_pw;
		next();
	})
	.catch(function(error){
		console.log(error);
	})
})

mongoose.model('User', UserSchema);