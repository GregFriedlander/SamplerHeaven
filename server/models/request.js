var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var RequestSchema = new mongoose.Schema({
    brand: String,
    model: String,
    condition: String,
    details: String,
    minPrice: Number,
    maxPrice: Number,
    views: {type: Number, default: 0},
    _user: {type: Schema.Types.ObjectId, ref:'User'},
}, {timestamps: true})

mongoose.model('Request', RequestSchema);