var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SamplerSchema = new mongoose.Schema({
    brand: String,
    model: String,
    condition: String,
    price: Number,
    details: String,
    image: String,
    userEmail: String,  
    views: {type: Number, default: 0},
    _user: {type: Schema.Types.ObjectId, ref:'User'},
}, {timestamps: true})

mongoose.model('Sampler', SamplerSchema);